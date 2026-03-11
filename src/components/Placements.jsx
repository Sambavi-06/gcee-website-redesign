import { useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { placementStats, recruiters, recruiterLogos, placementStories } from '../data/content';
import Reveal from './Reveal';
import 'swiper/css';

function CountUp({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    let current = 0;
    const steps = 40;
    const increment = value / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 35);
    return () => clearInterval(timer);
  }, [value]);

  return <>{isDecimal ? count.toFixed(1) : Math.round(count)}{suffix}</>;
}

function Placements() {
  const marqueeText = useMemo(() => [...recruiters, ...recruiters, ...recruiters], []);

  return (
    <section id="placements" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <Reveal className="text-center">
        <h2 className="section-title">Placement Highlights</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Students have secured excellent offers including 38.5 Lakhs and 20.49 Lakhs packages across reputed companies.</p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {placementStats.map((stat) => (
          <Reveal key={stat.label} className="section-surface p-6 text-center">
            <p className="text-3xl font-extrabold text-rose-700 dark:text-rose-300"><CountUp value={stat.value} suffix={stat.suffix} /></p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            <div className="mt-3 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-1.5 rounded-full bg-rose-700" style={{ width: `${Math.min(Number(stat.value), 100)}%` }}></div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 section-surface overflow-hidden p-4">
        <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap">
          {marqueeText.map((name, idx) => (
            <span key={`${name}-${idx}`} className="mx-6 text-sm font-semibold text-slate-500 dark:text-slate-300">{name}</span>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          spaceBetween={14}
          slidesPerView={2}
          breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
        >
          {recruiterLogos.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="section-surface flex h-20 items-center justify-center p-4">
                <img src={item.logo} alt={item.name} className="h-10 w-auto object-contain" loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {placementStories.map((story) => (
          <Reveal key={story.name} className="section-surface p-6">
            <p className="text-sm font-semibold text-rose-700 dark:text-rose-300">{story.company} · {story.package}</p>
            <h3 className="mt-2 text-lg font-semibold">{story.name}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">“{story.quote}”</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 rounded-2xl bg-rose-800 p-6 text-white shadow-xl">
        <h3 className="text-xl font-bold">Our Campus Recruiters</h3>
        <p className="mt-2 text-sm text-rose-100">Trusted by leading technology, manufacturing, and engineering organizations for quality graduates.</p>
      </Reveal>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33%); } }`}</style>
    </section>
  );
}

export default Placements;
