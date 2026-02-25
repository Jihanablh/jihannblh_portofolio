import React from 'react';

export default function SkillsSection({ skills }) {
  
  const topRow = skills.filter((_, i) => i % 2 === 0);
  const bottomRow = skills.filter((_, i) => i % 2 !== 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 relative z-10 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Skills & <span className="text-blue-500">Expertise</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
          A continuous loop of my technical stack, tools, and methodologies.
        </p>
      </div>

      <div className="flex flex-col gap-8 relative z-10 w-full">
        <MarqueeRow items={topRow} direction="left" speed="45s" />
        <MarqueeRow items={bottomRow} direction="right" speed="50s" />
      </div>

    </section>
  );
}

function MarqueeRow({ items, direction = "left", speed = "30s" }) {
  
  const allSkillsInRow = items.flatMap(category => category.items.map(skillName => ({
    name: skillName,
    icon: category.icon, 
    color: category.iconColor 
  })));

  const duplicatedItems = [...allSkillsInRow, ...allSkillsInRow, ...allSkillsInRow]; 

  return (
    <div className="relative flex overflow-hidden group">
      <div 
        className={`flex gap-4 sm:gap-6 py-4 animate-marquee-${direction} group-hover:[animation-play-state:paused]`}
        style={{ 
          animationDuration: speed,
        }}
      >
        {duplicatedItems.map((skill, index) => (
          <div 
            key={index}
            className="
              relative flex items-center gap-3 px-5 py-3
              bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl
              hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-1 hover:scale-105
              transition-all duration-300 cursor-default whitespace-nowrap group/item
            "
          >
            <div className={`p-1.5 rounded-lg bg-white/5 border border-white/5 ${skill.color} group-hover/item:bg-blue-500/10 transition-colors`}>
              {React.cloneElement(skill.icon, { size: 18 })}
            </div>
            
            <span className="text-slate-300 font-semibold text-sm sm:text-base tracking-wide group-hover/item:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); } 
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: scrollLeft linear infinite;
        }
        .animate-marquee-right {
          animation: scrollRight linear infinite;
        }
      `}</style>
    </div>
  );
}