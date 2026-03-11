import { Link, useParams } from 'react-router-dom';
import { achievementDetails } from '../data/content';
import Reveal from '../components/Reveal';

function AchievementDetailPage() {
  const { achievementId } = useParams();
  const achievement = achievementDetails[achievementId];

  if (!achievement) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Achievement page not found</h1>
        <Link to="/placements" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 font-semibold text-white">Back to Placements</Link>
      </main>
    );
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative mx-auto max-w-7xl px-4">
          <p className="text-sm uppercase tracking-[0.2em] text-rose-300">Achievements</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">{achievement.title}</h1>
          <p className="mt-4 max-w-3xl text-slate-200">{achievement.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <Reveal className="section-surface p-8">
          <h2 className="section-title">Key Highlights</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {achievement.highlights.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <Link to="/placements" className="mt-8 inline-flex rounded-full bg-rose-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-600">
            Back to Placements & Achievements
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

export default AchievementDetailPage;
