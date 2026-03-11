import { facultyHighlights } from '../data/content';
import Reveal from './Reveal';

function Faculty({ members = facultyHighlights, title = 'Faculty & Administration', subtitle = 'Experienced educators and leaders driving student success.' }) {
  const groupedFaculty = members.reduce((acc, member) => {
    const key = member.department || 'Faculty';
    if (!acc[key]) acc[key] = [];
    acc[key].push(member);
    return acc;
  }, {});

  const groupEntries = Object.entries(groupedFaculty);

  return (
    <section id="faculty" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <Reveal className="mb-8 text-center">
        <h2 className="section-title">{title}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{subtitle}</p>
      </Reveal>
      <div className="space-y-10">
        {groupEntries.map(([group, groupMembers]) => (
          <div key={group}>
            {group !== 'Faculty' ? <h3 className="mb-4 text-lg font-semibold text-rose-800 dark:text-rose-300">{group}</h3> : null}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {groupMembers.map((member, index) => (
                <Reveal key={`${group}-${member.name}`} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <img src={member.image} alt={member.name} className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-rose-100 dark:ring-rose-900/30" />
                  <h4 className="mt-4 font-semibold">{member.name}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{member.role}</p>
                  {member.department ? <p className="mt-2 text-xs font-medium text-rose-700 dark:text-rose-300">{member.department}</p> : null}
                  {index < 6 && member.plainDetails ? <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{member.plainDetails.slice(0, 90)}...</p> : null}
                  <a href={member.image} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-700 transition hover:bg-rose-50 dark:border-rose-900 dark:text-rose-300 dark:hover:bg-rose-950/30">View Profile</a>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faculty;

