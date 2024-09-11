"use client";
import Script from "next/script";
import Image from "next/image";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AVAILABLE_KEYWORDS, CatalogEntry, Keyword } from "@/types";
import { rules as rulesDocument } from "@/data/rules";
import { CatalogCard } from "./catalog-card";
import { KeywordCard } from "./keyword-card";
import { sortKeyword } from "@/utils";
import { ToggleDarkMode } from "./toggle-dark-mode";
import { KeywordContext } from "../providers";
import { useRouter } from "next/navigation";
import styles from "./helper.module.css";
import classNames from "classnames";
import Link from "next/link";

export default function Helper() {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const { selectKeyword, getLink } = useContext(KeywordContext);
  const router = useRouter();

  const [activeCatalog, setActiveCatalog] =
    useState<CatalogEntry["catalog"]>("alphabet");

  const print_unused_keywords = () =>
    AVAILABLE_KEYWORDS.forEach((a_keyword) => {
      const found = rulesDocument.keywords.find(
        (keyword) => keyword.keyword === a_keyword
      );
      if (!found) {
        console.log(a_keyword);
      }
    });

  let counter = 0;

  useEffect(() => {
    const hash = window.location.hash.replace(/(#!)/, "");
    const keyword = rulesDocument.keywords.find(
      (word) => word.keyword === hash
    );

    if (keyword) {
      router.push(`/${keyword.keyword}`);
    }
  }, [router]);

  const getKey = (key: string) => {
    counter += 1;
    return `${key}_${counter}`;
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.currentTarget.value);
  };

  const searchContent = useCallback(() => {
    const search = new RegExp(searchFilter.toLowerCase());
    const result = rulesDocument.keywords
      .toSorted(sortKeyword)
      .filter((keyword) => {
        if (keyword.descriptions.length === 0 || keyword.hideFromsearch) {
          return false;
        }
        const keywordResult = rulesDocument.keywords.filter(() =>
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
  }, [searchFilter]);

  const getFilteredItems = useCallback(() => {
    if (searchFilter.length < 2) {
      return [];
    }
    const result = searchContent();
    if (result.length === 0) {
      const nothing: Keyword = {
        keyword: "search_result_blank",
        name: "[No search results]",
        descriptions: [],
        parents: [],
        related_keywords: [],
      };
      return [nothing];
    }
    return searchContent();
  }, [searchFilter.length, searchContent]);

  const searchComponent = () => {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.searchInputContainer}>
          <input
            placeholder="Search"
            className={styles.searchInput}
            type="text"
            value={searchFilter}
            id="search"
            onChange={onSearchChange}
            autoComplete="new-password"
          ></input>
          <button className={styles.button} onClick={() => setSearchFilter("")}>
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

  const catalogButtons = () => {
    type ButtonList = { id: CatalogEntry["catalog"]; name: string }[];
    const catalogs: ButtonList = [
      { id: "alphabet", name: "All" },
      { id: "concepts", name: "Game Concepts" },
      { id: "weapons", name: "Weapon Keywords" },
      { id: "units", name: "Unit Keywords" },
    ];
    return (
      <>
        <h3 className={styles.filterHeader}>Filter keywords by:</h3>
        <div className={styles.catalogFilterContainer}>
          {catalogs.map((catalog) => {
            return (
              <button
                className={classNames(
                  styles.button,
                  activeCatalog === catalog.id ? styles.buttonActive : null
                )}
                key={catalog.id}
                onClick={() =>
                  setActiveCatalog((current) =>
                    current === catalog.id ? "alphabet" : catalog.id
                  )
                }
              >
                {catalog.name}
              </button>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.darkModeToggle}>
        <ToggleDarkMode />
      </div>
      <div className={styles.headline}>
        <h1 className={styles.title}>Legion Helper</h1>
        <span className={styles.subtitle}>&quot;Roger, Roger&quot;</span>
        <Image
          width={56}
          height={80}
          src="/images/legionhelper.svg"
          alt="A drawing of a B1 Battle droid."
          className={styles.logo}
        />
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.changelogButton}>
          <Link
            className={styles.button}
            href={getLink("coming_from_pre_2024")}
            onClick={() => selectKeyword("coming_from_pre_2024")}
            prefetch={true}
          >
            What&apos;s new in Legion 2024 v2.6.0?
          </Link>
        </div>
        <div className={styles.changelogButton}>
          <Link
            className={styles.button}
            href={getLink("skirmish")}
            onClick={() => selectKeyword("skirmish")}
            prefetch={true}
          >
            Skirmish Mission Generator
          </Link>
        </div>
        <div className={styles.aboutButtonRow}>
          <Link
            className={styles.button}
            href={getLink("about")}
            onClick={() => selectKeyword("about")}
            prefetch={true}
          >
            About Legion Helper
          </Link>
          <Link
            className={styles.button}
            href={getLink("attack_quick_reference")}
            onClick={() => selectKeyword("attack_quick_reference")}
            prefetch={true}
          >
            Attack Quick Reference
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.versionInfo}>
            Current version of Legion Helper:{" "}
            <Link
              className={classNames(styles.version, styles.button)}
              href={getLink("changelog")}
              onClick={() => selectKeyword("changelog")}
              prefetch={true}
            >
              {rulesDocument.helperVersion}
            </Link>
          </div>
          <div className={styles.versionInfo}>
            Current version of the rules reference updated:{" "}
            <span className={styles.version}>{rulesDocument.version}</span>{" "}
            valid from{" "}
            <span className={styles.date}>
              {new Date(rulesDocument.validFrom).toLocaleDateString()}.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {searchComponent()}
        {catalogButtons()}
        {rulesDocument.index
          .filter((dictionary) => dictionary.catalog === "alphabet")
          .map((catalog) => (
            <CatalogCard
              key={getKey(catalog.id)}
              catalog={catalog}
              activeCatalog={activeCatalog}
            />
          ))}
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.aboutContainer}>
          <Link
            className={styles.button}
            href={rulesDocument.downloadUrl}
            target="_blank"
          >
            Official Rules PDF
          </Link>
          <Link
            className={styles.button}
            href={rulesDocument.documentUrl}
            target="_blank"
          >
            Official Documents
          </Link>
          <Link
            className={styles.button}
            href={rulesDocument.discussionUrl}
            target="_blank"
          >
            Official Forum
          </Link>
        </div>
        <div id="donate-button-container" className={styles.donate}>
          <div id="donate-button"></div>
        </div>
        <Script id="PayPal">{`if(PayPal) {PayPal.Donation.Button({
env:'production',
hosted_button_id:'PCSQHJMWUZSWN',
image: {
src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
alt:'Donate with PayPal button',
title:'PayPal - The safer, easier way to pay online!',
}
}).render('#donate-button');}`}</Script>

        <a
          href="https://twitter.com/intent/tweet?screen_name=takras&ref_src=twsrc%5Etfw"
          className="twitter-mention-button"
          data-size="large"
          data-show-count="false"
        >
          Give feedback to @takras
        </a>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
    </main>
  );
}
