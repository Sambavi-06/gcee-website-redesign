import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RecruiterCard from './RecruiterCard';
import CompanyModal from './CompanyModal';
import RecruiterSlider from './RecruiterSlider';
import { companyData, companyFilters } from '../data/companyData';

const categoryMap = {
  'Product Companies': 'Product',
  'Service Companies': 'Service',
  'Core Companies': 'Core'
};

function RecruiterSection() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState(null);

  const filteredCompanies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const targetCategory = categoryMap[activeFilter] || null;

    return companyData.filter((company) => {
      const matchesQuery = !normalizedQuery || company.name.toLowerCase().includes(normalizedQuery);
      const matchesCategory = !targetCategory || company.category === targetCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeFilter]);

  return (
    <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-5 md:p-7">
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-14 top-6 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.07, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 0.8 }}
        className="pointer-events-none absolute -right-16 bottom-8 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl"
      />

      <div className="relative">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Recruiter Companies
            </p>
            <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">Placement Companies</h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">Explore premium recruiters, filter by company type, and open detailed hiring insights used in top placement portals.</p>
          </div>

          <div className="w-full lg:w-[300px]">
            <label htmlFor="recruiter-search" className="sr-only">Search recruiter</label>
            <input
              id="recruiter-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search recruiter..."
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300/80 outline-none backdrop-blur transition focus:border-cyan-300"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {companyFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                activeFilter === filter
                  ? 'bg-cyan-400 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.5)]'
                  : 'border border-white/20 bg-white/10 text-slate-200 hover:border-cyan-300/70'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <RecruiterSlider companies={companyData} />

        <motion.div layout className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence>
            {filteredCompanies.map((company) => (
              <RecruiterCard key={company.name} company={company} onOpen={setSelectedCompany} />
            ))}
          </AnimatePresence>
        </motion.div>

        {!filteredCompanies.length ? (
          <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-6 text-center text-sm text-slate-200">
            No recruiters found for your search/filter.
          </div>
        ) : null}
      </div>

      <CompanyModal company={selectedCompany} onClose={() => setSelectedCompany(null)} />
    </section>
  );
}

export default RecruiterSection;
