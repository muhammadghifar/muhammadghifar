export type Project = {
  id: number
  title: string
  description: string
  url?: string
  image: string
  stack?: string[]
  isWorkRelated?: boolean
  year?: number | string
}
