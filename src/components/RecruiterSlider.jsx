function RecruiterSlider({ companies }) {
  const sliderItems = [...companies, ...companies];

  return (
    <div className="group mt-7 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/50 p-3">
      <div className="flex w-max animate-[recruiter-scroll_24s_linear_infinite] gap-3 group-hover:[animation-play-state:paused]">
        {sliderItems.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex min-w-[170px] items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90">
              <img
                src={company.logo}
                alt={company.name}
                className="h-5 w-auto object-contain"
                loading="lazy"
                onError={(event) => {
                  if (company.logoFallback && event.currentTarget.src !== company.logoFallback) {
                    event.currentTarget.src = company.logoFallback;
                  }
                }}
              />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.09em] text-cyan-50">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecruiterSlider;
