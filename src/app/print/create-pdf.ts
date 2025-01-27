import {
  PDFDocument,
  PDFFont,
  PDFPage,
  PageSizes,
  StandardFonts,
  rgb,
} from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { rules as rulesDocument } from "@/data/rules";
import { Affiliation, Card } from "./types";
import { AvailableKeywords } from "@/types";
import { getEnrichedKeyword, Variables } from "@/utils";

const IMAGE_PATH = "/unitcards";
const PAGE_MARGIN = 30;
const UNIT_CARD_X = 249.9;
const UNIT_CARD_Y = 175.7;
const BLEED_CARD_X = 257.8;
const BLEED_CARD_Y = 180;
const LINE_LENGTH = 15;
const KEYWORD_TOP_MARGIN = 42;
const MAX_HEIGHT_FOR_KEYWORD_TEXT = 134;
const BLEED_MARGIN_X = (BLEED_CARD_X - UNIT_CARD_X) / 2 + 0.1;
const BLEED_MARGIN_Y = (BLEED_CARD_Y - UNIT_CARD_Y) / 2 + 0.1;
const keywordBack = `${IMAGE_PATH}/keyword-back.png`;
const FONT_SIZE = 9;
const TITLE_FONT_SIZE = 14;
let keywordOnCardYOffset = 0;

interface List {
  page: number;
  row: number;
  column: number;
  image: string;
  faction: string;
  name: string;
  affiliation?: Affiliation | "keywords";
  type: "front" | "back";
  keywords?: AvailableKeywords[];
}

export const PrintStyles = [
  "fullSamePage",
  "frontOnly",
  "doubleSided",
  "keywordsOnBack",
  "keywordsSamePage",
  "keywordsOnly",
] as const;

export type PrintStyle = (typeof PrintStyles)[number];

interface Props {
  selection: Card[];
  printStyle: PrintStyle;
  enableBleed?: boolean;
}

const fillParagraph = (
  text: string,
  font: PDFFont,
  fontSize: number,
  maxWidth: number
): [string, number] => {
  const paragraphs = text.split("\n");
  for (let index = 0; index < paragraphs.length; index++) {
    const paragraph = paragraphs[index];
    if (font.widthOfTextAtSize(paragraph, fontSize) > maxWidth) {
      const words = paragraph.split(" ");
      const newParagraph: string[][] = [];
      let i = 0;
      newParagraph[i] = [];
      for (const element of words) {
        const word = element;
        newParagraph[i].push(word);
        if (
          font.widthOfTextAtSize(newParagraph[i].join(" "), fontSize) > maxWidth
        ) {
          newParagraph[i].splice(-1); // retira a ultima palavra
          i = i + 1;
          newParagraph[i] = [];
          newParagraph[i].push(word);
        }
      }
      paragraphs[index] = newParagraph.map((p) => p.join(" ")).join("\n");
    }
  }
  return [paragraphs.join("\n"), paragraphs[0].split("\n").length];
};

const fillWithSpaces = ({
  wordToBeReplaced,
  fontTypeToBeReplaced,
  fontSizeToBeReplaced,
  replacementFont,
  replacementFontsize,
}: {
  wordToBeReplaced: string;
  fontTypeToBeReplaced: PDFFont;
  fontSizeToBeReplaced: number;
  replacementFont: PDFFont;
  replacementFontsize: number;
}): string => {
  const bufferWidth = fontTypeToBeReplaced.widthOfTextAtSize(
    wordToBeReplaced,
    fontSizeToBeReplaced
  );
  let replacementWidth = 0;
  let replacementText = " ";
  let counter = 1;
  while (replacementWidth < bufferWidth || counter > 100) {
    replacementWidth = replacementFont.widthOfTextAtSize(
      replacementText,
      replacementFontsize
    );
    replacementText += " ";
    counter++;
  }
  return replacementText;
};

interface IconMap {
  [index: string]: Icon;
}

type Icon = {
  value: string;
  sizeMultiplier: number;
  xOffset?: number;
  yOffset?: number;
};

const ICON_MAPPING: IconMap = {
  range_1: {
    value: "1",
    sizeMultiplier: 1,
    yOffset: -1,
  },
  range_2: {
    value: "2",
    sizeMultiplier: 1,
    yOffset: -1,
  },
  range_3: {
    value: "3",
    sizeMultiplier: 1,
    yOffset: -1,
  },
  range_4: {
    value: "4",
    sizeMultiplier: 1,
    yOffset: -1,
  },
  range_5: {
    value: "5",
    sizeMultiplier: 1,
    yOffset: -1,
  },
  range_infinite: {
    value: "0",
    sizeMultiplier: 1,
  },
  rank_commander: {
    value: "a",
    sizeMultiplier: 1.4,
    yOffset: -2,
  },
  rank_operative: {
    value: "e",
    sizeMultiplier: 1,
  },
  rank_corps: {
    value: "b",
    sizeMultiplier: 1,
  },
  rank_specialist: {
    value: "d",
    sizeMultiplier: 1.8,
    yOffset: -4,
  },
  rank_support: {
    value: "f",
    sizeMultiplier: 0.9,
  },
  rank_heavy: {
    value: "c",
    sizeMultiplier: 1.5,
    yOffset: -3,
  },
  block: {
    value: "g",
    sizeMultiplier: 1,
    yOffset: -1.4,
  },
  block_surge: {
    value: "h",
    sizeMultiplier: 1.1,
    yOffset: -1.6,
  },
  hit: {
    value: "j",
    sizeMultiplier: 1,
    yOffset: -0.5,
  },
  hit_crit: {
    value: "i",
    sizeMultiplier: 1,
    yOffset: -0.5,
  },
};

const replaceReferenceWithSpaces = (
  text: string,
  textFont: PDFFont,
  iconFont: PDFFont
) => {
  const regex = /{([^{}:]*)}/;

  const spacesProxy = (icon: Icon) => {
    return fillWithSpaces({
      wordToBeReplaced: icon.value,
      fontTypeToBeReplaced: iconFont,
      fontSizeToBeReplaced: FONT_SIZE,
      replacementFont: textFont,
      replacementFontsize: FONT_SIZE * icon.sizeMultiplier,
    });
  };

  let match;
  let replacementLocations = [];
  let newText = text;
  while ((match = regex.exec(newText))) {
    const icon = ICON_MAPPING[match[1]];
    const location = {
      index: match.index,
      icon,
    };

    replacementLocations.push(location);

    newText = newText.replace(
      regex,
      (_a, iconName: keyof typeof ICON_MAPPING) => {
        const icon = ICON_MAPPING[iconName];
        const spaces = spacesProxy(icon);
        return spaces;
      }
    );
  }
  return { newText, replacementLocations };
};

interface DrawKeyword {
  page: PDFPage;
  keyword: string;
  keywordFont: PDFFont;
  descriptionFont: PDFFont;
  fontSize: number;
  x: number;
  y: number;
  accumulatedYOffset: number;
  iconFont: PDFFont;
}

const drawKeyword = ({
  page,
  keyword,
  keywordFont,
  descriptionFont,
  fontSize,
  x,
  y,
  accumulatedYOffset,
  iconFont,
}: DrawKeyword) => {
  // Write Keyword
  // Calculate dimensions:
  const enrichedKeyword = getEnrichedKeyword(keyword);
  const description =
    enrichedKeyword?.printedDescription ?? "Missing description!";
  const marginLeft = 12;

  const maxWidth = UNIT_CARD_X - marginLeft - 5;
  const keywordX = x + marginLeft;
  const keywordY = y - accumulatedYOffset;

  const keywordAsSpaces = fillWithSpaces({
    wordToBeReplaced: `${enrichedKeyword?.name}:`,
    fontTypeToBeReplaced: keywordFont,
    fontSizeToBeReplaced: fontSize,
    replacementFont: descriptionFont,
    replacementFontsize: fontSize,
  });

  // Prepare the description to be broken over multiple lines and replace {keyword}'s with spaces.
  // Return an array of the found keywords and their index.
  const { newText: paragraphWithSpaces, replacementLocations } =
    replaceReferenceWithSpaces(
      keywordAsSpaces + description,
      descriptionFont,
      iconFont
    );

  const [paragraphWithLineBreakAndSpaces, paragraphLines] = fillParagraph(
    paragraphWithSpaces,
    descriptionFont,
    fontSize,
    maxWidth
  );

  if (!paragraphLines) {
    return 0;
  }
  if (
    accumulatedYOffset + paragraphLines * fontSize >
    MAX_HEIGHT_FOR_KEYWORD_TEXT
  ) {
    return 0;
  }

  const lines = paragraphWithLineBreakAndSpaces.split("\n");

  // Insert icons
  replacementLocations.forEach((icon) => {
    let linesIndex = 0;
    let indexTotal = 0;
    let indexDelta = 0;
    // Find the line of the paragraph
    for (const line of lines) {
      indexTotal += line.length;

      if (indexTotal < icon.index) {
        // For calculating Y offset later
        linesIndex++;

        // Compensate for line breaks in the original paragraph
        indexDelta += line.length;
      }
    }

    // Find the X coordinate for drawing.
    const xOffset =
      descriptionFont.widthOfTextAtSize(
        // Normal width of the description text, up onto index:
        lines[linesIndex].substring(0, icon.index - indexDelta),
        fontSize
      ) - (icon.icon.xOffset ?? 0);
    const yOffset = linesIndex * fontSize - (icon.icon.yOffset ?? 0);

    page.drawText(icon.icon.value, {
      x: keywordX + xOffset,
      y: keywordY - yOffset,
      size: icon.icon.sizeMultiplier * fontSize * 0.9,
      font: iconFont,
      color: rgb(0, 0, 0),
    });
  });

  // Keyword
  page.drawText(`${enrichedKeyword?.name}:`, {
    x: keywordX,
    y: keywordY,
    size: fontSize,
    font: keywordFont,
    color: rgb(0, 0, 0),
  });

  // Short description
  page.drawText(paragraphWithLineBreakAndSpaces, {
    x: keywordX,
    y: keywordY,
    size: fontSize,
    font: descriptionFont,
    color: rgb(0, 0, 0),
    lineHeight: fontSize,
  });

  return paragraphLines * fontSize;
};

export async function createPdf({ selection, printStyle, enableBleed }: Props) {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const aireExteriorFontBytes = await fetch("/font/AireExterior.ttf").then(
    (res) => res.arrayBuffer()
  );
  const legionHelperFontBytes = await fetch(
    "/font/legionhelper/fonts/legionhelper.ttf"
  ).then((res) => res.arrayBuffer());

  pdfDoc.registerFontkit(fontkit);
  const aireFont = await pdfDoc.embedFont(aireExteriorFontBytes);
  const legionHelperFont = await pdfDoc.embedFont(legionHelperFontBytes);
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
      const affiliation = card.affiliation;
      const affiliatePath = affiliation ? `/${affiliation}` : "";
      const imageFront = `${IMAGE_PATH}/${faction}${affiliatePath}/${card.filename}_front.png`;
      const imageBack = `${IMAGE_PATH}/${faction}${affiliatePath}/${card.filename}_back.png`;
      switch (printStyle) {
        case "fullSamePage":
        case "keywordsSamePage":
          cardList.push({
            column: 1,
            row: rowCount,
            name: card.name,
            image: imageFront,
            page: pageCount,
            faction,
            affiliation,
            type: "front",
          });
          cardList.push({
            column: 2,
            row: rowCount,
            name: card.name,
            image: printStyle === "fullSamePage" ? imageBack : keywordBack,
            page: pageCount,
            faction,
            affiliation:
              printStyle === "fullSamePage" ? affiliation : "keywords",
            type: "back",
            keywords: card.keywords,
          });
          break;
        case "doubleSided":
        case "keywordsOnBack": {
          cardList.push({
            column: column,
            row: rowCount,
            name: card.name,
            image: imageFront,
            page: pageCount,
            faction,
            affiliation,
            type: "front",
          });
          cardList.push({
            column: column === 1 ? 2 : 1,
            row: rowCount,
            name: card.name,
            image: printStyle === "doubleSided" ? imageBack : keywordBack,
            page: pageCount + 1,
            faction,
            affiliation:
              printStyle === "doubleSided" ? affiliation : "keywords",
            type: "back",
            keywords: card.keywords,
          });
          pageIncrement = 2;
          if (column === 1) {
            column = 2;
            rowIncrement = 0;
          } else {
            column = 1;
          }
          break;
        }
        case "keywordsOnly":
        case "frontOnly": {
          cardList.push({
            column,
            row: rowCount,
            name: card.name,
            image: printStyle === "keywordsOnly" ? keywordBack : imageFront,
            page: pageCount,
            faction,
            affiliation:
              printStyle === "keywordsOnly" ? "keywords" : affiliation,
            type: "front",
            keywords: card.keywords,
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
  pageCount =
    printStyle === "doubleSided" || printStyle === "keywordsOnBack"
      ? pageCount + 1
      : pageCount;

  for (let i = 1; i <= pageCount; i++) {
    const page = pdfDoc.addPage(PageSizes.A4);
    page.drawText(
      `Created with v${version} of official AMG cards. Legion Helper`,
      {
        x: 50,
        y: FONT_SIZE * 2 + 12,
        size: FONT_SIZE,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
      }
    );
    page.drawText(
      `(${Variables.url}), page ${i} of ${pageCount}. Print at 100% scale.`,
      {
        x: 50,
        y: FONT_SIZE + 10,
        size: FONT_SIZE,
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

      // Bleed edge
      if (enableBleed) {
        const affiliatePath = card.affiliation ? `/${card.affiliation}` : "";
        const bleedImage =
          card.affiliation === "keywords"
            ? `${IMAGE_PATH}/keyword-back-bleed.png`
            : `${IMAGE_PATH}/${card.faction}${affiliatePath}/bleed_${card.type}.png`;
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

      // Image of card
      page.drawImage(pngImage, {
        x: card.column === 1 ? xColumn1 : xColumn2 + MARGIN_X,
        y,
        width: scaled.width,
        height: scaled.height,
      });

      // Keywords
      if (card.affiliation === "keywords") {
        const [title, subTitle] = card.name.replace(")", "").split("(");
        const titleX =
          (card.column === 1 ? xColumn1 : xColumn2) + MARGIN_X + 40;
        const titleY = y + UNIT_CARD_Y;
        keywordOnCardYOffset = 0;

        // Title
        page.drawText(title, {
          x: titleX,
          y: titleY - 13,
          size: TITLE_FONT_SIZE,
          font: aireFont,
          color: rgb(1, 1, 1),
        });
        page.drawText(
          subTitle ??
            `${Variables.title} (${Variables.url.replace("https://", "")})`,
          {
            x: titleX,
            y: titleY - 25,
            size: TITLE_FONT_SIZE - 6,
            font: aireFont,
            color: rgb(1, 1, 1),
          }
        );

        /*let length = 0;
        [
          "range_infinite",
          "range_1",
          "range_2",
          "range_3",
          "range_4",
          "range_5",
          "rank_commander",
          "rank_corps",
          "rank_specialist",
          "rank_operative",
          "rank_support",
          "rank_heavy",
          "hit",
          "hit_crit",
          "block",
          "block_surge",
        ].forEach((word) => {
          const foo = ICON_MAPPING[word as keyof typeof ICON_MAPPING];
          const glyphWidth = legionHelperFont.widthOfTextAtSize(
            foo.value,
            foo.sizeMultiplier * FONT_SIZE + (foo.yOffset ?? 0)
          );
          page.drawText(foo.value, {
            x: titleX + length,
            y: titleY - 170 + (foo.yOffset ?? 0),
            size: foo.sizeMultiplier * FONT_SIZE,
            font: legionHelperFont,
            color: rgb(0, 0, 1),
            lineHeight: foo.sizeMultiplier * FONT_SIZE,
          });
          length += glyphWidth - (foo.yOffset ?? 0);
        });
        */

        card.keywords?.forEach((word) => {
          const yOffset = drawKeyword({
            page,
            keyword: word,
            keywordFont: aireFont,
            descriptionFont: timesRomanFont,
            x: (card.column === 2 ? xColumn2 : xColumn1) + MARGIN_X,
            y: y - MARGIN_Y + scaled.height - KEYWORD_TOP_MARGIN,
            accumulatedYOffset: keywordOnCardYOffset,
            fontSize: FONT_SIZE,
            iconFont: legionHelperFont,
          });
          keywordOnCardYOffset += yOffset + 2;
        });
      }

      // Cut Lines: Top, 1, 3
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

      // Cut Lines: Bottom, 1, 3
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

      // Cut Lines: Bottom, 2, 4
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

      // Cut Lines: Top, 2, 4
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

      // Cut Lines: Left, 1
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

      // Cut Lines: Right, 1
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

      // Cut Lines: Right, 2
      page.drawLine({
        start: { x: page.getWidth() - LINE_LENGTH, y: y + MARGIN_Y },
        end: { x: page.getWidth(), y: y + MARGIN_Y },
        thickness: 1,
      });

      // Cut Lines: Left, 2
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
  pdfDoc.setTitle(`PDF by ${Variables.title}`);
  pdfDoc.setProducer(Variables.url);
  pdfDoc.setSubject(printStyle);
  return pdfDoc.saveAsBase64({ dataUri: true, useObjectStreams: true });
}
