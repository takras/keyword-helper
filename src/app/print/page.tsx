"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createPdf, PrintStyle, PrintStyles } from "./create-pdf";
import { cards, Factions } from "./cards";
import styles from "./page.module.css";

const FILENAME = "legion-helper-unit-cards.pdf";

const PrintStyleFriendlyName = {
  fullSamePage: "Front and Back on same page",
  doubleSided: "Double sided printing",
  frontOnly: "Only print Front images",
};

export default function Page() {
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
    <div className={styles.container}>
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
                    <div key={id}>
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
        <select
          className={styles.select}
          defaultValue={printStyle}
          onChange={(e) => setPrintStyle(e.currentTarget.value as PrintStyle)}
        >
          {PrintStyles.map((style) => {
            return (
              <option key={style} value={style}>
                {PrintStyleFriendlyName[style]}
              </option>
            );
          })}
        </select>
        <button type="submit">Download</button>
      </form>
      {loading && (
        <div className={styles.loadingContainer}>
          <p>
            Generating PDF. This occurs in your browser. It might appear to be
            frozen, depending how fast computer you have and how many cards you
            are trying to generate.
          </p>
          <progress />
        </div>
      )}
    </div>
  );
}
