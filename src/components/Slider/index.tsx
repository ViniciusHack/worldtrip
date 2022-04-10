import { Box } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Continent } from '../../types';
import { SliderItem } from './SliderItem';

export interface SliderProps {
  continents: Continent[];
}

export function Slider({ continents }: SliderProps) {
  console.log("Continents Abaixo: ")
  console.log(continents)
  return (
    <Box px="100" pb="40px">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
            <SliderItem 
              {...continent}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}