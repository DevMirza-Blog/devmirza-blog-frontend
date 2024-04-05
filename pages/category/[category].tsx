import { AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import qs from 'qs'
import ArticleList from '../../components/ArticleList'
import Divider from '../../components/Divider'
import Pagination from '../../components/Pagination'
import Tabs from '../../components/Tabs'
import { fetchArticles, fetchCategories } from '../../http'
import {
  IArticle,
  ICategory,
  ICollectionResponse,
  IPagination,
  IQueryOptions,
} from '../../types'
import { capitalizeFirstLetter, debounce, makeCategory } from '../../utils'

/* Defining the shape of the props object. */
interface IPropType {
  categories: {
    items: ICategory[]
    pagination: IPagination
  }
  articles: {
    items: IArticle[]
    pagination: IPagination
  }
  slug: string
}

const Category = ({ categories, articles, slug }: IPropType) => {
  /* Destructuring the page and pageCount from the articles.pagination object. */
  const { page, pageCount } = articles.pagination
  /* Destructuring the query object from the router object. */
  const router = useRouter()
  /* Destructuring the query object from the router object. */
  const { category: categorySlug } = router.query

  /**
   * It takes a slug, makes it a category, and capitalizes the first letter
   * @returns The return value of the function is the return value of the function call.
   */
  const formattedCategory = () => {
    return capitalizeFirstLetter(makeCategory(slug))
  }

  /**
   * It takes a string as an argument and then pushes a new route to the browser history
   * @param {string} query - string - the search query
   */
  const handleSearch = (query: string) => {
    router.push(`/category/${categorySlug}/?search=${query}`)
  }

  return (
    <>
      <Head>
        <title>DevMirza Blog | {formattedCategory()}</title>
        <meta name="description" content="DevMirza Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tabs
        categories={categories.items}
        handleOnSearch={debounce(handleSearch, 500)}
      />
      <Divider />
      <ArticleList articles={articles.items} />
      <Pagination
        page={page}
        pageCount={pageCount}
        redirectUrl={`/category/${categorySlug}`}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  /* Creating an object with the properties of the interface IQueryOptions. */
  const options: IQueryOptions = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    filters: {
      category: {
        slug: query.category,
      },
    },
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 1,
    },
  }

  /* Checking if the query object has a search property. If it does, it is setting the options.filters
  property to an object with a Title property. The Title property is an object with a 
  property. The  property is set to the value of the query.search property. */
  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search,
      },
    }
  }

  /* Converting the options object to a query string. */
  const queryString = qs.stringify(options)

  /* Destructuring the data property from the AxiosResponse object and assigning it to the articles
  variable. */
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString)

  /* Destructuring the data property from the AxiosResponse object and assigning it to the categories
    variable. */
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories()

  /* Returning an object with a property called props. The props property is an object with three
  properties. The categories property is an object with two properties. The items property is an
  array of objects. The pagination property is an object with two properties. The articles property
  is an object with two properties. The items property is an array of objects. The pagination
  property is an object with two properties. The slug property is a string. */
  return {
    props: {
      categories: {
        items: categories.data,
        pagination: categories.meta.pagination,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
      slug: query.category,
    },
  }
}

export default Category
