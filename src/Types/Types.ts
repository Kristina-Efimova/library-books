export type PageType = {
  key: string,
  cover_i: number,
  title?: string,
  author_key?: string,
  name?: string
  type?: string
  top_work?: string
  author_name?:string
  publish_date: string[]
}
export interface DescriptionTypes {
  description?: string | {type: string, value: string} | undefined,
  title?:string,
  key?:string,
  covers?: Array<number>,
  name?:string,
  birth_date?: string,
  photos?: number[],
  bio?: {type: string,value: string},
}

export type FavoritesType = {page: PageType, info: DescriptionTypes}

export type BooksData = {
  key: string,
  cover_i: number,
  title: string,
  author_key: string,
  type: string,
  author_name:string,
  publish_date: string[]
}

type BookInfo = {
  description: string | {type: string, value: string} | undefined,
  title: string,
  type: {key: string},
  covers: number[],
  authors: {author: {key: string}}[],
  key: string
}
type AuthorInfo = {
  name: string,
  photos: number[],
  type: {key: string},
  birth_date: string,
  bio?: {value: string},
  key: string
}