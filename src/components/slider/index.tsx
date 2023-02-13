import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/thumbs';
import SwiperClass from 'swiper/types/swiper-class';
import { MainSlidContainer, PhotoesPreview, SliderContainer, SwiperThumb } from './styled';
import './style.css';
import { BookPhoto } from '../../pages/book/styled';

interface SliderProps {
  images?: string[];
}

export const Slider = ({ images }: SliderProps) => {
  const [activeThumb, setActiveThumb] = useState<SwiperClass | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  if (!images) {
    return <BookPhoto />;
  }
  if (images.length === 1) {
    return <BookPhoto bookphoto={images[0]} />;
  }
  return (
    <SliderContainer>
      <MainSlidContainer>
        <Swiper
          data-test-id='slide-big'
          loop={true}
          navigation={true}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
          modules={[Navigation, Thumbs]}
          onSlideChange={() => console.log(activeThumb)}
          className='mySwiper2'
        >
          {images.map((image, index) => (
            <SwiperSlide key={Math.floor(Math.random() * 10000)}>
              <img src={image} alt='book' />
            </SwiperSlide>
          ))}
        </Swiper>
      </MainSlidContainer>
      <PhotoesPreview>
        <Swiper
          onSwiper={setActiveThumb}
          onSlideChange={setActiveThumb}
          loop={true}
          spaceBetween={24}
          watchSlidesProgress={true}
          slidesPerView={5}
          modules={[Navigation, Thumbs]}
          className='mySwiper'
        >
          {images.map((image, index) => (
            <SwiperSlide
              className='swiper-pagination-bullet'
              data-test-id='slide-mini'
              key={Math.floor(Math.random() * 10000)}
              onClick={() => setActivePhoto(index)}
            >
              {/* <SwiperThumb> */}
              <img src={image} alt='book' />
              {/* </SwiperThumb> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoesPreview>
    </SliderContainer>
  );
};
