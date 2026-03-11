import News from '../components/News';
import Achievements from '../components/Achievements';
import Events from '../components/Events';

function ResearchPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-12">
        <h1 className="text-3xl font-bold">Research & Innovation</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">Explore research activities, funded projects, student achievements, and innovation initiatives at GCEE.</p>
      </div>
      <Achievements />
      <News />
      <Events />
    </main>
  );
}

export default ResearchPage;
