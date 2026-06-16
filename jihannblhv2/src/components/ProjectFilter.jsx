export default function ProjectFilter({ categories, projects, active, onChange }) {
  return (
    <div className="mb-10 flex gap-3 overflow-x-auto pb-3 hide-scrollbar">
      {categories.map((category) => {
        const count = category === 'All' ? projects.length : projects.filter((project) => project.filterGroups?.includes(category) || project.category === category).length;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`shrink-0 rounded-full border px-5 py-3 text-sm font-bold transition ${
              active === category
                ? 'border-cyanx bg-cyanx text-midnight shadow-glow'
                : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyanx/50 hover:text-white'
            }`}
          >
            {category}
            <span className={`ml-2 rounded-full px-2 py-0.5 text-[11px] ${active === category ? 'bg-midnight/10' : 'bg-white/10'}`}>{count}</span>
          </button>
        );
      })}
    </div>
  );
}
