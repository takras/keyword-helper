import { Illustration as IllustrationType } from "@/types";
import classNames from "classnames";
import styles from "./illustration.module.css";

export const Illustration = ({ image }: { image: IllustrationType }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={image.altText}
      src={`/images/${image.content}`}
      width={image.width}
      className={classNames(
        styles.image,
        image.align === "center" ? styles.center : null,
        image.align === "left" ? styles.left : null,
        image.align === "right" ? styles.right : null
      )}
    />
  );
};
