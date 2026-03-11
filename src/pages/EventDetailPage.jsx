import { Link, useParams } from 'react-router-dom';
import { eventItems } from '../data/content';
import Reveal from '../components/Reveal';

function EventDetailPage() {
  const { eventId } = useParams();
  const event = eventItems.find((item) => item.id === eventId);

  if (!event) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Event not found</h1>
        <Link to="/events" className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 font-semibold text-white">Back to Events</Link>
      </main>
    );
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4">
          <p className="text-sm uppercase tracking-[0.2em] text-rose-300">{event.type}</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">{event.title}</h1>
          <p className="mt-3 text-slate-200">{event.date}</p>
          <p className="mt-4 max-w-3xl text-slate-200">{event.fullDescription}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <Reveal className="section-surface p-8">
          <h2 className="section-title">Event Highlights</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {event.highlights.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {item}
              </li>
            ))}
          </ul>
          <Link to="/events" className="mt-8 inline-flex rounded-full bg-rose-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-600">
            Back to Events & News
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

export default EventDetailPage;
