import { Link } from 'react-router-dom';
import { eventItems } from '../data/content';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Reveal from './Reveal';

function Events() {
  return (
    <section id="events" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-8 text-center">
          <h2 className="section-title">Events & News</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Stay updated with workshops, placement drives, and campus events.</p>
        </Reveal>

        <Reveal>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {eventItems.map((item, index) => (
              <SwiperSlide key={item.title}>
                <Reveal delay={index * 0.06} className="section-surface overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
                  <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                  <div className="p-6">
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">{item.type}</span>
                    <h3 className="mt-3 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{item.date}</p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                    <Link to={`/events/${item.id}`} className="mt-4 inline-flex text-sm font-semibold text-rose-700 dark:text-rose-300">Read More →</Link>
                  </div>
                </Reveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}

export default Events;

