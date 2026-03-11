import Departments from '../components/Departments';
import Faculty from '../components/Faculty';

function DepartmentsPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-12">
        <h1 className="text-3xl font-bold">Departments Overview</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">Explore all core engineering departments with modern facilities, experienced faculty, and program-specific strengths.</p>
      </div>
      <Departments />
      <Faculty />
    </main>
  );
}

export default DepartmentsPage;
