import campus from '../assets/images/campus.jpg';
import Reveal from './Reveal';

const markers = [
  { name: 'Central Library', top: '38%', left: '30%' },
  { name: 'Hostel', top: '56%', left: '22%' },
  { name: 'Labs', top: '46%', left: '49%' },
  { name: 'Auditorium', top: '34%', left: '58%' },
  { name: 'Sports Complex', top: '62%', left: '67%' }
];

function Map() {
  return (
    <section id="campus-map" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <Reveal className="mb-8 text-center">
        <h2 className="section-title">Interactive Campus Map</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Locate key facilities and navigate the campus environment quickly.</p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <img src={campus} alt="GCEE Campus Map" className="h-[460px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
          {markers.map((marker) => (
            <button
              key={marker.name}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: marker.top, left: marker.left }}
              aria-label={marker.name}
            >
              <span className="grid h-4 w-4 place-items-center rounded-full bg-rose-600 ring-4 ring-white/80"></span>
              <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-md bg-rose-900 px-2 py-1 text-[10px] font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {marker.name}
              </span>
            </button>
          ))}
        </Reveal>

        <Reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-rose-800 dark:text-rose-300">Map Legend</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {markers.map((marker) => (
              <li key={marker.name} className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-rose-600"></span>
                {marker.name}
              </li>
            ))}
          </ul>
          <a
            href="https://www.google.com/maps?q=Government%20College%20of%20Engineering%20Erode&output=embed"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-rose-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600"
          >
            Open Full Map
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Map;
