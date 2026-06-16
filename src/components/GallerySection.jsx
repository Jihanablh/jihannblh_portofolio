import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ImageIcon, X } from 'lucide-react';

const fallbackImage = '/images_projects_data_analis/BI_Gojek/Dashboard_BI_Gojek.png';

const RevealOnScroll = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function GallerySection({ projects = [] }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const galleryItems = useMemo(
    () =>
      projects
        .flatMap((project) =>
          (project.images?.length ? project.images : [fallbackImage]).slice(0, 2).map((image, imageIndex) => ({
            title: project.title,
            category: project.category,
            image,
            key: `${project.title}-${imageIndex}`,
          })),
        )
        .slice(0, 8),
    [projects],
  );

  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <section id="gallery" className="mx-auto mt-20 mb-20 max-w-6xl scroll-mt-28 px-4 sm:px-6">
      <RevealOnScroll>
        <div className="mb-12 flex flex-col">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-pink-200">
            <ImageIcon size={14} />
            Gallery
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-pink-300 bg-clip-text text-transparent">
              Visual archive of dashboards and systems
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A compact gallery of dashboard previews, system diagrams, and portfolio visuals.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((item, index) => (
          <RevealOnScroll
            key={item.key}
            delay={index * 70}
            className={`h-full ${index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group relative h-full w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-left shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_0_42px_rgba(59,130,246,0.14)]"
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-xl">
                  {item.category}
                </span>
                <h3 className="mt-3 line-clamp-2 text-lg font-bold text-white">{item.title}</h3>
              </div>
            </button>
          </RevealOnScroll>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close gallery preview"
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          />
          <div className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
            <button
              type="button"
              aria-label="Close gallery preview"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/50 p-2 text-white backdrop-blur-md transition hover:bg-red-500"
            >
              <X size={20} />
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} className="max-h-[78vh] w-full object-contain bg-slate-950" />
            <div className="border-t border-white/10 p-5">
              <p className="text-sm font-bold text-blue-200">{selectedItem.category}</p>
              <h3 className="mt-1 text-2xl font-bold text-white">{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
