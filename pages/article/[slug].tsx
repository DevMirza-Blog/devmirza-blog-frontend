import React from 'react'
import { IArticle } from '../../types'

interface IPropType {
  article: IArticle
}

const slug = ({ article }: IPropType) => {
  return (
    <>
      <div>{article.attributes.Title}</div>
    </>
  )
}

export default slug
