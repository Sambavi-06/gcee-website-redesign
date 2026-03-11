import { useMemo, useState } from 'react';
import { galleryCategories } from '../data/content';
import Reveal from './Reveal';

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);
  const [category, setCategory] = useState('campus');
  const categories = useMemo(() => Object.keys(galleryCategories), []);
  const activeCategoryImages = galleryCategories[category]?.images || [];

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <Reveal className="mb-8 text-center">
        <h2 className="section-title">Campus Gallery</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Explore campus spaces, events, and academic life.</p>
      </Reveal>

      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${category === item ? 'bg-rose-800 text-white' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}
          >
            {galleryCategories[item]?.label || item}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {activeCategoryImages.map((image, index) => (
          <Reveal key={`${image}-${index}`} className="mb-4 break-inside-avoid">
            <button onClick={() => setActiveImage(image)} className="group section-surface relative block w-full overflow-hidden p-0">
              <img src={image} alt={`Gallery ${index + 1}`} className={`w-full object-cover transition duration-500 group-hover:scale-110 ${index % 4 === 0 ? 'h-64' : index % 3 === 0 ? 'h-56' : 'h-44'}`} />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 to-transparent p-3 text-xs font-semibold tracking-wide text-white opacity-0 transition group-hover:opacity-100">
                Click to view
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Preview" className="max-h-[90vh] max-w-5xl rounded-xl border border-white/20 shadow-2xl" />
        </div>
      )}
    </section>
  );
}

export default Gallery;

