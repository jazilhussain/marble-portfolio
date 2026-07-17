import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import hero4 from "../assets/hero/hero4.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero1 from "../assets/hero/hero1.jpg";
import hero5 from "../assets/hero/hero5.jpg";

const images = [hero4, hero2, hero1, hero5];

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
        className="absolute inset-0 w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl -mt-10">

          <p className="text-yellow-300 tracking-[5px] text-sm mb-5">
            PREMIUM MARBLE COLLECTION
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Luxury Marble For
            <br />
            Modern Spaces
          </h1>

          <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-8 mb-10">
            Premium marble, granite and stone solutions
            for luxury homes and commercial projects.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="bg-yellow-600 text-black px-7 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
              Explore Collection
            </button>

            <button className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;