/* I don't know. */
import { serialize } from 'next-mdx-remote/serialize'
import { IArticle } from '../types'

/**
 * It takes a date string, converts it to a date object, and then returns a formatted date string.
 * @param {string} dateString - string - The date string to be formatted.
 * @returns A function that takes a string and returns a string.
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return date
}

/**
 * It takes a string, splits it on the hyphen, joins it back together with a space, and returns the
 * result
 * @param {string} slug - string
 * @returns A function that takes a string and returns a string.
 */
export const makeCategory = (slug: string): string => {
  if (typeof slug === 'string') {
    return slug.split('-').join(' ')
  }
  return ''
}

/**
 * It takes a string, capitalizes the first letter, and returns the new string
 * @param {string} str - string - The string to capitalize.
 * @returns A function that takes a string and returns a string.
 */
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * It returns a function that will call the original function after a timeout, but if the returned
 * function is called again before the timeout, it will clear the timeout and start over
 * @param fn - (query: string) => void
 * @param [timeout=300] - The time in milliseconds to wait before calling the function.
 * @returns A function that takes a function and a timeout and returns a function that takes any number
 * of arguments and calls the original function after the timeout.
 */
export const debounce = (fn: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout
  const debounced = (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, timeout)
  }
  return debounced
}

/**
 * It takes an article, serializes the body, and returns the article with the serialized body
 * @param {IArticle} item - IArticle - this is the item that is being serialized.
 * @returns An object with the same shape as the input object, but with the body attribute replaced
 * with the result of the serialize function.
 */
export const serializeMarkdown = async (item: IArticle) => {
  const body = await serialize(item.attributes.body as string)
  return {
    ...item,
    attributes: {
      ...item.attributes,
      body,
    },
  }
}
