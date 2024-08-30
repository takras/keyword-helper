/* eslint-disable @next/next/no-img-element */
"use client";
import { Illustration as IllustrationType } from "@/types";
import classNames from "classnames";
import styles from "./illustration.module.css";

export const Illustration = ({ image }: { image: IllustrationType }) => {
  return (
    <img
      alt={image.altText}
      src={`/images/${image.content}`}
      width={image.width}
      className={classNames(
        styles.image,
        image.align === "center" ? styles.center : null,
        image.align === "left" ? styles.left : null,
        image.align === "right" ? styles.right : null,
        image.notch === "topRight" ? styles.topRight : null
      )}
    />
  );
};
