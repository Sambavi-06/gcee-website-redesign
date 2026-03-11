import { Link } from 'react-router-dom';
import { achievements } from '../data/content';
import Reveal from './Reveal';

function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <Reveal className="mb-8 text-center">
        <h2 className="section-title">Student Achievements</h2>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item) => (
          <Reveal key={item.id} className="section-surface p-5 text-sm">
            <h3 className="font-semibold">🏆 {item.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{item.description}</p>
            <Link to={item.link} className="mt-3 inline-flex rounded-full bg-rose-700 px-4 py-2 font-semibold text-white transition hover:bg-rose-600">Explore</Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
