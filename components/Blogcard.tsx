import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IArticle } from '../types'

interface IPropType {
  article: IArticle
}

const BlogCard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>
      <div className="flex items-center my-4">
        <div>
          <Image
            src={`${process.env.API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            height={40}
            width={40}
          />
        </div>
        <span>
          {article.attributes.author.data.attributes.firstname}{' '}
          {article.attributes.author.data.attributes.lastname} on
          <span className="text-gray-400"> {article.attributes.createdAt}</span>
        </span>
      </div>
    </div>
  )
}

export default BlogCard
