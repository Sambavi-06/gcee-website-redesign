import { Link, useParams } from 'react-router-dom';
import { deptData } from '../data/deptData';
import { departmentList } from '../data/content';
import Faculty from './Faculty';
import Reveal from './Reveal';

function DepartmentDetails() {
  const { departmentId } = useParams();
  const department = departmentList.find((item) => item.id === departmentId);
  const data = departmentId ? deptData[departmentId] : null;

  if (!department || !data) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Department not found</h1>
        <Link to="/departments" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 font-semibold text-white">Back to Departments</Link>
      </main>
    );
  }

  const facultyMembers = [data.hod, ...(data.staff || [])].filter(Boolean).slice(0, 8).map((item) => ({
    ...item,
    image: item.img,
    plainDetails: (item.details || '').replace(/<br\s*\/?>/gi, ' • ').replace(/<[^>]*>/g, '')
  }));
  const departmentAchievements = data.achievements || data.projects?.slice(0, 3).map((project) => project.title) || [];

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <img src={department.image} alt={department.name} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Department</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">{department.name}</h1>
          <p className="mt-4 max-w-3xl text-slate-200">{data.desc}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="section-surface p-8">
            <h2 className="section-title">Department Overview</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{data.desc}</p>
            {data.facilities_desc ? <p className="mt-4 text-slate-600 dark:text-slate-300">{data.facilities_desc}</p> : null}
          </Reveal>

          {data.hod ? (
            <Reveal className="section-surface p-8">
              <h3 className="text-xl font-bold">Head of Department</h3>
              <img src={data.hod.img} alt={data.hod.name} className="mt-5 h-28 w-28 rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900/30" />
              <h4 className="mt-4 text-lg font-semibold">{data.hod.name}</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">{data.hod.role}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{(data.hod.details || '').replace(/<br\s*\/?>/gi, ' • ').replace(/<[^>]*>/g, '')}</p>
            </Reveal>
          ) : null}
        </div>
      </section>

      <Faculty members={facultyMembers} title={`${department.name} Faculty`} subtitle="Faculty members and academic leaders associated with this department." />

      {data.projects?.length ? (
        <section className="bg-slate-100 py-16 dark:bg-slate-900/40 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal className="mb-8 text-center">
              <h2 className="section-title">Activities & Projects</h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {data.projects.map((project, index) => (
                <Reveal key={`${project.title}-${index}`} delay={index * 0.05} className="section-surface p-6">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{project.agency}</p>
                  <h3 className="mt-2 font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Amount: {project.amount} · Year: {project.year}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {data.labs?.length ? (
        <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <Reveal className="mb-8 text-center">
            <h2 className="section-title">Laboratories</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.labs.map((lab, index) => (
                <Reveal key={`${lab.img || lab}-${index}`} delay={index * 0.04} className="section-surface overflow-hidden p-0">
                  <img src={lab.img || lab} alt={`${department.name} lab ${index + 1}`} className="h-52 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{lab.name || `Laboratory ${index + 1}`}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{lab.description || 'Advanced practical learning facility supporting curriculum and project activities.'}</p>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Equipment: {lab.equipment || 'Domain-specific equipment, measurement tools, and modern computing systems.'}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Research: {lab.research || 'Student mini-projects, final year projects, and applied technical experimentation.'}</p>
                  </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

        {departmentAchievements.length ? (
          <section className="bg-slate-100 py-16 dark:bg-slate-900/40 md:py-24">
            <div className="mx-auto max-w-7xl px-4">
              <Reveal className="mb-8 text-center">
                <h2 className="section-title">Achievements</h2>
              </Reveal>
              <div className="grid gap-4 md:grid-cols-3">
                {departmentAchievements.map((achievement, index) => (
                  <Reveal key={`${achievement}-${index}`} delay={index * 0.06} className="section-surface p-5">
                    <p className="text-sm font-semibold text-rose-700 dark:text-rose-300">Achievement {index + 1}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{achievement}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}
    </main>
  );
}

export default DepartmentDetails;
