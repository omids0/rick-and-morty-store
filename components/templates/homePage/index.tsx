'use client'
import Image from 'next/image'
import { type FC } from 'react'

import Carousel from 'components/molecules/carousel'
import type { ProductsData } from 'types/utils/data/products'
import { productsData } from 'utils/data/product'

const HomePage: FC = () => {
  const handleCarouselContent = data => {
    return data.map((item: ProductsData) => ({
      element: (
        <div className="flex sm:w-[80%] sm:flex-row sm:h-[50vh] h-[70vh] flex-col w-full p-4 sm:justify-between items-center bg-gradient-to-b from-red-50 to-transparent rounded-xl">
          <Image
            src={`/${item.blouse.image}`}
            className="sm:max-w-[25rem] max-w-[8rem] h-[20rem]"
            width={500}
            height={500}
            alt={item.blouse.name}
          />

          <Image
            src={`/${item.pants.image}`}
            className="sm:max-w-[12rem] max-w-[8rem]"
            width={500}
            height={500}
            alt={item.pants.name}
          />
          <div className="flex sm:flex-col flex-col-reverse items-center sm:justify-between sm:h-full">
            <h1 className="font-bold sm:text-5xl text-gray-700 opacity-0 sm:opacity-100 first-letter:uppercase">
              {item.name}
            </h1>
            <Image
              src={`/${item.shoe.image}`}
              className="sm:max-w-[12rem] max-w-[8rem] max-h-[8rem]"
              width={500}
              height={500}
              alt={item.shoe.name}
            />
          </div>
        </div>
      )
    }))
  }

  return (
    <div className="flex flex-col">
      <div className="w-full min-h-[50vh] mb-8">
        <Carousel contentData={handleCarouselContent(productsData)} />
      </div>
      <div className="flex gap-2 flex-wrap">
        {productsData.map(item => (
          <div
            className=" bg-gradient-to-b from-red-400 to-transparent flex flex-col min-h-[90vh] mx-auto"
            key={item.id}
          >
            <Image
              src={`/${item.blouse.image}`}
              alt={item.blouse.name}
              width={180}
              height={180}
              loading="lazy"
            />
            <Image
              src={`/${item.pants.image}`}
              alt={item.blouse.name}
              width={180}
              height={180}
              loading="lazy"
            />
            <Image
              src={`/${item.shoe.image}`}
              alt={item.blouse.name}
              width={180}
              height={180}
              loading="lazy"
            />
            <div className="h-full flex items-end justify-center p-2">
              <button className="bg-red-300 text-gray-800 rounded-md px-2 font-serif hover:shadow-lg">
                Show Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
