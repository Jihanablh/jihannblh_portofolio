import React from 'react';

export default function SkillsSection({ skills }) {
  
  const topRow = skills.filter((_, i) => i % 2 === 0);
  const bottomRow = skills.filter((_, i) => i % 2 !== 0);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-12 relative z-10 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Skills & <span className="text-blue-500">Expertise</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg">
          A continuous loop of my technical stack, tools, and methodologies.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10 w-full">
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
        className={`flex gap-6 py-2 animate-marquee-${direction} group-hover:[animation-play-state:paused]`}
        style={{ 
          animationDuration: speed,
        }}
      >
        {duplicatedItems.map((skill, index) => (
          <div 
            key={index}
            className="
              relative flex items-center gap-3 px-6 py-3
              bg-white/5 border border-white/10 rounded-full
              hover:bg-blue-500/10 hover:border-blue-500/50 
              transition-all duration-300 cursor-default whitespace-nowrap group/item
            "
          >
            <div className={`${skill.color} opacity-80 group-hover/item:opacity-100 transition-opacity`}>
              {React.cloneElement(skill.icon, { size: 18 })}
            </div>
            
            <span className="text-slate-300 font-medium text-sm sm:text-base tracking-wide group-hover/item:text-white transition-colors">
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