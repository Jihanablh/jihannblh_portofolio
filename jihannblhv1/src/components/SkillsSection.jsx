import { Code } from 'lucide-react';
import InfiniteMarquee from './InfiniteMarquee';

export default function SkillsSection({ skills = [] }) {
  const marqueeItems = skills.flatMap((category) => category.items);
  const midpoint = Math.ceil(marqueeItems.length / 2);
  const topRow = marqueeItems.slice(0, midpoint);
  const bottomRow = marqueeItems.slice(midpoint);

  return (
    <section id="skills" className="relative mt-24 mb-28 w-full scroll-mt-28 overflow-visible py-8">
      <div className="mx-auto mb-12 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col">
          <h2 className="flex items-center gap-4 font-display text-3xl font-bold text-white sm:text-4xl">
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-3 shadow-lg shadow-blue-900/20">
              <Code className="text-blue-400" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A balanced view of my technical stack, analytical tools, and business-oriented working methods.
          </p>
        </div>
      </div>

      <div className="relative grid w-full gap-7 overflow-visible py-6">
        <div className="-rotate-1 border-y border-blue-400/20 bg-slate-900/80 py-5 shadow-[0_0_42px_rgba(59,130,246,0.14)] backdrop-blur-xl">
          <InfiniteMarquee items={topRow} speed="42s" />
        </div>
        <div className="translate-y-1 rotate-1 border-y border-pink-400/20 bg-slate-900/70 py-5 shadow-[0_0_42px_rgba(236,72,153,0.12)] backdrop-blur-xl">
          <InfiniteMarquee items={bottomRow} reverse speed="46s" />
        </div>
      </div>
    </section>
  );
}
