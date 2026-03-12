import { motion } from 'framer-motion';

function RecruiterCard({ company, onOpen }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400/40 via-blue-500/40 to-fuchsia-500/40 p-[1.5px]"
    >
      <button
        type="button"
        onClick={() => onOpen(company)}
        className="relative flex h-full w-full flex-col rounded-[1.45rem] border border-white/20 bg-white/10 p-5 text-left shadow-[0_20px_60px_-35px_rgba(15,23,42,0.9)] backdrop-blur-xl transition duration-300 hover:shadow-[0_30px_80px_-35px_rgba(59,130,246,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/25 blur-2xl opacity-70 transition duration-300 group-hover:opacity-100" />
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/40 bg-white/85 shadow-md"
        >
          <img
            src={company.logo}
            alt={company.name}
            className="h-11 w-auto object-contain"
            loading="lazy"
            onError={(event) => {
              if (company.logoFallback && event.currentTarget.src !== company.logoFallback) {
                event.currentTarget.src = company.logoFallback;
              }
            }}
          />
        </motion.div>

        <h4 className="mt-5 text-center text-base font-bold text-white">{company.name}</h4>

        <motion.span
          animate={{ boxShadow: ['0 0 0 rgba(56,189,248,0.0)', '0 0 16px rgba(56,189,248,0.45)', '0 0 0 rgba(56,189,248,0.0)'] }}
          transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-cyan-200/60 bg-cyan-400/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-50"
        >
          View Details
        </motion.span>
      </button>
    </motion.article>
  );
}

export default RecruiterCard;
