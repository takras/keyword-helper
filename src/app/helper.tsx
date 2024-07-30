/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import {
  RulesDocument,
  Keyword,
  CatalogEntry,
  DescriptionType,
  RulesExample,
} from "@/types";
import rules from "@/data/rules-2.6.0.json";
import styles from "./page.module.css";

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
    setSelectedKeywords((current) => [...current, keyword]);
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
          className={styles.catalogButton}
          onClick={() => toggleExpandCatalog(catalog.id)}
        >
          {catalog.name}
        </button>
        {isExpanded(catalog.id) ||
          (true && (
            <div className={styles.keywordsContainer}>
              {rulesDocument.keywords
                .filter((keyword) => keyword.parents.includes(catalog.id))
                .map((keyword) => (
                  <KeywordCard key={keyword.keyword} keyword={keyword} />
                ))}
            </div>
          ))}
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
              exampleArray={description.content}
            />
          );
        default:
          return description.type;
      }
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
              <button key={keyword} onClick={() => selectKeyword(enriched)}>
                {enriched?.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const ExampleContent = ({
    exampleArray,
  }: {
    exampleArray: RulesExample["content"];
  }) => {
    return exampleArray.map((example, i) => {
      const key = `${example.type}_${i}`;
      switch (example.type) {
        case "header":
          return <h4 key={key}>{example.content}</h4>;
        case "structured_list":
          return <div key={key}>Struktur-liste</div>;
        default:
          return <div key={key}>{example.content}</div>;
      }
    });
  };

  const modalComponent = () => {
    const selectedKeyword = selectedKeywords.slice(-1).shift();
    return (
      <dialog data-modal className={styles.modal}>
        {selectedKeyword && (
          <>
            <h2>
              {selectedKeyword.name}{" "}
              {selectedKeyword.tag && `(${selectedKeyword.tag})`}
            </h2>
            <RenderContent descriptions={selectedKeyword.descriptions} />
            <RelatedKeywords related={selectedKeyword.related_keywords} />
          </>
        )}
        <button
          onClick={() => modal.close()}
          className={styles.closeModalButton}
        >
          Close
        </button>
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
