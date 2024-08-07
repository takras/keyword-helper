import { Illustration as IllustrationType } from "@/types";
import classNames from "classnames";
import styles from "./helper.module.css";

export const Illustration = ({ image }: { image: IllustrationType }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={image.altText}
      src={`/images/${image.content}`}
      width={image.width}
      className={classNames(
        styles.illustrationImage,
        image.align === "center" ? styles.imageCenter : null,
        image.align === "left" ? styles.imageLeft : null,
        image.align === "right" ? styles.imageRight : null
      )}
    />
  );
};
