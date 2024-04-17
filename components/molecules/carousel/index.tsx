'use client'
import { useRef, type FC } from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'
import { ProductsData } from 'types/utils/data/products'

import Image from 'next/image'

type Props = {
  spaceBetween?: number
  centeredSlides?: boolean
  delay?: number
  disableOnInteraction?: boolean
  clickablePagination?: boolean
  navigation?: boolean
  data: ProductsData[]
}

const Carousel: FC<Props> = ({
  spaceBetween = 30,
  centeredSlides = true,
  delay = 4500,
  disableOnInteraction = false,
  clickablePagination = true,
  navigation = true,
  data
}) => {
  const progressCircle = useRef(null)

  const progressContent = useRef(null)

  const onAutoplayTimeLeft = (_, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        autoplay={{
          delay,
          disableOnInteraction
        }}
        pagination={{
          clickable: clickablePagination
        }}
        navigation={navigation}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex">
              <Image
                src={`/${item.blouse.image}`}
                style={{
                  height: '20rem'
                }}
                width={250}
                height={250}
                alt={item.blouse.name}
              />
              <Image
                src={`/${item.pants.image}`}
                style={{
                  height: '20rem'
                }}
                width={250}
                height={250}
                alt={item.pants.name}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  )
}

export default Carousel
