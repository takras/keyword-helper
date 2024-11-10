import { PDFDocument, PageSizes, StandardFonts, rgb } from "pdf-lib";
import { rules as rulesDocument } from "@/data/rules";

const IMAGE_PATH = "/unitcards";
const PAGE_MARGIN = 20;

interface List {
  page: number;
  row: number;
  column: number;
  image: string;
}

export const PrintStyles = [
  "fullSamePage",
  "frontOnly",
  "doubleSided",
] as const;

export type PrintStyle = (typeof PrintStyles)[number];

interface Props {
  selection: Card[];
  printStyle: PrintStyle;
}

export async function createPdf({ selection, printStyle }: Props) {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const version = rulesDocument.cardsVersion;

  const ROW_LIMIT = 4;

  let pageCount = 1;
  let rowCount = 1;
  let column = 1;
  const pageList = selection.flatMap((card) => {
    const cardList: List[] = [];
    for (let i = 0; i < card.amount; i++) {
      let pageIncrement = 1;
      let rowIncrement = 1;
      const faction = card.faction.toLowerCase();
      const imageFront = `${IMAGE_PATH}/${faction}/${card.filename}_front.png`;
      const imageBack = `${IMAGE_PATH}/${faction}/${card.filename}_back.png`;
      switch (printStyle) {
        case "fullSamePage":
          cardList.push({
            column: 1,
            row: rowCount,
            image: imageFront,
            page: pageCount,
          });
          cardList.push({
            column: 2,
            row: rowCount,
            image: imageBack,
            page: pageCount,
          });
          break;
        case "doubleSided":
          cardList.push({
            column: column,
            row: rowCount,
            image: imageFront,
            page: pageCount,
          });
          cardList.push({
            column: column === 1 ? 2 : 1,
            row: rowCount,
            image: imageBack,
            page: pageCount + 1,
          });
          pageIncrement = 2;
          if (column === 1) {
            column = 2;
            rowIncrement = 0;
          } else {
            column = 1;
          }
          break;
        case "frontOnly": {
          cardList.push({
            column,
            row: rowCount,
            image: imageFront,
            page: pageCount,
          });
          if (column === 1) {
            column = 2;
            rowIncrement = 0;
          } else {
            column = 1;
          }

          break;
        }
        default:
          break;
      }

      rowCount = rowCount + rowIncrement;
      if (rowCount > ROW_LIMIT) {
        rowCount = 1;
        pageCount = pageCount + pageIncrement;
      }
    }
    return cardList;
  });

  pageCount = pageList.some((card) => card.page === pageCount)
    ? pageCount
    : pageCount - 1;
  pageCount = printStyle === "doubleSided" ? pageCount + 1 : pageCount;

  const fontSize = 10;
  for (let i = 1; i <= pageCount; i++) {
    const page = pdfDoc.addPage(PageSizes.A4);
    page.drawText(
      `Created with v${version} of official AMG cards. Legion Helper (legion.takras.net), page ${i} of ${pageCount}. Print at 100% scale.`,
      {
        x: 20,
        y: fontSize + 10,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
      }
    );
  }

  await new Promise((resolve) => {
    let counter = 0;
    const totalCards = pageList.length;
    pageList.forEach(async (card) => {
      const page = pdfDoc.getPage(card.page - 1);

      const imageBytes = await fetch(card.image).then((res) =>
        res.arrayBuffer()
      );
      const pngImage = await pdfDoc.embedPng(imageBytes);
      const scaled = pngImage.scaleToFit(249.9, 175.7);

      const xColumn1 = page.getWidth() / 2 - scaled.width;
      const xColumn2 = page.getWidth() / 2;
      const y = page.getHeight() - PAGE_MARGIN - scaled.height * card.row;

      page.drawImage(pngImage, {
        x: card.column === 1 ? xColumn1 : xColumn2,
        y,
        width: scaled.width,
        height: scaled.height,
      });

      counter++;
      if (totalCards === counter) {
        resolve("");
      }
    });
  });

  pdfDoc.setAuthor("Legion Helper legion.takras.net");
  pdfDoc.setCreationDate(new Date());
  pdfDoc.setTitle("Legion Helper");
  pdfDoc.setProducer("https://legion.takras.net");
  pdfDoc.setSubject(printStyle);
  return pdfDoc.saveAsBase64({ dataUri: true });
}
