/* eslint-disable @next/next/no-img-element */
"use client";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  RulesDocument,
  Keyword,
  CatalogEntry,
  DescriptionType,
  StructuredList,
  Illustration,
} from "@/types";
import Script from "next/script";
import { rules } from "@/data/rules";
import styles from "./helper.module.css";
import { interpolateString } from "@/utils";
import classNames from "classnames";

export default function Helper() {
  const [rulesDocument] = useState<RulesDocument>(rules);
  const modal = document.querySelector("[data-modal]") as HTMLDialogElement;
  const [expandedCatalogs, setExpandedCatalogs] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);
  const [filter, setFilter] = useState<string>("");
  const renderedKeywords: string[] = [];
  let counter = 0;

  useEffect(() => {
    if (!modal) {
      return;
    }
    if (selectedKeywords.length > 0) {
      modal.showModal();
      modal.scrollTop = 0;
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
        {keyword.range && (
          <span className={styles.buttonRange}>
            {interpolateString(`[{${keyword.range}}]`, getKey(keyword.range))}
          </span>
        )}
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
        case "callout":
          return (
            <CalloutComponent
              key={getKey(description.type)}
              reference={description.callout_keyword}
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

  const CalloutComponent = ({ reference }: { reference: string }) => {
    const enriched = getEnrichedKeyword(reference);
    if (!enriched?.descriptions) {
      return null;
    }
    return (
      <div className={styles.calloutContainer}>
        <h3 className={classNames(styles.header3, styles.calloutHeader)}>
          {enriched?.name}
        </h3>
        <RenderContent descriptions={enriched?.descriptions} />
      </div>
    );
  };

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
        <RenderContent key={getKey(reference)} descriptions={withHeader} />
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

        {selectedKeyword?.keyword === "about" && <About />}

        {selectedKeyword && selectedKeyword?.keyword !== "about" && (
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
      if (keyword.descriptions.length === 0) {
        return false;
      }
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

  const About = () => {
    return (
      <div className={styles.about}>
        <p>
          Legion Helper is intended to make it quick to find keywords and
          concepts from the Star Wars: Legion rulebook and reference, for quick
          and easy access during play.
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
          {""}, and I liked the easy access of the keywords, but felt it missed
          quite a few functions. And with the Legion HQ list builder going down
          and no updates on the quicklist, it seemed prudent to come up with an
          alternate solution. I&apos;ve spent hours upon hours on making this
          site from scratch and converting the rules to a searchable format.
          Everything is either taken from the rulebook or written myself. I hope
          it will help your gaming experience.
        </p>
        <p>
          This is a fan page by <a href="mailto:takras@takras.net">Takras</a>{" "}
          and not affiliated with{" "}
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
        <h3>How to use</h3>
        <p>
          This site has catalogued all keywords and concepts from the rules
          reference, and made them searchable and easily accessible.
        </p>
        <p>
          You can either search (2 characters or more) which is the fastest way,
          or look up using the alphabetized list of keywords and concepts.
        </p>
        <p>Some buttons also have a Range-icon such as:</p>
        <button className={styles.button}>
          Compel [{""}
          <img
            src="/images/black/range-2.png"
            alt="A cross-haired circle with a number 2 in it"
            className={styles.inlineIcon}
          ></img>
          {""}]
        </button>
        <p>
          This is a shorthand reference to the range-effectiveness as described
          by the ability keyword, showing its &quot;at&quot;-range.
        </p>
      </div>
    );
  };

  return (
    <main className={styles.main}>
      {modalComponent()}
      <div className={styles.headline}>
        <h1 className={styles.title}>Legion Helper</h1>
        <img
          src="/images/legionhelper.svg"
          alt="A drawing of a B1 Battle droid."
          className={styles.logo}
        />
      </div>
      <div className={styles.aboutContainer}>
        <button
          className={styles.button}
          onClick={() =>
            selectKeyword(
              rulesDocument.keywords.find(
                (keyword) => keyword.keyword === "coming_from_pre_2024"
              )!
            )
          }
        >
          Biggest changes from version prior to 2024s 2.6.0 version.
        </button>
        <div className={styles.aboutButtonRow}>
          <button
            className={styles.button}
            onClick={() =>
              selectKeyword(
                rulesDocument.keywords.find(
                  (keyword) => keyword.keyword === "about"
                )!
              )
            }
          >
            About Legion Helper
          </button>
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
        <div id="donate-button-container" className={styles.donate}>
          <div id="donate-button"></div>
        </div>
        <Script id="PayPal">{`PayPal.Donation.Button({
env:'production',
hosted_button_id:'PCSQHJMWUZSWN',
image: {
src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
alt:'Donate with PayPal button',
title:'PayPal - The safer, easier way to pay online!',
}
}).render('#donate-button');`}</Script>
      </div>
      <div className={styles.versionInfo}>
        Current version of the rules reference updated:{" "}
        <span className={styles.version}>{rulesDocument.version}</span> valid
        from{" "}
        <span className={styles.date}>
          {new Date(rulesDocument.validFrom).toLocaleDateString()}.
        </span>
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
