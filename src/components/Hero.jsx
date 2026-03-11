import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { heroSlides } from '../data/content';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        loop
        speed={900}
        pagination={{ clickable: true }}
        className="h-[84vh] min-h-[600px]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-full w-full">
              <img src={slide.image} alt={slide.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="hero-overlay absolute inset-0"></div>
              <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className="max-w-3xl text-white"
                >
                  <p className="glass mb-5 inline-block rounded-full px-4 py-1 text-xs uppercase tracking-[0.22em] text-white">
                    Legacy Since 1984
                  </p>
                  <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                    {slide.title}
                    <span className="mt-2 block text-rose-200">Future-Ready Engineering Education</span>
                  </h1>
                  <p className="mt-5 max-w-2xl text-slate-100/90 md:text-lg">{slide.subtitle}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to="/gallery" className="rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 hover:bg-rose-600">
                      Explore Campus
                    </Link>
                    <Link to="/departments" className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
                      View Departments
                    </Link>
                  </div>
                  <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-center">
                    <div className="glass rounded-xl p-3"><p className="text-2xl font-bold text-white">200+</p><p className="text-xs text-slate-100">Acre Campus</p></div>
                    <div className="glass rounded-xl p-3"><p className="text-2xl font-bold text-white">8</p><p className="text-xs text-slate-100">Departments</p></div>
                    <div className="glass rounded-xl p-3"><p className="text-2xl font-bold text-white">1984</p><p className="text-xs text-slate-100">Established</p></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950"></div>
    </section>
  );
}

export default Hero;
