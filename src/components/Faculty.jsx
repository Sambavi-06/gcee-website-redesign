import { motion } from 'framer-motion';
import { departmentList } from '../data/content';
import { deptData } from '../data/deptData';
import Reveal from './Reveal';

const stripHtml = (value = '') => value.replace(/<br\s*\/?>/gi, ' • ').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const normalizeFacultyMember = (member, department) => ({
  ...member,
  department: member.department || department || 'Faculty',
  image: member.image || member.img,
  plainDetails: member.plainDetails || stripHtml(member.details || '')
});

const getAllFacultyMembers = () => departmentList.flatMap((department) => {
  const data = deptData[department.id];
  if (!data) return [];

  return [data.hod, ...(data.staff || [])]
    .filter(Boolean)
    .map((member) => normalizeFacultyMember(member, department.name));
});

const getDepartmentMembersFromTitle = (title) => {
  if (!title?.endsWith(' Faculty')) return null;

  const departmentName = title.replace(/ Faculty$/, '');
  const department = departmentList.find((item) => item.name === departmentName);
  if (!department) return null;

  const data = deptData[department.id];
  if (!data) return null;

  return [data.hod, ...(data.staff || [])]
    .filter(Boolean)
    .map((member) => normalizeFacultyMember(member, department.name));
};

const getProfileHref = (member) => member.profileLink || member.link || member.image || member.img || null;

function Faculty({ members, title = 'Faculty & Administration', subtitle = 'Experienced educators and leaders driving student success.' }) {
  const sourceMembers = getDepartmentMembersFromTitle(title) || members || getAllFacultyMembers();

  const groupedFaculty = sourceMembers.reduce((acc, member) => {
    const normalizedMember = normalizeFacultyMember(member, member.department);
    const key = normalizedMember.department || 'Faculty';

    if (!acc[key]) acc[key] = [];

    acc[key].push(normalizedMember);
    return acc;
  }, {});

  const groupEntries = Object.entries(groupedFaculty);

  return (
    <section id="faculty" className="overflow-hidden bg-gradient-to-b from-white via-rose-50/40 to-white py-16 dark:from-slate-950 dark:via-rose-950/10 dark:to-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-rose-700 shadow-sm backdrop-blur dark:border-rose-900/50 dark:bg-slate-900/70 dark:text-rose-200">
            Faculty Directory
          </span>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{subtitle}</p>
        </Reveal>

        <div className="space-y-10">
          {groupEntries.map(([group, groupMembers], groupIndex) => (
            <Reveal key={group} delay={groupIndex * 0.05} className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.38)] backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/70 md:p-7">
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  {group !== 'Faculty' ? <h3 className="text-xl font-semibold text-rose-800 dark:text-rose-200">{group}</h3> : <h3 className="text-xl font-semibold text-rose-800 dark:text-rose-200">Featured Faculty</h3>}
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{groupMembers.length} academic professional{groupMembers.length > 1 ? 's' : ''} showcased in a smooth horizontal faculty carousel.</p>
                </div>
                <div className="inline-flex w-fit rounded-full bg-rose-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:bg-rose-950/40 dark:text-rose-200">
                  Scroll to explore
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.04 }}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {groupMembers.map((member, index) => {
                  const profileHref = getProfileHref(member);

                  return (
                    <motion.article
                      key={`${group}-${member.name}-${index}`}
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="group relative min-w-[78%] snap-start overflow-hidden rounded-[1.75rem] border border-rose-100 bg-gradient-to-br from-white via-rose-50/70 to-blue-50/80 p-5 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.5)] transition-all duration-300 hover:shadow-[0_28px_70px_-32px_rgba(225,29,72,0.35)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 sm:min-w-[46%] lg:min-w-[31%] xl:min-w-[23%]"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-blue-500 opacity-80" />
                      <div className="flex h-full flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-rose-200/70 blur-xl dark:bg-rose-900/30" />
                            <img
                              src={member.image}
                              alt={member.name}
                              className="relative h-20 w-20 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-slate-900 sm:h-24 sm:w-24"
                            />
                          </div>
                          <div className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-700 shadow-sm dark:bg-slate-800/90 dark:text-rose-200">
                            Faculty
                          </div>
                        </div>

                        <div className="mt-5 flex-1">
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h4>
                          <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{member.role}</p>
                          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:text-rose-300">{member.department}</p>
                          {member.plainDetails ? (
                            <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{member.plainDetails}</p>
                          ) : null}
                        </div>

                        {profileHref ? (
                          <a
                            href={profileHref}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex w-fit items-center rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rose-700 transition duration-300 group-hover:border-rose-300 group-hover:bg-rose-50 dark:border-rose-900/70 dark:bg-slate-800 dark:text-rose-200 dark:group-hover:bg-slate-800/80"
                          >
                            View Profile
                          </a>
                        ) : null}
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;

