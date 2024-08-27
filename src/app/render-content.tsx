import { DescriptionType, Keyword } from "@/types";
import { ExampleContent } from "./ui/example";
import {
  getEnrichedKeyword,
  getKey,
  interpolateString,
  Variables,
} from "@/utils";
import { Illustration } from "./ui/illustration";
import { KeywordList } from "./ui/keyword-list";
import { StructuredList } from "./ui/structured-list";
import { CalloutComponent } from "./ui/callout";
import { Clarification } from "./ui/clarification";
import styles from "./helper.module.css";
import classNames from "classnames";

export const RenderContent = ({
  descriptions,
  selectKeyword,
  overrideWithClassName,
}: {
  descriptions: DescriptionType;
  selectKeyword: (keyword: Keyword) => void;
  overrideWithClassName?: string;
}) => {
  const renderedKeywords: string[] = [];
  const reference = ({
    reference,
    summaryOnly,
  }: {
    reference: string;
    summaryOnly?: boolean;
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
          descriptions={withHeader}
          selectKeyword={selectKeyword}
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
          <a
            href={`${Variables.url}/#!${enriched.keyword}`}
            className={styles.hiddenLink}
          >
            {enriched.name}
          </a>
          <button
            className={styles.referenceButton}
            onClick={() => selectKeyword(enriched)}
          >
            {enriched?.name}
          </button>
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
            selectKeyword={selectKeyword}
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
            selectKeyword={selectKeyword}
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
