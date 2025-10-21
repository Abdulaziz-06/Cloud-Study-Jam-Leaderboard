import React from 'react';
import Link from 'next/link';
import Switch from "@/components/ui/sky-toggle";

const MobileSidebar = ({ isOpen, onClose }) => {
  // Social Links component with enhanced styling
  const SocialLinks = () => (
    <>
      <Link href="https://linkedin.com/company/gdgoc-gctc">
        <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--color-card-background)] transition-all duration-200 group cursor-pointer">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <svg className='w-6 h-6 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              LinkedIn
            </h3>
            <p className="text-sm text-[var(--color-secondary)]">
              Connect with our community
            </p>
          </div>
          <svg className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </Link>

      <Link href="https://x.com/gdgoc_gctc">
        <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--color-card-background)] transition-all duration-200 group cursor-pointer">
          <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <svg className='w-6 h-6 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              X (Twitter)
            </h3>
            <p className="text-sm text-[var(--color-secondary)]">
              Follow our updates
            </p>
          </div>
          <svg className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </Link>

      <Link href="https://www.instagram.com/gdgoc.gctc?igsh=ZXI4a3VoYjRqdnFk">
        <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--color-card-background)] transition-all duration-200 group cursor-pointer">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <svg className='w-6 h-6 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              Instagram
            </h3>
            <p className="text-sm text-[var(--color-secondary)]">
              See our photos & stories
            </p>
          </div>
          <svg className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </Link>

      <Link href="http://gdg.community.dev/gdg-on-campus-geethanjali-college-of-engineering-and-technology-hyderabad-india">
        <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--color-card-background)] transition-all duration-200 group cursor-pointer">
          <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <svg className='w-6 h-6 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.55.06-1.08.16-1.58L9 13v1c0 1.1.9 2 2 2v2.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              GDG Community
            </h3>
            <p className="text-sm text-[var(--color-secondary)]">
              Join our official community
            </p>
          </div>
          <svg className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </Link>

      <Link href="/resources">
        <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--color-card-background)] transition-all duration-200 group cursor-pointer">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <svg className='w-6 h-6 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0112 21.75c1.052 0 2.062-.18 3-.512v-14.25c-1.052-.18-2.062-.25-3-.25zM12 6.042V3.75m0 2.292c-1.19 0-2.37-.08-3.548-.252M12 6.042c1.19 0 2.37.08 3.548.252m-4.478 8.278l-1.834-1.834m0 3.668L17.25 10.5m-1.834 1.834l1.834 1.834m-3.668 0l-1.834-1.834" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              Resources
            </h3>
            <p className="text-sm text-[var(--color-secondary)]">
              Find helpful materials
            </p>
          </div>
          <svg className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </Link>
    </>
  );

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-[var(--color-background)] 
        border-l border-[var(--color-border)] shadow-2xl z-50 
        transform transition-transform duration-300 ease-in-out
        md:hidden flex flex-col
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <h2 className="text-xl font-bold text-[var(--color-header-text)]">
            Menu
          </h2>
          <button
            onClick={onClose}
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors p-2 rounded-lg hover:bg-[var(--color-card-background)]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="space-y-6">
            {/* Social Links Section */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-secondary)] uppercase tracking-wide mb-4 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Connect With Us
              </h3>
              <div className="space-y-2">
                <SocialLinks />
              </div>
            </div>

            {/* Theme Toggle Section */}
            <div className="border-t border-[var(--color-border)] pt-6">
              <h3 className="text-sm font-semibold text-[var(--color-secondary)] uppercase tracking-wide mb-4 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Appearance
              </h3>
              <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--color-card-background)]">
                <div className="flex items-center space-x-3">
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--color-primary)]">Theme</h4>
                    <p className="text-sm text-[var(--color-secondary)]">Switch between light and dark mode</p>
                  </div>
                </div>
                <Switch sizePx={14} />
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--color-border)] pt-6">
              <div className="text-center">
                <p className="text-xs text-[var(--color-secondary)]">
                  Google Developer Group
                </p>
                <p className="text-xs text-[var(--color-secondary)] mt-1">
                  On Campus GCTC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
