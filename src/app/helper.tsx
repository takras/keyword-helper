/* eslint-disable @next/next/no-img-element */
"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  RulesDocument,
  Keyword,
  CatalogEntry,
  DescriptionType,
  StructuredList,
  Illustration,
} from "@/types";
import rules from "@/data/rules-2.6.0.json";
import styles from "./helper.module.css";
import { interpolateString } from "@/utils";
import classNames from "classnames";

export default function Helper() {
  const [rulesDocument, setRulesDocument] = useState<RulesDocument>(
    rules as RulesDocument
  );
  const modal = document.querySelector("[data-modal]") as HTMLDialogElement;
  const [expandedCatalogs, setExpandedCatalogs] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);

  useEffect(() => {
    if (modal && selectedKeywords.length > 0) {
      modal.showModal();
    }
  }, [modal, selectedKeywords]);

  const getEnrichedKeyword = (keyword: string) => {
    return rulesDocument.keywords.find((key) => key.keyword === keyword);
  };

  const selectKeyword = (keyword: Keyword) => {
    setSelectedKeywords((current) => current.concat(keyword));
  };

  const goToPreviousKeyword = (keyword: Keyword) => {
    setSelectedKeywords((current) => current.slice(0, -1));
  };

  const isExpanded = (index: string) => {
    return expandedCatalogs.includes(index);
  };

  const toggleExpandCatalog = (index: string) => {
    if (isExpanded(index)) {
      const i = expandedCatalogs.findIndex((catalog) => catalog === index);
      setExpandedCatalogs((current) => current.filter((c) => c !== index));
      return;
    }
    setExpandedCatalogs((current) => [...current, index]);
  };

  const CatalogCard = ({ catalog }: { catalog: CatalogEntry }) => {
    return (
      <>
        <button
          className={classNames(
            styles.catalogButton,
            isExpanded(catalog.id) ? styles.active : null
          )}
          onClick={() => toggleExpandCatalog(catalog.id)}
        >
          {catalog.name}
        </button>
        {isExpanded(catalog.id) && (
          <div className={styles.keywordsContainer}>
            {rulesDocument.keywords
              .filter((keyword) => keyword.parents.includes(catalog.id))
              .map((keyword) => (
                <KeywordCard key={keyword.keyword} keyword={keyword} />
              ))}
          </div>
        )}
      </>
    );
  };

  const KeywordCard = ({ keyword }: { keyword: Keyword }) => {
    return (
      <button
        className={styles.keywordButton}
        onClick={() => selectKeyword(keyword)}
        key={keyword.keyword}
      >
        {keyword.name}
      </button>
    );
  };

  const RenderContent = ({
    descriptions,
  }: {
    descriptions: DescriptionType;
  }) => {
    return descriptions.map((description) => {
      switch (description.type) {
        case "example":
          return (
            <ExampleContent
              key={description.type}
              descriptions={description.content}
            />
          );
        case "header":
          return (
            <h4 className={styles.header4} key={description.type}>
              {description.content}
            </h4>
          );
        case "illustration":
          return <Illustration image={description} />;
        case "keyword_list":
          return (
            <KeywordList
              key={description.type}
              keywords={description.content}
            />
          );
        case "reference":
          return "Referanser";
        case "structured_list":
          return (
            <StructuredList
              key={description.type}
              isTopLevel={true}
              index={1}
              list={description.content}
            />
          );
        case "text":
        default:
          return interpolateString(description.content);
      }
    });
  };

  const Illustration = ({ image }: { image: Illustration }) => {
    return (
      <img
        alt={image.altText}
        src={`/images/${image.content}`}
        className={classNames(
          styles.illustrationImage,
          styles[`align_${image.align ? image.align : "center"}`]
        )}
      />
    );
  };

  const KeywordList = ({ keywords }: { keywords: string[] }) => {
    const content = keywords.map((keyword) => {
      const enriched = getEnrichedKeyword(keyword);
      if (!enriched?.summary) {
        return null;
      }
      return (
        <li key={keyword}>
          <strong className={styles.keywordListName}>{enriched.name}: </strong>
          {interpolateString(enriched.summary)}
        </li>
      );
    });
    return content ? <ul key={keywords.length}>{content}</ul> : null;
  };

  const StructuredList = ({
    list,
    isTopLevel,
    index,
  }: {
    list: StructuredList["content"];
    isTopLevel: boolean;
    index: number;
  }) => {
    let key = `${index}${list[0]}`;
    const type = index % 2 === 0 ? "a" : "1";
    if (isTopLevel) {
      return (
        <ol type={type} key={key} className={styles.exampleList}>
          <StructuredList isTopLevel={false} index={index + 1} list={list} />
        </ol>
      );
    }
    return list.map((line, i) => {
      if (typeof line === "string") {
        key = `${key}sub_${i}`;
        return (
          <li key={key + "sub"} className={styles.listItem}>
            {line}
          </li>
        );
      }
      return (
        <ol type={type} key={key} className={styles.exampleList}>
          <StructuredList
            list={line}
            isTopLevel={false}
            index={index + 1}
          ></StructuredList>
        </ol>
      );
    });
  };

  const RelatedKeywords = ({ related }: { related: string[] }) => {
    return (
      <div className={styles.relatedContainer}>
        <h4 className={styles.relatedHeader}>Related keywords:</h4>
        <div className={styles.relatedButtons}>
          {related.map((keyword) => {
            const enriched = getEnrichedKeyword(keyword);
            if (!enriched) {
              modal.close();
              return null;
            }
            return (
              <button
                className={styles.relatedButton}
                key={keyword}
                onClick={() => selectKeyword(enriched)}
              >
                {enriched?.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const ExampleContent = ({
    descriptions,
  }: {
    descriptions: DescriptionType;
  }) => {
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => setIsActive((current) => !current);
    return (
      <div className={styles.exampleContainer}>
        <button onClick={() => toggleActive()} className={styles.exampleHeader}>
          <RenderContent
            descriptions={descriptions.filter(
              (description) => description.type === "header"
            )}
          />
        </button>
        <div className={isActive ? styles.helperActive : styles.helperInactive}>
          <RenderContent
            descriptions={descriptions.filter(
              (description) => description.type !== "header"
            )}
          />
        </div>
      </div>
    );
  };

  const modalComponent = () => {
    const selectedKeyword = selectedKeywords.slice(-1).shift();
    const previousKeyword = selectedKeywords[selectedKeywords.length - 2];
    return (
      <dialog data-modal className={styles.modal}>
        <div className={styles.modalButtonRow}>
          {previousKeyword && (
            <button
              onClick={() => goToPreviousKeyword(previousKeyword)}
              className={styles.modalBackButton}
            >
              {previousKeyword.name}
            </button>
          )}
          {!previousKeyword && <div />}
          <button
            onClick={() => modal.close()}
            className={styles.closeModalButton}
          >
            Close
          </button>
        </div>
        {selectedKeyword && (
          <>
            <h2 className={styles.header2}>
              {selectedKeyword.name}{" "}
              {selectedKeyword.tag && `(${selectedKeyword.tag})`}
            </h2>
            <RenderContent descriptions={selectedKeyword.descriptions} />
            <RelatedKeywords related={selectedKeyword.related_keywords} />
          </>
        )}
      </dialog>
    );
  };

  return (
    <main className={styles.main}>
      {modalComponent()}
      <h1 className={styles.title}>Legion Helper</h1>
      <div className={styles.content}>
        {rulesDocument.index
          .filter((dictionary) => dictionary.catalog === "alphabet")
          .map((catalog) => (
            <CatalogCard key={catalog.id} catalog={catalog} />
          ))}
      </div>
    </main>
  );
}
