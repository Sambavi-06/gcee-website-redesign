import { administrationItems } from '../data/content';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const administrationAccents = ['from-blue-500 via-cyan-500 to-sky-500', 'from-indigo-500 via-blue-500 to-cyan-500', 'from-sky-500 via-blue-500 to-violet-500'];

const getPrimaryContact = (value = '') => value.split(',')[0]?.trim() || value;

const getDialLink = (value = '') => {
  const match = value.match(/\+?\d[\d\s-]*/);
  return match ? `tel:${match[0].replace(/\s+/g, '')}` : null;
};

function Administration() {
  return (
    <section id="administration" className="overflow-hidden bg-slate-100 py-16 dark:bg-slate-900/40 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm backdrop-blur dark:border-blue-900/50 dark:bg-slate-900/70 dark:text-blue-200">
            Administration Support
          </span>
          <h2 className="section-title">Administration</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Administrative support structure aligned to academics, admissions, examinations, and student services.</p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {administrationItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="relative min-w-[82%] snap-start overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.45)] transition-all duration-300 hover:shadow-[0_30px_80px_-36px_rgba(59,130,246,0.45)] dark:border-slate-800 dark:bg-slate-900 sm:min-w-[47%] lg:min-w-[31%] xl:min-w-[24%]"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${administrationAccents[index % administrationAccents.length]}`} />
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{item.title}</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">{getPrimaryContact(item.value)}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl shadow-inner dark:bg-blue-950/40">
                    📞
                  </div>
                </div>

                {item.value !== getPrimaryContact(item.value) ? (
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Also available: {item.value.replace(`${getPrimaryContact(item.value)},`, '').trim()}</p>
                ) : null}

                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>

                {getDialLink(item.value) ? (
                  <a
                    href={getDialLink(item.value)}
                    className="mt-6 inline-flex w-fit items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700"
                  >
                    Contact Office
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Administration;
