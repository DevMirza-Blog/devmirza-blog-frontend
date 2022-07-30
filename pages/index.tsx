import { AxiosResponse } from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import Tabs from "../components/Tabs";
import Pagination from "../components/Pagination";
import {
  IArticle,
  ICategory,
  ICollectionResponse,
  IPagination,
  IQueryOptions,
} from "../types";
import qs from "qs";
import { useRouter } from "next/router";
import { debounce } from "../utils/index";

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  };
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  const router = useRouter();

  //const { page, pageCount } = articles.pagination;

  const handleSearch = (query: string) => {
    router.push(`/?search=${query}`);
  };

  return (
    <div>
      <Head>
        <title>DevMirza Blog Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Tabs
        categories={categories.items}
        handleOnSearch={debounce(handleSearch, 500)}
      /> */}
      <ArticleList articles={articles.items} />
      {/* <Pagination page={page} pageCount={pageCount} /> */}
    </div>
  );
};

export default Home;