import { Link } from 'react-router-dom';
import { recentNews } from '../data/content';
import Reveal from './Reveal';

function News() {
  return (
    <section id="news" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-8 text-center">
          <h2 className="section-title">From Our News Room</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Recent announcements, institutional developments, and student success highlights from GCEE.</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {recentNews.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="section-surface overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
              <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.date}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                <Link to={item.link} className="mt-4 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500">
                  Read More
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
