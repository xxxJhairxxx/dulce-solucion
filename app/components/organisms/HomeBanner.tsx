import { SliderImages } from "@/interfaces/home";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  SwiperOptions,
} from "swiper";
import Image from "next/image";
import NumbBox from "../atoms/NumbBox";
import { Picture } from "@/interfaces/shared";

interface MainBannerProps {
  imgs: Picture[];
  imgsTablet: Picture[];
  imgsDesktop: Picture[];
}
const swiperOptions: SwiperOptions = {
  slidesPerView: "auto",
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 2000,
  spaceBetween: 0,
  pagination: {
    el: ".homeBanner-pagination",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {},
  modules: [EffectFade, Autoplay, Pagination],
};
const HomeBanner = ({ imgs, imgsTablet, imgsDesktop }: MainBannerProps) => {
  const [imagenBanner, setImagenBanner] = useState<Picture[]>(imgs);
  const [showComponent, setShowComponent] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setImagenBanner(imgs);
    } else if (window.innerWidth < 1024) {
      setImagenBanner(imgsTablet);
    } else {
      setImagenBanner(imgsDesktop);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 0);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  });

  return (
    <section className="homeBanner" data-section="/">
      <NumbBox />
      {showComponent && (
        <Swiper {...swiperOptions}>
          {imagenBanner.map(({ url, id }) => (
            <SwiperSlide key={id}>
              <div className="homeBanner-img h-70">
                <Image src={url} width={3000} height={3000} alt="portada" />
              </div>
            </SwiperSlide>
          ))}

          <div className={`homeBanner-pagination`}></div>
        </Swiper>
      )}
    </section>
  );
};

export default HomeBanner;
