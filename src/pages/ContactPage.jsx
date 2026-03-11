import Contact from '../components/Contact';

function ContactPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-12">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">Official address, email, telephone contacts, anti-ragging information, and map location for GCEE.</p>
      </div>
      <Contact />
    </main>
  );
}

export default ContactPage;