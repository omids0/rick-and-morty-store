import { Metadata } from 'next'
import { type FC } from 'react'

import HomePage from '../components/homePage'

export const metadata: Metadata = {
  title: 'Rick and Morty Store',
  description: 'Rick and Morty Home Page'
}

const Home: FC = () => {
  return (
    <>
      <HomePage />
    </>
  )
}

export default Home
