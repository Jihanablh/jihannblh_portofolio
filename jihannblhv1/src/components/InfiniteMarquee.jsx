import React from 'react';

export default function InfiniteMarquee({ items, reverse = false, speed = '34s' }) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="group relative overflow-x-hidden overflow-y-visible">
      <div
        className={`flex w-max items-center gap-7 whitespace-nowrap py-3 leading-none ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {repeatedItems.map((item, index) => (
          <React.Fragment key={`${item}-${index}`}>
            <span className="font-display text-2xl font-black text-slate-100 sm:text-4xl">
              {item}
            </span>
            <span className="font-display text-2xl font-black text-blue-400 sm:text-4xl">+</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
