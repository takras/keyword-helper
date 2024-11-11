"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createPdf, PrintStyle, PrintStyles } from "./create-pdf";
import { cards, Factions } from "./cards";
import { TopMenu } from "../ui/top-menu";
import { rules } from "@/data/rules";
import Image from "next/image";
import styles from "./page.module.css";

const FILENAME = "legion-helper-unit-cards.pdf";

const PrintStyleFriendlyName = {
  fullSamePage: "Front and Back on same page",
  doubleSided: "Double sided printing",
  frontOnly: "Only print Front images",
};

export default function Print() {
  const [loading, setLoading] = useState(false);
  async function download() {
    if (!selection) {
      return null;
    }
    const filteredSelection = selection.filter((card) => card.amount > 0);
    if (filteredSelection.length === 0) {
      return;
    }
    const element = document.createElement("a");
    setLoading(true);
    const pdf = await createPdf({
      selection: filteredSelection,
      printStyle,
    })
      .then((data) => {
        return data;
      })
      .finally(() => {
        setLoading(false);
      });
    element.setAttribute("href", pdf);
    element.setAttribute("download", FILENAME);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const [selection, setSelection] = useState<Card[]>();
  const [printStyle, setPrintStyle] = useState<PrintStyle>("fullSamePage");

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
    if (!selection || amount < 0) {
      return null;
    }
    const index = selection.findIndex((card) => card.id === id);
    setSelection((currentSelection) => {
      return currentSelection?.with(index, {
        ...currentSelection[index],
        amount,
      });
    });
  };

  return (
    <>
      <TopMenu />
      <link rel="preload" href="/images/loading.gif" as="image" />
      <div className={styles.container}>
        <div>
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
          <div>
            <p>
              This tool will help you generate PDFs with exactly what you need!
              And it can be done in three ways:
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
            </ul>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          {Object.entries(Factions).map((faction) => {
            const [factionKey, factionName] = faction;
            return (
              <div key={faction[1]}>
                <h2>{factionName}</h2>
                {selection
                  ?.filter((card) => card.faction === factionKey)
                  .map((card) => {
                    const id = `${card.faction}_${card.filename}`;
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
                      </div>
                    );
                  })}
              </div>
            );
          })}
          <hr />
          <div className={styles.downloadContainer}>
            <p>Current version of cards: {rules.cardsVersion}</p>
            <label htmlFor="print-type">Choose how to layout the cards:</label>
            <select
              id="print-type"
              className={styles.select}
              defaultValue={printStyle}
              onChange={(e) =>
                setPrintStyle(e.currentTarget.value as PrintStyle)
              }
            >
              {PrintStyles.map((style) => {
                return (
                  <option key={style} value={style}>
                    {PrintStyleFriendlyName[style]}
                  </option>
                );
              })}
            </select>
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
            <br />
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
      </div>
    </>
  );
}
