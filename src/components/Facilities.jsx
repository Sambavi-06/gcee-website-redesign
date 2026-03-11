import { facilities } from '../data/content';
import Reveal from './Reveal';

function Facilities() {
  return (
    <section id="facilities" className="bg-slate-100 py-16 dark:bg-slate-900/40 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center">
          <h2 className="section-title">Campus Facilities</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Modern infrastructure that supports academics, innovation, and student life.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
              <div className="p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
