import About from '../components/About';
import Administration from '../components/Administration';
import Faculty from '../components/Faculty';

function AboutPage({ mode }) {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-12">
        <h1 className="text-3xl font-bold">{mode === 'administration' ? 'Administration' : 'About GCEE'}</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          Learn about the institution, its legacy, governance, academic environment, and the support structure behind Government College of Engineering, Erode.
        </p>
      </div>
      <About />
      <Administration />
      <Faculty />
    </main>
  );
}

export default AboutPage;
