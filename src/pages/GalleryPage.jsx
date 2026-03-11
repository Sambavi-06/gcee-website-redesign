import Gallery from '../components/Gallery';

function GalleryPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pb-2 pt-12">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">Campus spaces, student activities, labs, events, and cultural moments across GCEE.</p>
      </div>
      <Gallery />
    </main>
  );
}

export default GalleryPage;
