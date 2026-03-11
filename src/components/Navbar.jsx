import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { departmentList } from '../data/content';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('gcee-theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('gcee-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/research', label: 'Research' },
    { to: '/departments', label: 'Departments' },
    { to: '/facilities', label: 'Facilities' },
    { to: '/placements', label: 'Placements' },
    { to: '/events', label: 'Events / News' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-rose-800 text-sm font-bold text-white shadow-md">G</span>
          <span>
            <span className="block text-lg font-extrabold tracking-tight text-rose-900 dark:text-rose-300">GCEE</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Government College of Engineering, Erode</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <div className="group relative">
            <button className="text-sm font-medium text-slate-700 transition hover:text-rose-700 dark:text-slate-200">Academics ▾</button>
            <div className="pointer-events-none absolute left-1/2 top-10 w-[720px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:text-rose-300">Departments</p>
                  <div className="mt-3 grid gap-2">
                    {departmentList.map((dept) => (
                      <Link key={dept.id} to={`/departments/${dept.id}`} className="text-sm text-slate-700 transition hover:text-rose-700 dark:text-slate-200">
                        {dept.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:text-rose-300">Academic Paths</p>
                  <div className="mt-3 grid gap-2">
                    <Link to="/research" className="text-sm text-slate-700 transition hover:text-rose-700 dark:text-slate-200">Research & Innovation</Link>
                    <Link to="/placements" className="text-sm text-slate-700 transition hover:text-rose-700 dark:text-slate-200">Placements & Career Support</Link>
                    <Link to="/facilities" className="text-sm text-slate-700 transition hover:text-rose-700 dark:text-slate-200">Labs & Infrastructure</Link>
                    <Link to="/events" className="text-sm text-slate-700 transition hover:text-rose-700 dark:text-slate-200">Workshops & Symposiums</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) => `text-sm font-medium transition hover:text-rose-700 dark:text-slate-200 ${isActive ? 'text-rose-700 dark:text-rose-300' : 'text-slate-700'}`}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setDark((prev) => !prev)}
            className="rounded-full border border-slate-300 px-3 py-1 text-sm hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        <button className="rounded-md border border-slate-300 p-2 md:hidden dark:border-slate-700" onClick={() => setOpen((prev) => !prev)} aria-label="Menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="space-y-3 border-t border-slate-200 px-4 py-4 md:hidden dark:border-slate-800">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:text-rose-300">Departments</p>
            <div className="grid gap-1 pb-2">
              {departmentList.map((dept) => (
                <NavLink key={dept.id} to={`/departments/${dept.id}`} onClick={() => setOpen(false)} className="block text-sm text-slate-700 dark:text-slate-200">
                  {dept.name}
                </NavLink>
              ))}
            </div>
          </div>
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setDark((prev) => !prev)}
            className="rounded-full border border-slate-300 px-3 py-1 text-sm dark:border-slate-700"
          >
            {dark ? 'Switch to Light' : 'Switch to Dark'}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

