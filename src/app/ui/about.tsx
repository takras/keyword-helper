import globalStyles from "./helper.module.css";
import styles from "./about.module.css";
import Image from "next/image";
import { ToggleDarkMode } from "./toggle-dark-mode";
export const About = () => {
  return (
    <>
      <div className={styles.container}>
        <p>
          Legion Helper is intended to help you enjoy the game in a more
          efficient way than looking up the rulebook for keywords, and including
          rules clarification answered by official source, as well as tools to
          make the game less cluttered.
        </p>
        <p>
          It is heavily inspired by Legion Quick Guide by The Fifth Trooper ,
          and I liked the easy access of the keywords, but felt it missed quite
          a few functions.
        </p>
        <p>
          I was under the assumption that QG was going down together with Legion
          HQ, and with no updates on the quicklist, it seemed prudent to come up
          with an alternate solution. This assumption was proven false, however.
        </p>
        <p>
          I&apos;ve spent hours upon hours on making this site from scratch and
          converting the rules to a searchable format. Everything is either
          taken from the rulebook or written myself. I hope it will help your
          gaming experience.
        </p>
        <p>
          This is a fan page by <a href="mailto:legion@takras.net">Takras</a>{" "}
          and not affiliated with{" "}
          <a
            href="https://www.atomicmassgames.com/"
            target="_blank"
            className={globalStyles.externalLink}
          >
            Atomic Mass Games
          </a>{" "}
          nor with The Fifth Trooper.
        </p>
        <h3>How to use</h3>
        <p>
          This site has catalogued all keywords and concepts from the rules
          reference, and made them searchable and easily accessible.
        </p>
        <p>
          You can either search (2 characters or more) which is the fastest way,
          or look up using the alphabetized list of keywords and concepts.
        </p>
        <p>Some buttons also have a Range-icon such as:</p>
        <button className={globalStyles.button}>
          Compel [{""}
          <Image
            src="/images/black/range-2.png"
            alt="A cross-haired circle with a number 2 in it"
            className={globalStyles.inlineIcon}
            width={16}
            height={16}
          ></Image>
          {""}]
        </button>
        <p>
          This is a shorthand reference to the range-effectiveness as described
          by the ability keyword, showing its &quot;at&quot;-range.
        </p>
        <h3>Add to home screen</h3>
        <Image
          src="/images/examples/homeicon.jpeg"
          alt="An iphone icon"
          style={{ float: "right" }}
          width={80}
          height={80}
        ></Image>
        <p>
          Most browsers permit this web page to be added to your mobile phones
          homescreen as an easily accessible icon.
        </p>
        <p>
          On iPhone in Safari, this is done by hitting the share-button (square
          with arrow up) below the address bar. From that menu, click the
          &quot;Add to Home Screen&quot; button and you&apos;re set!
        </p>
        <Image
          src="/images/examples/homescreen.png"
          alt="An iphone popup menu"
          className={globalStyles.imageLinks}
          width={400}
          height={280}
        ></Image>
      </div>
      <ToggleDarkMode />
      <div className={styles.container}>
        <h3>Attribution:</h3>
        BB-8 darkmode toggle by{" "}
        <a href="https://uiverse.io/Galahhad/silent-robin-40" target="_blank">
          Galahhad at uiverse
        </a>{" "}
        under{" "}
        <a href="https://opensource.org/license/mit" target="_blank">
          MIT License
        </a>
        .
      </div>
    </>
  );
};
