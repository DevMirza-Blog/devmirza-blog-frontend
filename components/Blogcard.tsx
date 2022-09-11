import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IArticle } from '../types'
import { formatDate } from '../utils'

interface IPropType {
  article: IArticle
}

const BlogCard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className="text-xl text-dark font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary my-1">
          {article.attributes.Title}
        </h1>
      </Link>
      <div className="flex items-center my-3">
        <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
          <Image
            src={`${process.env.API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            alt="avatar"
            height={40}
            width={40}
          />
        </div>
        <span className="text-black dark:text-white text-sm font-bold">
          {article.attributes.author.data.attributes.firstname}{' '}
          {article.attributes.author.data.attributes.lastname} on &nbsp;
          <span className="text-gray-400">
            {formatDate(article.attributes.createdAt)}
          </span>
        </span>
      </div>
      <div className="text-dark dark:text-white">
        {article.attributes.shortDescription.slice(0, 250)}
        {''}
        {article.attributes.shortDescription.length > 250 ? '...' : ''}
      </div>
    </div>
  )
}

export default BlogCard
