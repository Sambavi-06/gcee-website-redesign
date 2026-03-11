import Events from '../components/Events';
import News from '../components/News';

function EventsPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-12">
        <h1 className="text-3xl font-bold">Events & News</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">Browse upcoming events, workshops, symposiums, and recent official news from campus.</p>
      </div>
      <News />
      <Events />
    </main>
  );
}

export default EventsPage;
