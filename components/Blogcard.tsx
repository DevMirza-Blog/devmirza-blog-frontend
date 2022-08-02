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
        <div></div>
      </div>
    </div>
  )
}

export default BlogCard
