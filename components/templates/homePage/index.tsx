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
        <div className="flex sm:w-[80%] flex-row sm:h-[50vh] h-[30vh] w-full p-4 justify-between items-center bg-gradient-to-b from-red-50 to-transparent rounded-xl">
          <Image
            src={`/${item.blouse.image}`}
            className="sm:max-w-[16rem] max-w-[5rem] sm:max-h-[18rem] max-h-[10rem]"
            width={500}
            height={500}
            alt={item.blouse.name}
            loading="lazy"
          />

          <Image
            src={`/${item.pants.image}`}
            className="sm:max-w-[12rem] max-w-[6rem] sm:max-h-[16rem] max-h-[10rem]"
            width={500}
            height={500}
            alt={item.pants.name}
            loading="lazy"
          />
          <div className="flex flex-col items-center justify-center h-full gap-5">
            <h1 className="font-bold sm:text-5xl text-gray-700 first-letter:uppercase">
              {item.name}
            </h1>
            <Image
              src={`/${item.shoe.image}`}
              className="sm:max-w-[12rem] max-w-[6rem] max-h-[6rem]"
              width={500}
              height={500}
              alt={item.shoe.name}
              loading="lazy"
            />
          </div>
        </div>
      )
    }))
  }

  return (
    <div className="flex flex-col">
      <div className="w-full sm:h-[50vh] h-[30vh] mb-8">
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
