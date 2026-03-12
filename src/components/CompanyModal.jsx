import { AnimatePresence, motion } from 'framer-motion';

function CompanyModal({ company, onClose }) {
  return (
    <AnimatePresence>
      {company ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 26, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 text-slate-100 shadow-[0_35px_95px_-40px_rgba(34,211,238,0.55)] md:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-sm font-semibold text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200"
              aria-label="Close company details"
            >
              ✕
            </button>

            <div className="flex flex-col gap-4 border-b border-slate-700 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/90">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-10 w-auto object-contain"
                    loading="lazy"
                    onError={(event) => {
                      if (company.logoFallback && event.currentTarget.src !== company.logoFallback) {
                        event.currentTarget.src = company.logoFallback;
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{company.name}</h3>
                  <p className="mt-1 text-sm text-cyan-200">{company.industry}</p>
                </div>
              </div>
              <div className="rounded-full bg-cyan-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-100">
                Placement Partner
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200">About the Company</h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">{company.about}</p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200">Recruitment at Campus</h4>
                <p className="mt-3 text-sm text-slate-300">Usually visits in: <span className="font-semibold text-white">{company.visitMonth}</span></p>
                <p className="mt-2 text-sm text-slate-300">Average Package: <span className="font-semibold text-white">{company.avgPackage}</span></p>
                <p className="mt-2 text-sm text-slate-300">Highest Package: <span className="font-semibold text-white">{company.highestPackage}</span></p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200">Skills Expected from Students</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {company.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200">Roles Offered</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {company.roles.map((role) => (
                    <li key={role} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200">Hiring Process</h4>
              <ol className="mt-3 space-y-2 text-sm text-slate-300">
                {company.hiringProcess.map((step, index) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/30 text-[11px] font-semibold text-cyan-100">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default CompanyModal;
