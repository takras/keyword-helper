"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { createPdf } from "./create-pdf";
import styles from "./page.module.css";
import { cards } from "./cards";

const FILENAME = "legion-helper-unit-cards.pdf";

export default function Page() {
  async function download() {
    const element = document.createElement("a");
    const pdf = await createPdf(selection.filter((card) => card.amount > 0));
    element.setAttribute("href", pdf);
    element.setAttribute("download", FILENAME);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const [selection, setSelection] = useState<Card[]>(cards);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    download();
  };

  const updateSelection = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const amount = parseInt(e.currentTarget.value);
    setSelection((currentSelection) => {
      return currentSelection.with(index, {
        ...currentSelection[index],
        amount,
      });
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        {selection.map((card, index) => {
          const id = `${card.faction}_${card.filename}`;
          return (
            <div key={id}>
              <label htmlFor={id}>{card.name}</label>
              <input
                name={id}
                type="number"
                id={id}
                value={card.amount}
                onChange={(e) => updateSelection(e, index)}
              />
            </div>
          );
        })}
        <button type="submit">Download</button>
      </form>
    </div>
  );
}
