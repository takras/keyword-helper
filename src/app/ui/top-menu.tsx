import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import globalStyles from "./helper.module.css";
import styles from "./top-menu.module.css";
import { useContext } from "react";
import { KeywordContext } from "../providers";
import { getEnrichedKeyword } from "@/utils";

export const TopMenu = () => {
  const { close, getLink, previousKeyword, goBack } =
    useContext(KeywordContext);

  const enrichedPrevious = getEnrichedKeyword(previousKeyword);
  return (
    <div id="topMenu" className={styles.container}>
      <aside className={styles.topMenu}>
        <div className={styles.topMenuButtonRow}>
          <Link
            href={previousKeyword ? getLink(previousKeyword) : "/"}
            className={classNames(
              globalStyles.button,
              styles.topMenuBackButton
            )}
            onClick={goBack}
          >
            <Image
              src="/images/arrow-left.png"
              alt="Arrow pointing left"
              width={20}
              height={20}
            />
            {enrichedPrevious?.name ?? "Back to Legion Helper"}
          </Link>
          <Link
            href={"/"}
            className={classNames(
              globalStyles.button,
              styles.topMenuCloseButton
            )}
            onClick={() => {
              close();
            }}
          >
            <Image
              src="/images/cross-x.png"
              alt="A black cross"
              width={20}
              height={20}
            ></Image>
          </Link>
        </div>
      </aside>
    </div>
  );
};
