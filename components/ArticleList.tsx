import React from 'react'
import { IArticle } from '../types'
import Blogcard from './Blogcard'
import BlogCardWithImage from './BlogCardWithImage'

interface IPropType {
  articles: IArticle[]
}

const ArticleList = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles.map((article, idx) => {
        return <Blogcard article={article} key={article.id} />
      })}
    </div>
  )
}

export default ArticleList
