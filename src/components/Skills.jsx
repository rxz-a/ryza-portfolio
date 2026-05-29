import React from 'react';
import { Monitor, Server, Wifi, Users } from 'lucide-react';

export default function Skills({ darkMode }) {
  const skillCategories = [
    {
      category: "Frontend Dev",
      items: [
        { name: "HTML5", level: "Intermediate" },
        { name: "CSS3", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Familiar" },
        { name: "JavaScript", level: "Intermediate" },
      ]
    },
    {
      category: "Backend Dev",
      items: [
        { name: "PHP", level: "Intermediate" },
        { name: "Laravel", level: "Familiar" },
        { name: "MySQL", level: "Intermediate" },
      ]
    },
    {
      category: "Networking",
      items: [
        { name: "Cisco Packet Tracer", level: "Proficient" },
        { name: "Topology Design", level: "Intermediate" },
        { name: "Routing Protocols", level: "Intermediate" },
      ]
    },
    {
      category: "Personal Skills",
      badges: true,
      items: [
        { name: "Communication" },
        { name: "Public Speaking" },
        { name: "Team Collaboration" },
        { name: "Adaptability" },
        { name: "Time Management" },
        { name: "Active Listener" },
      ]
    }
  ];

  const levelConfig = {
    Proficient:   { width: "75%", color: "bg-gold" },
    Intermediate: { width: "50%", color: "bg-gold/70" },
    Familiar:     { width: "20%", color: "bg-gold/45" },
  };

  return (
    <section className="pt-4 pb-12 sm:pt-8 sm:pb-16 flex flex-col items-center animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 w-full">

        {/* Skills Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-3 tracking-tight">
            My <span className="text-gold-gradient">Skills</span>
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
          <p className={`text-sm sm:text-base mt-4 max-w-xl mx-auto ${
            darkMode ? 'text-light-muted' : 'text-gray-500'
          }`}>
            Here are the technologies and strengths I continue to develop as an aspiring IT professional.
          </p>
        </div>

        {/* Legends */}
        <div className="flex justify-center gap-6 mb-10">
          {Object.entries(levelConfig).map(([label, { color }]) => (
            <div key={label} className="flex items-center gap-2">
              <span className={`inline-block w-3 h-3 rounded-full ${color}`} />
              <span className={`text-xs font-semibold ${darkMode ? 'text-light-muted' : 'text-gray-500'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-sm sm:max-w-none mx-auto w-full">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className={`p-5 rounded-2xl border ${
                darkMode
                  ? 'bg-dark-card border-dark-border text-light-text'
                  : 'bg-white border-gray-200 shadow-sm text-dark-rich'
              }`}
            >
              {/* Category */}
              <div className="flex items-center gap-2.5 mb-5">
                <h3 className="font-display font-extrabold text-sm tracking-wide uppercase">
                  {cat.category}
                </h3>
              </div>

              {/* Skills List */}
              {cat.badges ? (
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/25 bg-gold/10 text-gold`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {cat.items.map((skill, skillIdx) => {
                    const { width, color } = levelConfig[skill.level];
                    return (
                      <div key={skillIdx}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs sm:text-sm font-semibold">{skill.name}</span>
                          <span className="text-[10px] font-bold text-gold">{skill.level}</span>
                        </div>
                        <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                          darkMode ? 'bg-dark-rich' : 'bg-gray-100 border border-gray-200/50'
                        }`}>
                          <div
                            style={{ width }}
                            className={`h-full ${color} rounded-full transition-all duration-700 ease-out`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}