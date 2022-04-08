import { Box } from '@chakra-ui/react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderItem } from './SliderItem';


export function Slider() {
  return (
    <Box px="100" pb="40px">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Box>
  )
}