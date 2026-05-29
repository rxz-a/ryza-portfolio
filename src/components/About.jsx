import React from 'react';
import { BookOpen, Award, Star, Calendar } from 'lucide-react';
import networkbasicsImg from "../assets/certifications/basics.png";
import networkdevicesImg from "../assets/certifications/initial_configurations.png";
import networkaddressImg from "../assets/certifications/basic_troubleshooting.png";
import supportsecurityImg from "../assets/certifications/support_security.png";

export default function About({ darkMode }) {
  const timelineEvents = [
    {
      education: "College",
      school: "Pamantasan ng Lungsod ng Valenzuela",
      academic_year: "2023-Present"
    },
    {
      education: "Senior High School",
      school: "Punturin Senior High School",
      academic_year: "2021-2023"
    },
    {
      education: "Junior High School",
      school: "Lawang Bato National High School",
      academic_year: "2017-2021"
    },
    {
      education: "Elementary",
      school: "Punturin 1 Elementary School",
      academic_year: "2011-2017"
    }
  ];

  const seminarsAttended = [
    {
      title: "VITSploration: An Exploration of Different IT Industries",
      date: "December 2023"
    },
    {
      title: "Securing Connections: Strategies for Cybersecurity and Network Operations",
      date: "April 2024"
    },
    {
      title: "Beyond Awareness: Enhancing Cyber Resilience with ESET",
      date: "April 2025"
    }
  ];

  const certifications = [
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      platform: "NetAcad",
      date_issued: "April 10, 2025",
      image: networkbasicsImg
    },
    {
      title: "Networking Devices and Initial Configuration",
      issuer: "Cisco Networking Academy",
      platform: "NetAcad",
      date_issued: "April 17, 2025",
      image: networkdevicesImg
    },
    {
      title: "Networking Addressing and Basic Troubleshooting",
      issuer: "Cisco Networking Academy",
      platform: "NetAcad",
      date_issued: "May 04, 2025",
      image: networkaddressImg
    },
    {
      title: "Networking Support and Security",
      issuer: "Cisco Networking Academy",
      platform: "NetAcad",
      date_issued: "May 08, 2025",
      image: supportsecurityImg
    }
  ];

  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 flex flex-col items-center animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* About Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-3 tracking-tight">
            About <span className="text-gold-gradient">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
          <p className={`text-sm sm:text-base mt-4 max-w-xl mx-auto ${darkMode ? 'text-light-muted' : 'text-gray-500'
            }`}>
            An insight into my academic journey, technical background, and passion for exploring the intersection of networking, troubleshooting, and web technologies to develop practical real-world solutions.
          </p>
        </div>

        {/* About Me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 sm:mb-12">
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className={`font-display font-extrabold text-xl sm:text-2xl mb-4 ${darkMode ? 'text-light-text' : 'text-dark-rich'
              }`}>
              A Student of Technology, Aspiring to Build Solutions
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${darkMode ? 'text-light-muted' : 'text-gray-600'
              }`}>
              I am an Information Technology student at Pamantasan ng Lungsod ng Valenzuela (PLV) with a growing interest in networking, troubshooting, web development, and software testing. I started as someone who's curious about how systems and websites works throughout and this gradually became my passion for learning technology and building a real-world solutions.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-light-muted' : 'text-gray-600'
              }`}>
              As I continue improving my technical skills, I want to improve my problem-solving skills, whether it's for developing a responsive web interfaces, understanding how network systems, performing software testing, or learning how different technologies work together. I want to gain a hands-on experience to improve my skills, preparing myself for my future professional career.
            </p>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <img
              src="/profile.jpeg"
              alt="Ryza"
              className="w-64 h-64 rounded-2xl object-cover border border-gold/20"
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className={`font-display font-extrabold text-xl sm:text-2xl text-center mb-10 ${darkMode ? 'text-light-text' : 'text-dark-rich'
            }`}>
            Educational Journey
          </h3>

          <div className="relative pl-6 sm:pl-8 border-l border-gold/20 max-w-2xl mx-auto space-y-10">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Bullet node */}
                <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 rounded-full border-2 transition-all duration-300 group-hover:scale-110 group-hover:border-gold ${darkMode
                  ? 'bg-dark-rich border-dark-border text-light-muted'
                  : 'bg-white border-gray-200 text-gray-500 shadow-sm'
                  }`}>
                  {event.icon}
                </div>

                {/* Event Cards */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 w-fit">
                      {event.education}
                    </span>
                    <span className={`text-xs mt-1 sm:mt-0 font-medium ${darkMode ? 'text-light-muted/50' : 'text-gray-400'
                      }`}>
                      {event.academic_year}
                    </span>
                  </div>

                  <h4 className={`font-display font-extrabold text-base sm:text-lg mb-2 ${darkMode ? 'text-light-text' : 'text-dark-rich'
                    }`}>
                    {event.school}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seminars Attended */}
        <div className="mt-16">
          <h3 className={`font-display font-extrabold text-xl sm:text-2xl text-center mb-10 ${darkMode ? 'text-light-text' : 'text-dark-rich'
            }`}>
            Seminars Attended
          </h3>
          <div className="relative  pl-6 sm:pl-8 border-l border-gold/20 max-w-2xl mx-auto space-y-10">
            {seminarsAttended.map((seminar, idx) => (
              <div key={idx} className="relative group">
                {/* Bullet node */}
                <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 rounded-full border-2 transition-all duration-300 group-hover:scale-110 group-hover:border-gold ${darkMode
                  ? 'bg-dark-rich border-dark-border text-light-muted'
                  : 'bg-white border-gray-200 text-gray-500 shadow-sm'
                  }`}>
                  {seminar.icon}
                </div>

                {/* Event Cards */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className={`font-display font-extrabold text-base sm:text-lg mb-2 ${darkMode ? 'text-light-text' : 'text-dark-rich'
                      }`}>
                      {seminar.title}
                    </span>
                    <span className={`text-xs mt-1 sm:mt-0 font-medium ${darkMode ? 'text-light-muted/50' : 'text-gray-400'
                      }`}>
                      {seminar.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className={`font-display font-extrabold text-xl sm:text-2xl text-center mb-10 ${darkMode ? 'text-light-text' : 'text-dark-rich'
            }`}>
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-sm sm:max-w-2xl mx-auto">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-2 sm:p-4 flex flex-col items-center text-center transition-all duration-300 hover:border-gold/40 hover:scale-[1.02] group ${darkMode
                  ? 'bg-dark-card border-dark-border'
                  : 'bg-white border-gray-200 shadow-sm'
                  }`}
              >
                {/* Certification Images */}
                <div className="w-64 h-64 mb-4 rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20 mb-2">
                  {cert.platform}
                </span>

                {/* Title */}
                <h4 className={`font-display font-extrabold text-sm sm:text-base mb-1 ${darkMode ? 'text-light-text' : 'text-dark-rich'
                  }`}>
                  {cert.title}
                </h4>

                {/* Issuer & Date */}
                <p className={`text-xs mb-1 ${darkMode ? 'text-light-muted/70' : 'text-gray-500'
                  }`}>
                  {cert.issuer}
                </p>
                <p className={`text-xs font-medium mb-4 ${darkMode ? 'text-light-muted/50' : 'text-gray-400'
                  }`}>
                  {cert.date_issued}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}