import { Metadata } from 'next'
import { type FC } from 'react'
import './globals.css'

import HomePage from 'components/homePage'
import MainLayout from 'components/mainLayout'

export const metadata: Metadata = {
  title: 'Rick and Morty Store',
  description: 'Rick and Morty Home Page'
}

const App: FC = () => {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  )
}

export default App
