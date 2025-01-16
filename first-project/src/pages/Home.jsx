
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src="/src/assets/carousel/carousel 01.jpg" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/carousel/carousel 02.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/carousel/carousel 03.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/carousel/carousel 04.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/carousel/featured prodct 01.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/carousel/featured prodct 02.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/carousel/featured prodct 03.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/carousel/featured prodct 04.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/carousel/featured prodct 01.jpg" alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Home;
