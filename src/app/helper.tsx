/* eslint-disable @next/next/no-img-element */
"use client";
import { ChangeEvent, useEffect, useState } from "react";
import {
  RulesDocument,
  Keyword,
  CatalogEntry,
  DescriptionType,
  StructuredList,
  Illustration,
} from "@/types";
//import rules from "@/data/rules-2.6.0.json";
import { rules } from "@/data/rules";
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
  const [filter, setFilter] = useState<string>("");
  const renderedKeywords: string[] = [];
  let counter = 0;

  useEffect(() => {
    if (modal && selectedKeywords.length > 0) {
      modal.showModal();
    }
  }, [modal, selectedKeywords]);

  const getKey = (key: string) => {
    counter += 1;
    return `${key}_${counter}`;
  };

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
    if (
      rulesDocument.keywords.filter((keyword) =>
        keyword.parents.includes(catalog.id)
      ).length === 0
    ) {
      return null;
    }

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
              .toSorted()
              .map((keyword) => (
                <KeywordCard key={getKey(keyword.keyword)} keyword={keyword} />
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
        key={getKey(keyword.keyword)}
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
              key={getKey(description.type)}
              descriptions={description.content}
              isInitiallyExpanded={description.initiallyExpanded}
            />
          );
        case "header":
          return (
            <h4 className={styles.header4} key={getKey(description.type)}>
              {description.content}
            </h4>
          );
        case "illustration":
          return (
            <Illustration
              key={getKey(description.altText)}
              image={description}
            />
          );
        case "keyword_list":
          return (
            <KeywordList
              key={getKey(description.type)}
              keywords={description.content}
            />
          );
        case "reference":
          return reference({
            reference: description.referenced_keyword,
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

  const reference = ({ reference }: { reference: string }) => {
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

    if (filteredDescriptions.length > 0) {
      return (
        <RenderContent key={getKey(reference)} descriptions={withHeader} />
      );
    }

    return (
      <div className={styles.referenceContainer} key={getKey(reference)}>
        <h3 className={classNames(styles.header3, styles.referenceHeader)}>
          {enriched?.name}
        </h3>
        {enriched.summary && (
          <div className={styles.referenceSummary}>
            {interpolateString(enriched?.summary, enriched.name)}
          </div>
        )}
        <div className={styles.referenceLink}>
          <div>See:</div>
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

  const Illustration = ({ image }: { image: Illustration }) => {
    return (
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

  const KeywordList = ({ keywords }: { keywords: string[] }) => {
    const content = keywords.map((keyword) => {
      const enriched = getEnrichedKeyword(keyword);
      if (!enriched?.summary) {
        return null;
      }
      return (
        <li key={getKey(keyword)}>
          <strong className={styles.keywordListName}>{enriched.name}: </strong>
          {interpolateString(enriched.summary, getKey(enriched.summary))}
        </li>
      );
    });
    return content ? <ul key={getKey(keywords[0])}>{content}</ul> : null;
  };

  const StructuredList = ({
    list,
    isTopLevel,
    index,
    isNumbered,
  }: {
    list: StructuredList["content"];
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

  const RelatedKeywords = ({ related }: { related: string[] }) => {
    return (
      <div className={styles.relatedContainer}>
        <h4 className={styles.relatedHeader}>Related keywords:</h4>
        <div className={styles.relatedButtons}>
          {related.toSorted().map((keyword) => {
            const enriched = getEnrichedKeyword(keyword);
            if (!enriched) {
              modal.close();
              return null;
            }
            return (
              <button
                className={styles.relatedButton}
                key={getKey(keyword)}
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
    isInitiallyExpanded,
  }: {
    descriptions: DescriptionType;
    isInitiallyExpanded?: boolean;
  }) => {
    const [isActive, setIsActive] = useState(isInitiallyExpanded === true);
    const toggleActive = () => setIsActive((current) => !current);
    return (
      <div className={styles.exampleModule}>
        <div className={styles.exampleContainer} key={getKey("header")}>
          <button
            onClick={() => toggleActive()}
            className={classNames(
              styles.exampleHeader,
              isActive
                ? styles.exampleHeaderActive
                : styles.exampleHeaderInactive
            )}
          >
            <RenderContent
              descriptions={descriptions.filter(
                (description) => description.type === "header"
              )}
            />
          </button>
          <div
            className={isActive ? styles.helperActive : styles.helperInactive}
          >
            <RenderContent
              descriptions={descriptions.filter(
                (description) => description.type !== "header"
              )}
            />
          </div>
        </div>
      </div>
    );
  };

  const modalComponent = () => {
    const selectedKeyword = selectedKeywords.slice(-1).shift();
    const previousKeyword = selectedKeywords[selectedKeywords.length - 2];
    return (
      <dialog data-modal className={styles.modal}>
        <div className={styles.modalTopMenu}>
          <div className={styles.modalButtonRow}>
            {previousKeyword && (
              <button
                onClick={() => goToPreviousKeyword(previousKeyword)}
                className={styles.modalBackButton}
              >
                <img
                  src="/images/arrow-left.png"
                  alt="Arrow pointing left"
                  width="20"
                ></img>
                {previousKeyword.name}
              </button>
            )}
            {!previousKeyword && <div />}
            <button
              onClick={() => {
                modal.close();
                setSelectedKeywords([]);
              }}
              className={styles.closeModalButton}
            >
              <img
                src="/images/cross-x.png"
                alt="A black cross"
                width="20"
              ></img>
            </button>
          </div>
        </div>

        {selectedKeyword && (
          <div className={styles.keywordContainer}>
            <h2 className={styles.header2}>
              {selectedKeyword.name}{" "}
              {selectedKeyword.tag && `(${selectedKeyword.tag})`}
            </h2>
            <RenderContent descriptions={selectedKeyword.descriptions} />
            <RelatedKeywords related={selectedKeyword.related_keywords} />
          </div>
        )}
      </dialog>
    );
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  const searchContent = () => {
    const search = new RegExp(filter.toLowerCase());
    const result = rulesDocument.keywords.filter((keyword) => {
      const keywordResult = rules.keywords.filter((key) =>
        search.test(keyword.name.toLowerCase())
      );
      if (keywordResult.length > 0) {
        return true;
      }

      const keys = keyword.descriptions.filter((description) => {
        switch (description.type) {
          case "text":
          case "header":
          case "structured_list":
            if (description && typeof description.content === "string") {
              return search.test(description.content.toLowerCase());
            }
            return false;
          case "reference":
            return search.test(description.referenced_keyword.toLowerCase());
          case "keyword_list":
            return search.test(description.content.join().toLowerCase());
          default:
            return false;
        }
      });
      return keys.length > 0;
    });
    return result;
  };

  const getFilteredItems = () => {
    const items: Keyword[] = [];
    if (filter.length < 2) {
      return [];
    }
    return searchContent();
  };

  const searchComponent = () => {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.searchInputContainer}>
          <input
            placeholder="Search"
            className={styles.searchInput}
            type="text"
            value={filter}
            id="search"
            onChange={onSearchChange}
            autoComplete="new-password"
          ></input>
          <button className={styles.button} onClick={() => setFilter("")}>
            X
          </button>
        </div>
        <div className={styles.searchResult}>
          {getFilteredItems().map((item) => (
            <KeywordCard keyword={item} key={getKey(item.keyword)} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className={styles.main}>
      {modalComponent()}
      <h1 className={styles.title}>Legion Helper</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
          <p>
            Legion Helper is intended to make it quick to find keywords and
            concepts from the Star Wars: Legion rulebook and reference, for
            quick and easy access during play.
          </p>
          <p>
            It is heavily inspired by{" "}
            <a
              className={styles.externalLink}
              href="https://legionquickguide.com/"
              target="_blank"
            >
              Legion Quick Guide by The Fifth Trooper
            </a>
            {""}, but made due to necessity with lack of updates from new
            versions of the official rules. It is made from ground up with easy
            foundation for changes in the rules.
          </p>
          <p>
            This is a fan page by Takras and not affiliated with{" "}
            <a
              href="https://www.atomicmassgames.com/"
              target="_blank"
              className={styles.externalLink}
            >
              Atomic Mass Games
            </a>{" "}
            nor with{" "}
            <a
              href="https://thefifthtrooper.com/"
              target="_blank"
              className={styles.externalLink}
            >
              The Fifth Trooper.
            </a>
          </p>
        </div>
        <div className={styles.aboutButtonRow}>
          <button
            className={styles.button}
            onClick={() => window.open(rulesDocument.documentUrl, "_blank")}
          >
            Official Document
          </button>
          <button
            className={styles.button}
            onClick={() => window.open(rulesDocument.discussionUrl, "_blank")}
          >
            Official Rules Forum
          </button>
        </div>
        <div className={styles.versionInfo}>
          Current version of the rules reference updated:{" "}
          <span className={styles.version}>{rulesDocument.version}</span> valid
          from{" "}
          <span className={styles.date}>
            {new Date(rulesDocument.validFrom).toLocaleDateString()}.
          </span>
        </div>
      </div>

      <div className={styles.content}>
        {searchComponent()}
        {rulesDocument.index
          .filter((dictionary) => dictionary.catalog === "alphabet")
          .map((catalog) => (
            <CatalogCard key={getKey(catalog.id)} catalog={catalog} />
          ))}
      </div>
    </main>
  );
}
