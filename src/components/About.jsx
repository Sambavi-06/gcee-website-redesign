import campus from '../assets/images/campus.jpg';
import Reveal from './Reveal';

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <Reveal className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-300">About GCEE</p>
          <h2 className="section-title">A Legacy of <span className="gradient-text">Excellence</span></h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Established in 1984 under the Institute of Road and Transport by the Tamil Nadu State Transport Corporation, the college came under the Directorate of Technical Education in 2021 and was renamed Government College of Engineering, Erode.
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Affiliated to Anna University, the institution is located on a sprawling 200-acre campus between Chithode and Bhavani. It is known for academic excellence, modern laboratories, qualified faculty, research activities, and strong placements.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <li>✅ Highly qualified faculty and mentors</li>
            <li>✅ Well-equipped laboratories and innovation spaces</li>
            <li>✅ Zonal Headquarters for Zone-XI of Anna University</li>
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300">Vision</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">To evolve as a globally respected engineering institution driven by excellence, innovation, and social responsibility.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold text-rose-800 dark:text-rose-300">Mission</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Deliver quality education, advance applied research, and build industry-ready engineers with ethical values.</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xl dark:border-slate-800">
          <img src={campus} alt="GCEE Campus" className="h-[420px] w-full object-cover transition duration-700 hover:scale-105" />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          { title: 'Excellence in Engineering', icon: '🎓', text: 'Outcome-driven engineering education with strong academic discipline.' },
          { title: 'Research & Innovation', icon: '🔬', text: 'Encouraging student projects, publications, and funded initiatives.' },
          { title: 'Industry Collaboration', icon: '🤝', text: 'Industry-oriented training, placements, and professional mentoring.' }
        ].map((item) => (
          <Reveal key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <p className="text-2xl">{item.icon}</p>
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default About;
