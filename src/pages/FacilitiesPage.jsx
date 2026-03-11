import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';

function FacilitiesPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-12">
        <h1 className="text-3xl font-bold">Facilities & Campus Life</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">A complete view of student support systems, academic infrastructure, and campus environments at GCEE.</p>
      </div>
      <Facilities />
      <Gallery />
    </main>
  );
}

export default FacilitiesPage;
