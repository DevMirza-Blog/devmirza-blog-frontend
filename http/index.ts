/* Importing the axios library. */
import axios from 'axios'

/* Creating an axios instance with the baseURL and headers. */
const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
})

/**
 * It returns a promise that resolves to the response of the GET request to the /api/categories
 * endpoint
 */
export const fetchCategories = async () => api.get('/api/categories')

/**
 * It takes a query string as an argument and returns a promise that resolves to an array of articles
 * @param {string} queryString - string
 */
export const fetchArticles = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`)

/**
 * It takes a query string as an argument and returns a promise that resolves to an array of articles
 * @param {string} queryString - string
 */
export const fetchArticleBySlug = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`)
