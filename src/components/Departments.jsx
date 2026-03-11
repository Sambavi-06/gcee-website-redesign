import { Link } from 'react-router-dom';
import { departmentList } from '../data/content';
import Reveal from './Reveal';

function Departments() {
  return (
    <section id="departments" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center">
          <h2 className="section-title">Departments</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Industry-aligned engineering disciplines with strong academic and practical foundation.</p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departmentList.map((dept, index) => (
            <Reveal key={dept.id} delay={index * 0.06} className="section-surface group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
              <img src={dept.image} alt={dept.name} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5">
                <p className="text-2xl">{dept.icon}</p>
                <h3 className="mt-2 text-lg font-semibold">{dept.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{dept.shortDescription}</p>
                <Link to={`/departments/${dept.id}`} className="mt-4 inline-flex rounded-full bg-rose-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700">
                  View Department
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Departments;
