import { PDFDocument, PDFImage, PageSizes, StandardFonts, rgb } from "pdf-lib";

const IMAGE_PATH = "/unitcards";
const IMAGE_WIDTH = 1049 / 4;
const IMAGE_HEIGHT = 739 / 4;
const PAGE_MARGIN = 20;

export async function createPdf(selection: Card[]) {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const page = pdfDoc.addPage(PageSizes.A4);
  const fontSize = 12;
  page.drawText("Card page created with Legion Helper (legion.takras.net)", {
    x: 200,
    y: fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  const embedding = new Promise((resolve) => {
    let counter = 1;
    const images = selection.map(async (card) => {
      const streams: PDFImage[] = [];
      for (let i = 0; i < card.amount; i++) {
        console.log(card.name, counter);
        const xFront = page.getWidth() / 2 - IMAGE_WIDTH;
        const xBack = page.getWidth() / 2;
        const y = page.getHeight() - PAGE_MARGIN - IMAGE_HEIGHT * counter;

        const imageFront = `${IMAGE_PATH}/${card.faction}/${card.filename}_front.png`;
        const imageFrontBytes = await fetch(imageFront).then((res) =>
          res.arrayBuffer()
        );
        const pngFrontImage = await pdfDoc.embedPng(imageFrontBytes);

        const imageBack = `${IMAGE_PATH}/${card.faction}/${card.filename}_back.png`;
        const imageBackBytes = await fetch(imageBack).then((res) =>
          res.arrayBuffer()
        );
        const pngBackImage = await pdfDoc.embedPng(imageBackBytes);

        streams.push(pngFrontImage);
        streams.push(pngBackImage);

        /*page.drawImage(pngFrontImage, {
          x: xFront,
          y,
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
        });
        page.drawImage(pngBackImage, {
          x: xBack,
          y,
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
        });*/

        counter++;
      }
      return streams;
    });
    return resolve(images);
  }).then((data) => {
    console.log(data);
  });
  const foo = await embedding;

  const pdf = await pdfDoc.saveAsBase64({ dataUri: true });
  return pdf;
}
