import { administrationItems } from '../data/content';
import Reveal from './Reveal';

function Administration() {
  return (
    <section id="administration" className="bg-slate-100 py-16 dark:bg-slate-900/40 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-8 text-center">
          <h2 className="section-title">Administration</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Administrative support structure aligned to academics, admissions, examinations, and student services.</p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {administrationItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">{item.title}</p>
              <h3 className="mt-2 text-2xl font-bold">{item.value}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Administration;
