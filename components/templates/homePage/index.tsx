import Image from 'next/image'
import { type FC } from 'react'

import Carousel from 'components/molecules/carousel'
import { productsData } from 'utils/data/product'

const HomePage: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[50vh] mb-8">
        <Carousel data={productsData} />
      </div>
      <div className="flex gap-2 mx-auto flex-wrap">
        {productsData.map(item => (
          <div
            className=" bg-gradient-to-b from-red-400 to-transparent flex flex-col h-[90vh]"
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
