type Variation = {
  name: string
  image: string
  description: string
}

export type ProductsData = {
  id: string
  name: string
  gender: 'f' | 'm'
  description: string
  blouse: Variation
  pants: Variation
  shoe: Variation
}
