"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createPdf, PrintStyle, PrintStyles } from "./create-pdf";
import { cards, Factions } from "./cards";
import { TopMenu } from "../ui/top-menu";
import { rules } from "@/data/rules";
import { Card } from "./types";
import { ToggleDarkMode } from "../ui/toggle-dark-mode";
import { FramedHeader } from "../ui/framed-header";
import Image from "next/image";
import styles from "./page.module.css";
import { getEnrichedKeyword } from "@/utils";

const FILENAME = "legion-helper-unit-cards.pdf";

const PrintStyleFriendlyName = {
  fullSamePage: "Front and Back same page",
  keywordsSamePage: "Front and Keywords Back same page",
  frontOnly: "Only Front images",
  doubleSided: "Double sided printing",
  keywordsOnBack: "Double sided keywords on back.",
  keywordsOnly: "Keywords cards only",
};

export default function Print() {
  const [loading, setLoading] = useState(false);
  const enrichedKeyword = getEnrichedKeyword("print");

  async function download() {
    if (!selection) {
      return null;
    }
    const filteredSelection = selection.filter((card) => card.amount > 0);
    if (filteredSelection.length === 0) {
      return;
    }

    setLoading(true);

    await createPdf({
      selection: filteredSelection,
      printStyle,
      enableBleed,
    })
      .then((data) => {
        const element = document.createElement("a");

        element.href = window.URL.createObjectURL(new Blob([data]));
        element.setAttribute("download", FILENAME);
        element.style.display = "none";

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const [selection, setSelection] = useState<Card[]>();
  const [printStyle, setPrintStyle] = useState<PrintStyle>("fullSamePage");
  const [enableBleed, setEnableBleed] = useState(false);
  const [keywordsOnly, setKeywordsOnly] = useState(false);

  useEffect(() => {
    // Load here to avoid async IDs with ssr and frontend rendering.
    setSelection(cards);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    download();
  };

  const updateSelection = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const amount = parseInt(e.currentTarget.value);
    if (!selection || isNaN(amount) || amount < 0) {
      return e.currentTarget.value;
    }
    const index = selection.findIndex((card) => card.id === id);
    setSelection((currentSelection) => {
      const newSelection = currentSelection?.with(index, {
        ...currentSelection[index],
        amount,
      });
      if (!newSelection) {
        return;
      }
      const anySelectedKeywordsOnly = newSelection.some(
        (card) => card.amount > 0 && card.keywordsOnly
      );
      setKeywordsOnly(anySelectedKeywordsOnly);
      if (anySelectedKeywordsOnly) {
        setPrintStyle("keywordsOnly");
      }

      return newSelection;
    });
  };

  return (
    <>
      <TopMenu />
      <link rel="preload" href="/images/loading.gif" as="image" />
      <link
        rel="preload"
        href="/fonts/TFGunray-Bold.woff2"
        as="font"
        type="font/woff2"
      ></link>
      <div className={styles.container}>
        <div>
          <FramedHeader
            keyword={enrichedKeyword!}
            overrideText="Print unit cards YOUR way"
          />
          <h2>
            <strong>NOTE:</strong> To generate the PDF on iOS devices, you must
            use Safari.
          </h2>
          <p>
            Whenever there is a new release of updated unit cards, it is lovely
            when AMG releases new PDFs for us to print for free.
          </p>
          <p>
            But of course there is a downside to it too. They release PDFs
            filled with 1 of each unit. But, what if I only need 1 of the three
            of those unit on that one page, and maybe 6 of another? That&apos;s
            a problem.
          </p>
          <p>
            <strong>*:</strong> Only keyword backsides possible. Front has not
            been released by AMG as PNP.
          </p>
        </div>
        <form onSubmit={onSubmit} className={styles.form}>
          {Object.entries(Factions).map((faction) => {
            const [factionKey, factionName] = faction;
            return (
              <div key={faction[1]}>
                <h2>{factionName}</h2>
                {selection
                  ?.filter(
                    (card) =>
                      (card.hiddenFromPrint !== true ||
                        card.keywordsOnly === true) &&
                      card.faction === factionKey
                  )
                  .map((card) => {
                    const id = `${card.faction}_${card.name}`;
                    return (
                      <div key={id} className={styles.unit}>
                        <input
                          className={styles.numberInput}
                          name={id}
                          size={2}
                          type="number"
                          id={id}
                          value={card.amount}
                          onChange={(e) => updateSelection(e, card.id)}
                        />
                        <label htmlFor={id}>{card.name}</label>
                        {card.keywordsOnly && "*"}
                      </div>
                    );
                  })}
              </div>
            );
          })}
          <hr />
          <div className={styles.downloadContainer}>
            <p>Current version of cards: {rules.cardsVersion}</p>
            <div>
              <label htmlFor="bleedCheckbox">Enable Bleed (Experimental)</label>
              <input
                id="bleedCheckbox"
                type="checkbox"
                checked={enableBleed}
                onChange={() => setEnableBleed((current) => !current)}
              />
            </div>
            <div>
              <p>
                This tool will help you generate PDFs with exactly what you
                need! And it can be done in three ways, all supporting bleed /
                no bleed:
              </p>
              <ul>
                <li>
                  <strong>Fronts only</strong>: Don&apos;t need the backside at
                  all? No problem, use this option.
                </li>
                <li>
                  <strong>Double sided</strong>: Want to print front to back on
                  the same sheet? This should do the trick.
                </li>
                <li>
                  <strong>Front and back</strong>: This follows the standard AMG
                  has set, and prints front to the left and backs to the right.
                </li>
                <li>
                  <strong>Double sided keywords on back</strong>: To print on
                  both sides of the sheets, with frontside on one side, and
                  keyword help on the other.
                </li>
                <li>
                  <strong>Front and keyword on same page</strong>: Front image
                  on the left side of the sheet, and keyword help on the right.
                </li>
                <li>
                  <strong>Keyword cards only</strong>: Only print keyword cards
                  on the entire sheet.
                </li>
              </ul>
            </div>
            <label htmlFor="print-type">Choose how to layout the cards:</label>
            <select
              id="print-type"
              className={styles.select}
              defaultValue={printStyle}
              onChange={(e) =>
                setPrintStyle(e.currentTarget.value as PrintStyle)
              }
            >
              {PrintStyles.filter((option) =>
                keywordsOnly ? option === "keywordsOnly" : true
              ).map((style) => {
                return (
                  <option key={style} value={style}>
                    {PrintStyleFriendlyName[style]}
                  </option>
                );
              })}
            </select>
            {keywordsOnly && (
              <p>
                Keywords Only selected since at least one card selected has an
                asterisk (*).
              </p>
            )}

            {loading && (
              <>
                <p>
                  Generating PDF. This occurs in your browser. It might appear
                  to be frozen, depending how fast computer you have and how
                  many cards you are trying to generate.
                </p>
                <div className={styles.loadingContainer}>
                  <Image
                    src="/images/loading.gif"
                    width={150}
                    height={150}
                    alt="Loading"
                    className={styles.loadingImage}
                  />
                </div>
              </>
            )}
            {!loading && (
              <button
                type="submit"
                className={styles.download}
                disabled={loading}
              >
                Download
              </button>
            )}
            <a
              href="foobar"
              style={{ display: "none" }}
              target="_blank"
              id="downloadAnchor"
            >
              &nbsp;
            </a>
            <br />
            <div>
              <p>
                Please consider donating for all the hard work and time
                commitment that goes into making this tool.
              </p>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=PCSQHJMWUZSWN"
                target="_blank"
              >
                <Image
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  id="donate-button"
                  width={92}
                  height={26}
                  style={{ cursor: "pointer" }}
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
              </a>
            </div>
            <p>
              <strong>NOTE:</strong> This tool uses your browser to generate the
              PDF. It will download all images and process everything in your
              browser.
            </p>
            <p>
              This may take a LONG time, depending on how many cards you want to
              print. Try limiting the number of cards per time you press
              download, if it does not work.
            </p>
          </div>
        </form>
        <ToggleDarkMode />
      </div>
    </>
  );
}
