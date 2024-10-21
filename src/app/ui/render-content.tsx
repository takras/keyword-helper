"use client";
import { useContext } from "react";
import { DescriptionType } from "@/types";
import { ExampleContent } from "./example";
import { getEnrichedKeyword, getKey, interpolateString } from "@/utils";
import { Illustration } from "./illustration";
import { KeywordList } from "./keyword-list";
import { StructuredList } from "./structured-list";
import { CalloutComponent } from "./callout";
import { Clarification } from "./clarification";
import { KeywordContext } from "../providers";
import { Changelog, ChangeLogVersion } from "./changelog";
import Link from "next/link";
import styles from "./helper.module.css";
import classNames from "classnames";
import { Quotation } from "./quotation";

export const RenderContent = ({
  descriptions,
  overrideWithClassName,
}: {
  descriptions: DescriptionType;
  overrideWithClassName?: string;
}) => {
  const renderedKeywords: string[] = [];
  const { getLink, selectKeyword } = useContext(KeywordContext);
  const reference = ({
    reference,
    summaryOnly,
    hideHeader,
  }: {
    reference: string;
    summaryOnly?: boolean;
    hideHeader?: boolean;
  }) => {
    const enriched = getEnrichedKeyword(reference);
    if (!enriched) {
      return null;
    }
    const filteredDescriptions = enriched.descriptions.filter((description) => {
      switch (description.type) {
        case "reference":
          return !renderedKeywords.includes(reference);
        default:
          return true;
      }
    });
    renderedKeywords.push(reference);

    const withHeader: DescriptionType = [
      { type: "header", content: enriched.name },
      ...filteredDescriptions,
    ];

    if (filteredDescriptions.length > 0 && !summaryOnly) {
      return (
        <RenderContent
          key={getKey(reference)}
          descriptions={hideHeader ? filteredDescriptions : withHeader}
        />
      );
    }

    return (
      <div className={styles.referenceContainer} key={getKey(reference)}>
        {!summaryOnly && enriched.summary && (
          <div className={styles.referenceSummary}>
            {interpolateString(enriched?.summary, enriched.name)}
          </div>
        )}
        <div className={styles.referenceLink}>
          <div>See:</div>
          <Link
            href={getLink(enriched.keyword)}
            className={styles.referenceButton}
            onClick={() => selectKeyword(enriched.keyword)}
            prefetch={true}
          >
            {enriched?.name}
          </Link>
        </div>
      </div>
    );
  };

  return descriptions.map((description) => {
    switch (description.type) {
      case "example":
        return (
          <ExampleContent
            key={getKey(description.type)}
            descriptions={description.content}
            isInitiallyExpanded={description.initiallyExpanded}
          />
        );
      case "header":
        if (description.inline) {
          return (
            <span
              className={classNames(
                styles.header4,
                styles.inlineHeader,
                overrideWithClassName
              )}
              key={getKey(description.type)}
            >
              {interpolateString(
                "{arrow_right}",
                getKey(description.type),
                styles.arrowRight
              )}
              {interpolateString(description.content, getKey(description.type))}
            </span>
          );
        }
        return (
          <h4
            className={classNames(styles.header4, overrideWithClassName)}
            key={getKey(description.type)}
          >
            {description.content}
          </h4>
        );
      case "illustration":
        return (
          <Illustration key={getKey(description.altText)} image={description} />
        );
      case "keyword_list":
        return (
          <KeywordList
            key={getKey(description.type)}
            keywords={description.content}
            showOnlyKeyname={description.showOnlyKeyname}
          />
        );
      case "reference":
        return reference({
          reference: description.referenced_keyword,
          summaryOnly: description.showOnlySummary,
          hideHeader: description.hideHeader,
        });
      case "structured_list_numbered":
      case "structured_list":
        return (
          <StructuredList
            key={getKey(description.type)}
            isTopLevel={true}
            index={1}
            list={description.content}
            isNumbered={description.type === "structured_list_numbered"}
          />
        );
      case "clarification":
        return (
          <Clarification
            key={getKey(description.type)}
            content={description.content}
            url={description.url}
          />
        );
      case "callout":
        return (
          <CalloutComponent
            key={getKey(description.type)}
            reference={description.callout_keyword}
          />
        );
      case "quotation":
        return (
          <Quotation
            key={getKey(description.type)}
            content={description.content}
          />
        );
      case "changelog":
        return <Changelog />;
      case "version":
        return (
          <ChangeLogVersion
            type="version"
            version={description.version}
            content={description.content}
          />
        );
      case "text":
      default:
        return interpolateString(
          description.content,
          getKey(description.content),
          styles.paragraph
        );
    }
  });
};
