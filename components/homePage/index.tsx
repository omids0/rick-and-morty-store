import Image from 'next/image'
import { type FC } from 'react'

import { productsData } from 'utils/data/product'

const HomePage: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between gap-2">
        {productsData.map(item => (
          <div className=" bg-red-500 flex flex-col" key={item.id}>
            <Image
              src={`/${item.blouse.image}`}
              alt={item.blouse.name}
              width={200}
              height={200}
              loading="lazy"
            />
            <Image
              src={`/${item.pants.image}`}
              alt={item.blouse.name}
              width={200}
              height={200}
              loading="lazy"
            />
            <Image
              src={`/${item.shoe.image}`}
              alt={item.blouse.name}
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
