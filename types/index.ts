/* A type definition for the MDXRemoteSerializeResult type. */
import { MDXRemoteSerializeResult } from "next-mdx-remote";

/* Defining the interface for the Category object. */
export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

/* Defining the interface for the Category object. */
export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}

/* Defining the interface for the Pagination object. */
export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

/* Defining the interface for the Pagination object. */
export interface IResourceMeta {
  pagination: IPagination;
}

/* Defining the interface for the CollectionResponse object. */
export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

/* Defining the interface for the ImageData object. */
export interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}

/* Defining the interface for the Author object. */
export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

/* Defining the interface for the Article object. */
export interface IArticlesAttribute {
  Title: string;
  body: string | MDXRemoteSerializeResult;
  Slug: string;
  Image: IImageData;
  createdAt: string;
  author: IAuthor;
  shortDescription: string;
}

/* Defining the interface for the Article object. */
export interface IArticle {
  id: number;
  attributes: IArticlesAttribute;
}

export type TDirection = 1 | -1;

/* Defining the interface for the QueryOptions object. */
export interface IQueryOptions {
  filters: any;
  sort: any;
  populate: any;
  pagination: {
    page: number;
    pageSize: number;
  };
}
