import React from 'react';

export default function Footer({ activeTab, scrollToSection, darkMode }) {
  const isHome = activeTab === 'home';
  return (
    <footer className={`relative z-10 border-t mt-auto transition-all duration-300 ${isHome
        ? `${darkMode ? 'bg-dark-rich' : 'bg-[#F9FAFB]'} border-dark-border text-light-muted`
        : darkMode
          ? 'bg-dark-rich border-dark-border text-light-muted'
          : 'bg-gray-50 border-gray-200 text-gray-500'
      }`}>

      {/* TOP SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* CONTACT ADDRESS */}
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-6 ${darkMode ? 'text-light-muted/60' : 'text-gray-400'
            }`}>
            Contact Address
          </p>

          <div className="space-y-5">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className={`mt-0.5 p-2 rounded border ${darkMode ? 'border-dark-border' : 'border-gray-200'
                }`}>
                <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className={`text-xs font-semibold mb-0.5 ${darkMode ? 'text-light-text' : 'text-dark-rich'}`}>Email Address</p>
                <p className="text-xs">ryza.ison0@email.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className={`mt-0.5 p-2 rounded border ${darkMode ? 'border-dark-border' : 'border-gray-200'
                }`}>
                <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" />
                  <line x1="12" x2="12.01" y1="18" y2="18" />
                </svg>
              </div>
              <div>
                <p className={`text-xs font-semibold mb-0.5 ${darkMode ? 'text-light-text' : 'text-dark-rich'}`}>Mobile No.</p>
                <p className="text-xs">+63 948 477 3914</p>
              </div>
            </div>
          </div>
        </div>

        {/* BRAND & SOCIALS */}
        <div className="flex flex-col justify-between">
          <div>
            <div
              onClick={() => { scrollToSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="cursor-pointer mb-2"
            >
              <span className={`font-display font-black text-2xl tracking-tight ${darkMode ? 'text-light-text' : 'text-dark-rich'
                }`}>
                RYZA ISON
              </span>
            </div>
            <p className="text-xs mb-4">3rd Year IT Student · Aspiring Network Support Engineer / Web Developer </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold">Socials :</span>

              {/* Facebook */}
              <a href="https://www.facebook.com/ryza.ison27/" target="_blank" rel="noreferrer"
                className={`p-2 rounded border transition-all duration-300 ${darkMode ? 'border-dark-border text-light-muted hover:text-gold hover:border-gold/40' : 'border-gray-200 text-gray-500 hover:text-gold hover:border-gold/40'
                  }`}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/ryzaison/" target="_blank" rel="noreferrer"
                className={`p-2 rounded border transition-all duration-300 ${darkMode ? 'border-dark-border text-light-muted hover:text-gold hover:border-gold/40' : 'border-gray-200 text-gray-500 hover:text-gold hover:border-gold/40'
                  }`}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@rshians" target="_blank" rel="noreferrer"
                className={`p-2 rounded border transition-all duration-300 ${darkMode ? 'border-dark-border text-light-muted hover:text-gold hover:border-gold/40' : 'border-gray-200 text-gray-500 hover:text-gold hover:border-gold/40'
                  }`}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://x.com/rshians" target="_blank" rel="noreferrer"
                className={`p-2 rounded border transition-all duration-300 ${darkMode ? 'border-dark-border text-light-muted hover:text-gold hover:border-gold/40' : 'border-gray-200 text-gray-500 hover:text-gold hover:border-gold/40'
                  }`}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l16 16M4 20L20 4" />
                </svg>
              </a>

            </div>
          </div>
        </div>

      </div>

      {/* CREDITS */}
      <div className={`border-t py-5 text-center text-[11px] ${darkMode ? 'border-dark-border' : 'border-gray-200'
        }`}>
        © {new Date().getFullYear()} <strong>RYZA ISON</strong>. All Rights Reserved.
      </div>

    </footer>
  );
}