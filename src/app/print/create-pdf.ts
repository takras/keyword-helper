import { PDFDocument, PageSizes, StandardFonts, rgb } from "pdf-lib";
import { rules as rulesDocument } from "@/data/rules";
import { Affiliation, Card } from "./types";

const IMAGE_PATH = "/unitcards";
const PAGE_MARGIN = 30;

interface List {
  page: number;
  row: number;
  column: number;
  image: string;
  faction: string;
  affiliation?: Affiliation;
  type: "front" | "back";
}

export const PrintStyles = [
  "fullSamePage",
  "frontOnly",
  "doubleSided",
  "keywordsOnBack",
] as const;

export type PrintStyle = (typeof PrintStyles)[number];

interface Props {
  selection: Card[];
  printStyle: PrintStyle;
  enableBleed?: boolean;
}

export async function createPdf({ selection, printStyle, enableBleed }: Props) {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const version = rulesDocument.cardsVersion;

  const ROW_LIMIT = 4;

  let pageCount = 1;
  let rowCount = 1;
  let column = 1;
  const UNIT_CARD_X = 249.9;
  const UNIT_CARD_Y = 175.7;
  const BLEED_CARD_X = 257.8;
  const BLEED_CARD_Y = 180;
  const LINE_LENGTH = 15;
  const COLOR_RED = rgb(1, 0, 0);
  const COLOR_GREEN = rgb(0, 1, 0);
  const COLOR_BLUE = rgb(0, 0, 1);
  const COLOR_ORANGE = rgb(1, 0.5, 0);
  const BLEED_MARGIN_X = (BLEED_CARD_X - UNIT_CARD_X) / 2 + 0.1;
  const BLEED_MARGIN_Y = (BLEED_CARD_Y - UNIT_CARD_Y) / 2 + 0.1;
  const pageList = selection.flatMap((card) => {
    const cardList: List[] = [];
    for (let i = 0; i < card.amount; i++) {
      let pageIncrement = 1;
      let rowIncrement = 1;
      const faction = card.faction.toLowerCase();
      const affiliation = card.affiliation;
      const affiliatePath = affiliation ? `/${affiliation}` : "";
      const imageFront = `${IMAGE_PATH}/${faction}${affiliatePath}/${card.filename}_front.png`;
      const imageBack = `${IMAGE_PATH}/${faction}${affiliatePath}/${card.filename}_back.png`;
      switch (printStyle) {
        case "fullSamePage":
          cardList.push({
            column: 1,
            row: rowCount,
            image: imageFront,
            page: pageCount,
            faction,
            affiliation,
            type: "front",
          });
          cardList.push({
            column: 2,
            row: rowCount,
            image: imageBack,
            page: pageCount,
            faction,
            affiliation,
            type: "back",
          });
          break;
        case "doubleSided":
          cardList.push({
            column: column,
            row: rowCount,
            image: imageFront,
            page: pageCount,
            faction,
            affiliation,
            type: "front",
          });
          cardList.push({
            column: column === 1 ? 2 : 1,
            row: rowCount,
            image: imageBack,
            page: pageCount + 1,
            faction,
            affiliation,
            type: "back",
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
            faction,
            affiliation,
            type: "front",
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
      `Created with v${version} of official AMG cards. Legion Helper`,
      {
        x: 50,
        y: fontSize * 2 + 12,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
      }
    );
    page.drawText(
      `(legion.takras.net), page ${i} of ${pageCount}. Print at 100% scale.`,
      {
        x: 50,
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
      const scaled = pngImage.scaleToFit(UNIT_CARD_X, UNIT_CARD_Y);

      const MARGIN_X = enableBleed ? BLEED_MARGIN_X : 0;
      const MARGIN_Y = enableBleed ? BLEED_MARGIN_Y : 0;
      const xColumn1 = page.getWidth() / 2 - scaled.width - MARGIN_X;
      const xColumn2 = page.getWidth() / 2;
      const y =
        page.getHeight() -
        PAGE_MARGIN -
        (enableBleed ? BLEED_CARD_Y : scaled.height + MARGIN_Y) * card.row;

      if (enableBleed) {
        const affiliatePath = card.affiliation ? `/${card.affiliation}` : "";
        const bleedImage = `${IMAGE_PATH}/${card.faction}${affiliatePath}/bleed_${card.type}.png`;
        const bleedImageBytes = await fetch(bleedImage).then((res) =>
          res.arrayBuffer()
        );
        const bleedPngImage = await pdfDoc.embedPng(bleedImageBytes);
        page.drawImage(bleedPngImage, {
          x: card.column === 1 ? xColumn1 - MARGIN_X : xColumn2,
          y: y - MARGIN_Y,
          width: BLEED_CARD_X,
          height: BLEED_CARD_Y,
        });
      }

      page.drawImage(pngImage, {
        x: card.column === 1 ? xColumn1 : xColumn2 + MARGIN_X,
        y,
        width: scaled.width,
        height: scaled.height,
      });

      // Top, 1, 3
      page.drawLine({
        start: {
          x: card.column === 1 ? xColumn1 : xColumn2 + MARGIN_X,
          y: page.getHeight(),
        },
        end: {
          x: card.column === 1 ? xColumn1 : xColumn2 + MARGIN_X,
          y: page.getHeight() - LINE_LENGTH,
        },
        thickness: 1,
      });

      // Bottom, 1, 3
      page.drawLine({
        start: {
          x: card.column === 1 ? xColumn1 : xColumn2 + MARGIN_X,
          y: 0,
        },
        end: {
          x: card.column === 1 ? xColumn1 : xColumn2 + MARGIN_X,
          y: LINE_LENGTH,
        },
        thickness: 1,
      });

      // Bottom, 2, 4
      page.drawLine({
        start: {
          x:
            card.column === 1
              ? xColumn1 + UNIT_CARD_X
              : xColumn2 + UNIT_CARD_X + MARGIN_X,
          y: 0,
        },
        end: {
          x:
            card.column === 1
              ? xColumn1 + UNIT_CARD_X
              : xColumn2 + UNIT_CARD_X + MARGIN_X,
          y: LINE_LENGTH,
        },
        thickness: 1,
      });

      // Top, 2, 4
      page.drawLine({
        start: {
          x:
            card.column === 1
              ? xColumn1 + UNIT_CARD_X
              : xColumn2 + UNIT_CARD_X + MARGIN_X,
          y: page.getHeight(),
        },
        end: {
          x:
            card.column === 1
              ? xColumn1 + UNIT_CARD_X
              : xColumn2 + UNIT_CARD_X + MARGIN_X,
          y: page.getHeight() - LINE_LENGTH,
        },
        thickness: 1,
      });

      // Left, 1
      page.drawLine({
        start: {
          x: 0,
          y: enableBleed ? y - MARGIN_Y * 2 + BLEED_CARD_Y : y,
        },
        end: {
          x: LINE_LENGTH,
          y: enableBleed ? y - MARGIN_Y * 2 + BLEED_CARD_Y : y,
        },
        thickness: 1,
      });

      // Right, 1
      page.drawLine({
        start: {
          x: page.getWidth() - LINE_LENGTH,
          y: enableBleed ? y - MARGIN_Y * 2 + BLEED_CARD_Y : y,
        },
        end: {
          x: page.getWidth(),
          y: enableBleed ? y - MARGIN_Y * 2 + BLEED_CARD_Y : y,
        },
        thickness: 1,
      });

      // Right, 2
      page.drawLine({
        start: { x: page.getWidth() - LINE_LENGTH, y: y + MARGIN_Y },
        end: { x: page.getWidth(), y: y + MARGIN_Y },
        thickness: 1,
      });

      // Left, 2
      page.drawLine({
        start: { x: 0, y: y + MARGIN_Y },
        end: { x: LINE_LENGTH, y: y + MARGIN_Y },
        thickness: 1,
      });

      counter++;
      if (totalCards === counter) {
        resolve("");
      }
    });
  });

  pdfDoc.setAuthor("Legion Helper legion.takras.net");
  pdfDoc.setCreationDate(new Date());
  pdfDoc.setTitle("PDF by Legion Helper");
  pdfDoc.setProducer("https://legion.takras.net");
  pdfDoc.setSubject(printStyle);
  return pdfDoc.saveAsBase64({ dataUri: true, useObjectStreams: true });
}
