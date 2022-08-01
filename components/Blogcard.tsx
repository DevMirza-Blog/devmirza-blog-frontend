import React from "react";
import { IArticle } from "../types";

interface IPropType {
  article: IArticle;
}

const BlogCard = ({ article }: IPropType) => {
  return <div>BlogCard</div>;
};

export default BlogCard;
