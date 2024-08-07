import { StructuredList as StructuredListType } from "@/types";
import { getKey, interpolateString } from "@/utils";
import styles from "./helper.module.css";

export const StructuredList = ({
  list,
  isTopLevel,
  index,
  isNumbered,
}: {
  list: StructuredListType["content"];
  isTopLevel: boolean;
  index: number;
  isNumbered?: boolean;
}) => {
  let key = `${index}${list[0]}`;
  const type = index % 2 === 0 ? "a" : "1";
  const className = isNumbered
    ? styles.exampleListNumbered
    : styles.exampleList;
  if (isTopLevel) {
    return (
      <ol type={type} key={getKey(key)} className={className}>
        <StructuredList
          isTopLevel={false}
          index={index + 1}
          list={list}
          isNumbered={isNumbered}
        />
      </ol>
    );
  }
  return list.map((line, i) => {
    if (typeof line === "string") {
      key = `${key}sub_${i}`;
      return (
        <li key={getKey(key + "sub")} className={styles.listItem}>
          {interpolateString(line, key + "line")}
        </li>
      );
    }
    return (
      <ol type={type} key={getKey(key)}>
        <StructuredList
          list={line}
          isTopLevel={false}
          index={index + 1}
          isNumbered={false}
        ></StructuredList>
      </ol>
    );
  });
};
