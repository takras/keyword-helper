import globalStyles from "./helper.module.css";
import styles from "./about.module.css";
import Image from "next/image";
export const About = () => {
  return (
    <div className={styles.container}>
      <p>
        Legion Helper is intended to help you enjoy the game in a more efficient
        way than looking up the rulebook for keywords, and including rules
        clarification answered by official source, as well as tools to make the
        game less cluttered.
      </p>
      <p>
        It is heavily inspired by Legion Quick Guide by The Fifth Trooper , and
        I liked the easy access of the keywords, but felt it missed quite a few
        functions.
      </p>
      <p>
        I was under the assumption that QG was going down together with Legion
        HQ, and with no updates on the quicklist, it seemed prudent to come up
        with an alternate solution. This assumption was proven false, however.
      </p>
      <p>
        I&apos;ve spent hours upon hours on making this site from scratch and
        converting the rules to a searchable format. Everything is either taken
        from the rulebook or written myself. I hope it will help your gaming
        experience.
      </p>
      <p>
        This is a fan page by <a href="mailto:legion@takras.net">Takras</a> and
        not affiliated with{" "}
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
        This is a shorthand reference to the range-effectiveness as described by
        the ability keyword, showing its &quot;at&quot;-range.
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
      <h3>Printable tokens</h3>
      <p>
        I have designed some tokens that were introduced in the 2024 version
        that are free to 3D print. They are freely available on Printables:
      </p>
      <p>
        <a href="https://www.printables.com/model/948921-star-wars-legion-poi-tokens">
          <Image
            width={400}
            height={300}
            className={globalStyles.imageLinks}
            src="/images/tokens/poi-3d.png"
            alt=""
          />
          <br />
          Point of Interest (POI) Tokens.
        </a>
      </p>
      <p>
        <a href="https://www.printables.com/model/947836-star-wars-legion-half-12-and-15-deployment-range-t">
          <Image
            className={globalStyles.imageLinks}
            src="/images/tokens/0-5range.png"
            width={400}
            height={107}
            alt=""
          />
          <Image
            className={globalStyles.imageLinks}
            src="/images/examples/1-5-range-tool.jpeg"
            width={400}
            height={89}
            alt=""
          />
          <br />
          0.5-range and 1.5-range for use with territory measuring and POI
          distance.
        </a>
      </p>
      <p>
        <a href="https://www.printables.com/model/1011163-star-wars-legion-half-12-3-inch-range-tool">
          <Image
            width={400}
            height={120}
            className={globalStyles.imageLinks}
            src="/images/examples/half-range-extension.jpeg"
            alt=""
          />
          <br />
          0.5-range extension for official essentials kit range tools.
        </a>
      </p>
    </div>
  );
};
