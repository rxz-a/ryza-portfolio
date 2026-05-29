import React, { useState } from 'react';
import { Search, ExternalLink, X, Code, BookOpen, Layers } from 'lucide-react';
import bookcoverImg from "../assets/projects/book-cover.jpg";
import punkgrungeImg from "../assets/projects/punk_grunge.jpg";
import minimalistImg from "../assets/projects/minimalist.jpg";
import pointilisImg from "../assets/projects/pointilism.png";
import gamedevImg from "../assets/projects/gamedev.png";
import minionImg from "../assets/projects/minions_art.png";
import tattooImg from "../assets/projects/tattoo.jpg";
import logoImg from "../assets/projects/logo.png";
import wordpressImg from "../assets/projects/wordpress_website.png";
import webdevImg from "../assets/projects/webdev.png";
import eventdrivenImg from "../assets/projects/eventdriven.png";
import wireframeImg from "../assets/projects/lapitNa.png";
import alumnetImg from "../assets/projects/plv-alumnet.png";
import coedImg from "../assets/projects/coed_network_infrastructure.png";
import dynamicImg from "../assets/projects/dynamic_routing.png";
import eigrpImg from "../assets/projects/eigrp.png";
import ripImg from "../assets/projects/rip.png";
import tayaImg from "../assets/projects/mataya-taya.png";
import tsidmtsImg from "../assets/projects/tsidmts.png";

export default function Works({ darkMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const githubSvg = (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  const projects = [
    {
      id: 1,
      title: "Whispers in the Dark",
      image: bookcoverImg,
      subtitle: "",
      category: "Multimedia Arts",
      tags: ["Book Cover Design", "Dark Theme", "Adobe Photoshop"],
      shortDesc: ""
    },
    {
      id: 2,
      title: "Think Green, Live Clean",
      image: punkgrungeImg,
      subtitle: "",
      category: "Multimedia Arts",
      tags: ["Punk Grunge Design", "Eco Awareness", "Adobe Photoshop"],
      shortDesc: ""
    },
    {
      id: 3,
      title: "Hello Monsters",
      image: minimalistImg,
      subtitle: "",
      category: "Multimedia Arts",
      tags: ["Minimalist Design", "Concert Poster", "Adobe Photoshop"],
      shortDesc: ""
    },
    {
      id: 4,
      title: "Curious Encounter",
      image: pointilisImg,
      subtitle: "",
      category: "Multimedia Arts",
      tags: ["Pointilism Art", "Adobe Photoshop"],
      shortDesc: ""
    },
    {
      id: 5,
      title: "Silent Stare",
      image: tattooImg,
      subtitle: "",
      category: "Multimedia Arts",
      tags: ["Traditional Art", "Tattoo Art"],
      shortDesc: ""
    },
    {
      id: 6,
      title: "Website Logo",
      image: logoImg,
      subtitle: "",
      category: "Multimedia Arts",
      tags: ["Logo Design", "Typography Logo", "Adobe Photoshop"],
      shortDesc: ""
    },
    {
      id: 7,
      title: "Whisper of the Forest",
      image: gamedevImg,
      subtitle: "Visual Novel RPG",
      category: "Game Dev",
      tags: ["Pixel Art", "Visual Novel Game", "RenPy Engine"],
      shortDesc: "A dark fantasy visual novel where Kayden returns to his ravaged village and fights through Goblins and Ogres to reclaim his family's lost treasure."
    },
    {
      id: 8,
      title: "Mataya-taya - Tabletop | Hybrid | Spin-off",
      image: tayaImg,
      subtitle: "Traditional Filipino Mataya-taya Game",
      category: "Game Dev",
      tags: ["Tabletop", "Hybrid", "Spin-off", "Game Testing"],
      shortDesc: "A modern take on the classic Filipino game Mataya-taya, reimagined across three formats, including tabletop board game, a hybrid version using both a phone and board, and a video game spin-off."
    },
    {
      id: 9,
      title: "The Smile I Didn't Mean to Show",
      image: tsidmtsImg,
      subtitle: "Slasher Film Game",
      category: "Game Dev",
      tags: ["Video Game", "Game Testing"],
      shortDesc: "A romance visual novel following a quiet, gloomy girl whose gray everyday life gets turned upside down when two very different boys enter the picture. Available on Windows and Android."
    },
    {
      id: 10,
      title: "MindWell",
      image: wordpressImg,
      subtitle: "Mental Wellness Web Platform",
      category: "Web Dev",
      tags: ["WordPress", "CMS", "Web Design", "Mental Health"],
      shortDesc: "A clean, calming mental wellness website built on WordPress, providing a safe informative space for users to learn, reflect, and take control of their mental health."
    },
    {
      id: 11,
      title: "Travis Sweets and Baked Goodies",
      image: webdevImg,
      subtitle: "Small Business Bakery Website",
      category: "Web Dev",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      shortDesc: "A vibrant, colorful bakery website built for a small business owner to showcase products, accept orders, and establish an online presence for their sweets and baked goods brand."
    },
    {
      id: 12,
      title: "LapitNa!",
      image: wireframeImg,
      subtitle: "Commuter Alert Mobile App Wireframe",
      category: "UI Designs",
      tags: ["Wireframing", "Figma", "Mobile Design", "Proposed Study"],
      shortDesc: "A wireframe prototype for a proposed mobile app that vibrates to alert Filipino commuters when they are approaching their destination. Solving the common problem of sleeping past your stop on a bus."
    },
    {
      id: 13,
      title: "Student Productivity Hub",
      image: eventdrivenImg,
      subtitle: "Event-Driven Task Management System",
      category: "Web Dev",
      tags: ["PHP", "CSS", "JavaScript", "HTML"],
      shortDesc: "A student productivity system that higlights event-driven programming and tracks tasks by category and urgency, displaying real-time counts for open, overdue, completed, and urgent tasks."
    },
    {
      id: 14,
      title: "PLV-AlumNet",
      image: alumnetImg,
      subtitle: "Alumni Connection Platform and Job Placement System",
      category: "Web Dev",
      tags: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      shortDesc: "A comprehensive alumni management system for PLV that handles alumni tracking, networking, directory records, and job placement that is built using Laravel and Tailwind CSS by a our capstone group."
    },
    {
      id: 15,
      title: "PLV COED Network Infrastructure",
      image: coedImg,
      subtitle: "6th Floor PLV Building Network Simulation",
      category: "Networking",
      tags: ["Network Design", "Cisco Packet Tracer"],
      shortDesc: "A simulated network infrastructure for the 6-floor PLV College of Education (COED) building, configured with multiple routing protocols to ensure full building-wide connectivity."
    },
    {
      id: 16,
      title: "Dynamic Routing Protocols Simulation",
      image: dynamicImg,
      subtitle: "Multi-Router Dynamic Routing Network",
      category: "Networking",
      tags: ["Dynamic Routing", "Cisco Packet Tracer"],
      shortDesc: ""
    },
    {
      id: 17,
      title: "EIGRP Simulation",
      image: eigrpImg,
      subtitle: "Enhanced Interior Gateway Routing Protocol",
      category: "Networking",
      tags: ["EIGRP", "Cisco Packet Tracer"],
      shortDesc: ""
    },
    {
      id: 18,
      title: "RIP Routing Simulation",
      image: ripImg,
      subtitle: "Routing Information Protocol",
      category: "Networking",
      tags: ["RIP", "Cisco Packet Tracer"],
      shortDesc: ""
    }
  ];

  const filters = ["All", "Game Dev", "Multimedia Arts", "Networking", "UI Designs", "Web Dev"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="pt-4 pb-12 sm:pt-8 sm:pb-16 flex flex-col items-center animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Works Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-3 tracking-tight">
            My <span className="text-gold-gradient">Works</span>
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
          <p className={`text-sm sm:text-base mt-4 max-w-xl mx-auto ${darkMode ? 'text-light-muted' : 'text-gray-500'
            }`}>
            A collection of my academic projects and technical systems developed throughout the years of being an IT student, showcasing my skills in multimedia arts, game development, web development, networking and UI design.
          </p>
        </div>

        {/* Filtering */}
        <div className="flex flex-col items-center gap-4 mb-10 w-full">
          {/* Category Tabs */}
          <div className={`flex flex-nowrap justify-center gap-1.5 p-1 rounded-xl w-full sm:w-auto ${darkMode ? 'bg-dark-card border border-dark-border' : 'bg-gray-100 border border-gray-200 shadow-sm'
            }`}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${activeFilter === filter
                  ? 'text-dark-pure bg-gold shadow-sm'
                  : darkMode
                    ? 'text-light-muted hover:text-light-text'
                    : 'text-gray-600 hover:text-dark-rich'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-sm md:max-w-none mx-auto w-full">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:border-gold/40 flex flex-col justify-between cursor-pointer group relative overflow-hidden ${darkMode
                  ? 'bg-dark-card border-dark-border'
                  : 'bg-white border-gray-200/80 shadow-sm'
                  }`}
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Project Image */}
                {project.image && (
                  <div className="w-full h-72 rounded-xl overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20">
                      {project.category}
                    </span>
                    <span className={`text-[10px] ${darkMode ? 'text-light-muted/50' : 'text-gray-400'
                      }`}>
                      {project.role}
                    </span>
                  </div>

                  <h3 className={`font-display font-black text-xl mb-1 transition-colors group-hover:text-gold ${darkMode ? 'text-light-text' : 'text-dark-rich'
                    }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs font-semibold mb-3 ${darkMode ? 'text-light-muted/70' : 'text-gray-500'
                    }`}>
                    {project.subtitle}
                  </p>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${darkMode ? 'text-light-muted' : 'text-gray-600'
                    }`}>
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-[9px] font-bold px-2 py-0.5 rounded ${darkMode ? 'bg-dark-rich text-light-muted/80' : 'bg-gray-100 text-gray-500'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`p-12 text-center rounded-2xl border border-dashed ${darkMode ? 'border-dark-border text-light-muted' : 'border-gray-200 text-gray-400'
            }`}>
            <Layers className="h-10 w-10 mx-auto mb-4 text-gold/50" />
            <p className="text-base font-bold">No projects matched your criteria.</p>
            <p className="text-xs mt-1">Try tweaking your search term or filtering categories!</p>
          </div>
        )}

        {selectedProject && (() => {
          const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
          const goPrev = (e) => { e.stopPropagation(); setSelectedProject(filteredProjects[(currentIndex - 1 + filteredProjects.length) % filteredProjects.length]); };
          const goNext = (e) => { e.stopPropagation(); setSelectedProject(filteredProjects[(currentIndex + 1) % filteredProjects.length]); };

          return (
            <div
              className="fixed inset-0 z-[200] flex flex-col items-center justify-center p-6 pt-20"
              onClick={() => setSelectedProject(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

              {/* Prev Button */}
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[210] text-white hover:text-white/60 transition-all duration-300"  
                aria-label="Previous"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[210] text-white hover:text-white/60 transition-all duration-300"  
                aria-label="Next"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Image Container */}
              <div
                className="relative z-[210] max-w-3xl w-full flex flex-col items-center px-14"
                onClick={(e) => e.stopPropagation()}
              >
                {/* X */}
                <div className="w-full flex justify-end mb-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white hover:text-white/60 transition-all duration-300"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain rounded-2xl max-h-[65vh]"
                />
              </div>

              <p className="mt-4 text-white font-display font-bold text-lg text-center">
                {selectedProject.title}
              </p>
              {selectedProject.subtitle && (
                <p className="text-white/50 text-xs mt-1 text-center">
                  {selectedProject.subtitle}
                </p>
              )}
              <p className="text-white/30 text-xs mt-2">
                {currentIndex + 1} of {filteredProjects.length}
              </p>
            </div>
          );
        })()}
      </div>
    </section >
  );
}