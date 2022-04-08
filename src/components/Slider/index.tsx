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
          <SliderItem bgImage="/images/europa-1.svg" title="Europa" description="O continente mais antigo."/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem bgImage="/images/north-1.jpg" title="America do Norte" description="O nosso continente vizinho."/>
        </SwiperSlide >
        <SwiperSlide>
          <SliderItem bgImage="/images/south-1.jpg" title="America do Sul" description="O nosso continente."/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem bgImage="/images/asia-1.jpg" title="Ásia" description="O maior continente."/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem bgImage="/images/africa-1.jpg" title="África" description="O continente berço da humanidade."/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem bgImage="/images/Oceania-1.jpg" title="Oceania" description="O continente mais novo."/>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}