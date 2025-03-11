import globalStyles from "./helper.module.css";
import styles from "./resources.module.css";
import Image from "next/image";
import { ToggleDarkMode } from "./toggle-dark-mode";
export const Resources = () => {
  return (
    <div className={styles.container}>
      <h3>Printable resources</h3>
      <p>
        I have designed some Point of Interest (POI) tokens that were introduced
        in the 2024 version. They are free to 3D print, and available on
        Printables:
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
      <div>
        <h3>Half-range (0.5-range) tool. </h3>
        <p>
          When measuring cohesion and control of objective tokens, a new
          Half-range tool is required. Instead of using a paper printout, a 3d
          printed version is much preferred.
        </p>
        <a href="https://www.printables.com/model/947836-star-wars-legion-half-12-and-15-deployment-range-t">
          <Image
            className={globalStyles.imageLinks}
            src="/images/tokens/0-5range.png"
            width={400}
            height={107}
            alt=""
          />
          <br />
          Get it on Printables.
        </a>
      </div>
      <div>
        <h3>Territory (1.5-range) measurement tool. </h3>
        <p>
          At the start of each scenario, each player must measure up their
          territory, and each deployment card uses a 1.5 range from the edge.
          This tool makes that process easier, not having to loosely combine a
          0.5-range and a 1-range tool.
        </p>
        <a href="https://www.printables.com/model/947836-star-wars-legion-half-12-and-15-deployment-range-t">
          <Image
            width={400}
            height={158}
            className={globalStyles.imageLinks}
            src="/images/tokens/half_and_1.5_range_tool.png"
            alt=""
          />
          <br />
          Get it on Printables.
        </a>
      </div>
      <div>
        <h3>
          An insertable 0.5-range tool to use with the Official Essentials kit
          tools.
        </h3>
        <a href="https://www.printables.com/model/1011163-star-wars-legion-half-12-3-inch-range-tool">
          <Image
            width={400}
            height={120}
            className={globalStyles.imageLinks}
            src="/images/examples/half-range-extension.jpeg"
            alt=""
          />
          <br />
          Get it on Printables.
        </a>
      </div>
      <ToggleDarkMode />
    </div>
  );
};
