import Placements from '../components/Placements';
import Achievements from '../components/Achievements';

function PlacementPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-12">
        <h1 className="text-3xl font-bold">Placements & Outcomes</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">Placement success stories, recruiters, student achievements, and industry engagement highlights.</p>
      </div>
      <Placements />
      <Achievements />
    </main>
  );
}

export default PlacementPage;
