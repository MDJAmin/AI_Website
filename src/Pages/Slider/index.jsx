import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div id="Slider" className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
