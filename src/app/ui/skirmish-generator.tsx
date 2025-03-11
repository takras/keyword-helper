"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getKey, interpolateString } from "@/utils";
import globalStyles from "./helper.module.css";
import styles from "./skirmish-generator.module.css";
import { ToggleDarkMode } from "./toggle-dark-mode";

type Card = {
  id: number;
  image: string;
  type: "primary" | "secondary" | "advantage";
  mapImage?: string;
};

const primaryCards: Card[] = [
  {
    id: 1,
    image: "primary-intercept-the-signals.png",
    mapImage: "deploy-intercept-signals.png",
    type: "primary",
  },
  {
    id: 2,
    image: "primary-bunker-assault.png",
    mapImage: "deploy-bunker-assault.png",
    type: "primary",
  },
  {
    id: 3,
    image: "primary-close-the-pocket.png",
    mapImage: "deploy-close-the-pocket.png",
    type: "primary",
  },
];

const secondaryCards: Card[] = [
  {
    id: 4,
    image: "secondary-bring-them-to-heel.png",
    type: "secondary",
  },
  {
    id: 5,
    image: "secondary-recon-mission.png",
    type: "secondary",
  },
  {
    id: 6,
    image: "secondary-surface-scan.png",
    type: "secondary",
  },
];

const advantageCards: Card[] = [
  {
    id: 7,
    image: "advantage-advanced-intel.png",
    type: "advantage",
  },
  {
    id: 8,
    image: "advantage-cunning-deployment.png",
    type: "advantage",
  },
  {
    id: 9,
    image: "advantage-fortified-positions.png",
    type: "advantage",
  },
];

const skirmishCards = advantageCards.concat(secondaryCards, primaryCards);

function shuffle(a: Card[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LENGTH = 1008 / 2.52;
const WIDTH = 705 / 2.52;

export const SkirmishGenerator = () => {
  const searchParams = useSearchParams();
  const [primaryObjective, setPrimaryObjective] = useState<Card>();
  const [secondaryObjective, setSecondaryObjective] = useState<Card>();
  const [blueAdvantage, setBlueAdvantage] = useState<Card>();
  const [redAdvantage, setRedAdvantage] = useState<Card>();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const list = searchParams.get("mission")?.split("-");
    let validList = true;
    if (list?.length !== 4) {
      return;
    }
    list?.forEach((entry, id) => {
      const card = skirmishCards.find((c) => Number.parseInt(entry) === c.id);
      switch (id) {
        case 0:
          if (card?.type !== "primary") {
            validList = false;
            return;
          }
          setPrimaryObjective(card);
          return;
        case 1:
          if (card?.type !== "secondary") {
            validList = false;
            return;
          }
          setSecondaryObjective(card);
          return;
        case 2:
          if (card?.type !== "advantage") {
            validList = false;
            return;
          }
          setBlueAdvantage(card);
          return;
        case 3:
        default:
          if (card?.type !== "advantage") {
            validList = false;
            return;
          }
          setRedAdvantage(card);
      }
      if (!validList) {
        setPrimaryObjective(undefined);
        setSecondaryObjective(undefined);
        setBlueAdvantage(undefined);
        setRedAdvantage(undefined);
      }
    });
  }, [searchParams]);

  const populateCards = () => {
    const primary = shuffle(
      skirmishCards.filter((card) => card.type === "primary")
    )[0];
    const secondary = shuffle(
      skirmishCards.filter((card) => card.type === "secondary")
    )[0];
    const [blue, red] = shuffle(
      skirmishCards.filter((card) => card.type === "advantage")
    );
    setPrimaryObjective(primary);
    setSecondaryObjective(secondary);
    setBlueAdvantage(blue);
    setRedAdvantage(red);

    const list = [primary.id, secondary.id, blue.id, red.id];

    const params = new URLSearchParams();
    params.set("mission", list.join("-"));
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const isLoaded =
    primaryObjective && secondaryObjective && blueAdvantage && redAdvantage;

  return (
    <div className={styles.container}>
      {!isLoaded && (
        <div className={styles.about}>
          {interpolateString(
            "<strong>Determine Blue Player:</strong> One player rolls a red defense die. If the result is a {block}, the player that rolled is the blue player. Otherwise, the player that rolled is the red player. Then the blue player chooses one of the table edges and sets their army near that edge. The red player takes the opposite table edge.",
            getKey("about")
          )}
          <p>Then, click &quot;Generate Mission&quot; below.</p>

          <button className={globalStyles.button} onClick={populateCards}>
            Generate mission.
          </button>
        </div>
      )}
      {isLoaded && (
        <>
          <div className={styles.primaryObjective}>
            <Image
              src={`/images/skirmish/${primaryObjective.image}`}
              height={LENGTH}
              width={WIDTH}
              alt={primaryObjective.id.toString()}
              priority={true}
            />
            <div className={styles.secondaryObjective}>
              <Image
                src={`/images/skirmish/${secondaryObjective.image}`}
                height={LENGTH}
                width={WIDTH}
                alt={secondaryObjective.id.toString()}
              />
            </div>
            <Image
              src={`/images/skirmish/${primaryObjective.mapImage}`}
              height={WIDTH}
              width={LENGTH}
              alt={primaryObjective.id.toString()}
            />
          </div>
          <div className={styles.advantageContainer}>
            <div className={styles.advantageBlue}>
              <h3 className={styles.advantageTitle}>Blue Player</h3>
              <Image
                src={`/images/skirmish/${blueAdvantage.image}`}
                height={LENGTH}
                width={WIDTH}
                alt={blueAdvantage.id.toString()}
              />
            </div>
            <div className={styles.advantageRed}>
              <h3 className={styles.advantageTitle}>Red Player</h3>
              <Image
                src={`/images/skirmish/${redAdvantage.image}`}
                height={LENGTH}
                width={WIDTH}
                alt={redAdvantage.id.toString()}
              />
            </div>
          </div>
        </>
      )}
      <ToggleDarkMode />
    </div>
  );
};
