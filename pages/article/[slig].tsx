import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { IArticle, ICollectionResponse } from '../../types'
import qs from 'qs'
import { formatDate, serializeMarkdown } from '../../utils'
import { AxiosResponse } from 'axios'
import { fetchArticleBySlug } from '../../http'
import Image from 'next/image'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface IPropType {
  article: IArticle
  notFound?: boolean
}

const slug = ({ article, notFound = false }: IPropType) => {
  return (
    <>
      <Head>
        <title>{article.attributes.Title}</title>
      </Head>

      <div className="my-12 grid lg:grid-cols-3 gap-12 single-article">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold py-2">
            {article.attributes.Title}
          </h1>
          <div className="flex items-center my-4">
            <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
              <Image
                src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                alt="thumbnail"
                width={50}
                height={40}
              />
            </div>
            <span>
              {article.attributes.author.data.attributes.firstname}
              {''}
              {article.attributes.author.data.attributes.lastname} on &nbsp;
              <span className="text-gray-400">
                {formatDate(article.attributes.createdAt)}
              </span>
            </span>
          </div>
          <div className="text-lg text-gray-600 leading-8">
            <Image
              className="w-full my-12 mb-6"
              src={`http://localhost:1337${article.attributes.Image.data.attributes.url}`}
              alt={article.attributes.Title}
              width={1024}
              height={600}
            />
            <MDXRemote
              {...(article.attributes.body as MDXRemoteSerializeResult)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryString = qs.stringify({
    populate: ['Image', 'author.avatar'],
    filters: {
      Slug: {
        $eq: query.slug,
      },
    },
  })

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticleBySlug(queryString)
  if (articles.data.length === 0) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      article: await serializeMarkdown(articles.data[0]),
    },
  }
}

export default slug
