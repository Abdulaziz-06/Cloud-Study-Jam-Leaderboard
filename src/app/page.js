'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Leaderboard from "@/components/Leaderboard";
import DeadlineTimer from "@/components/DeadlineTimer";
import Switch from "@/components/ui/sky-toggle";
import Footer from "@/components/Footer";
import data from "../../public/data.json";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState('/assets/gdsc-logo_svg.svg');
  const totalParticipants = data.length;
  const skillBadgeMasters = data.filter(
    (participant) => participant["All Skill Badges & Games Completed"] === "Yes"
  ).length;
  const gameWinners = data.filter(
    (participant) => participant["# of Arcade Games Completed"] > 0 && participant["All Skill Badges & Games Completed"] === "Yes"
  ).length;
  const creditsRedeemed = data.filter(
    (participant) => participant["Access Code Redemption Status"] === "Yes"
  ).length;

  const totalBadgesEarned = data.reduce((acc, participant) => acc + participant["# of Skill Badges Completed"], 0);
  const averageProgress = totalParticipants > 0 ? (totalBadgesEarned / totalParticipants).toFixed(2) : 0;
  const topPerformer = data.reduce((prev, current) => {
    const prevTotal = prev["# of Skill Badges Completed"];
    const currentTotal = current["# of Skill Badges Completed"];
    return (prevTotal > currentTotal) ? prev : current;
  });

  const activeParticipants = data.filter(
    (participant) => participant["# of Skill Badges Completed"] > 0 || participant["# of Arcade Games Completed"] > 0
  ).length;

  const completionRate = totalParticipants > 0 ? ((skillBadgeMasters / totalParticipants) * 100).toFixed(2) : 0;

  const averageCompletionRate = totalParticipants > 0 ? (data.reduce((acc, p) => acc + (p["# of Skill Badges Completed"] + p["# of Arcade Games Completed"]), 0) / (totalParticipants * 20) * 100).toFixed(2) : 0;

  const performanceData = Array.from({ length: 20 }, (_, i) => {
    const count = data.filter(p => p['# of Skill Badges Completed'] === i).length;
    return { name: `${i} Badges`, count };
  });

  const COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];


  // ✅ useEffect: updates logo based on theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || 'dark';
    setCurrentLogo(
      initialTheme === 'light'
        ? '/assets/gdsc-logo-svg-light.svg'
        : '/assets/gdsc-logo_svg.svg'
    );

    // ✅ fixed JS-compatible handler
    const handleThemeChange = (event) => {
      const newTheme = event.detail;
      if (!newTheme) return;
      setCurrentLogo(
        newTheme === 'light'
          ? '/assets/gdsc-logo-svg-light.svg'
          : '/assets/gdsc-logo_svg.svg'
      );
    };

    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  // ✅ Social Links component
  const SocialLinks = () => (
    <>
      <Link href="https://linkedin.com/company/gdgoc-gctc">
        <div className="cursor-pointer hover:text-accent transition-colors">
          <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="currentColor" />
          </svg>
        </div>
      </Link>

      <Link href="https://x.com/gdgoc_gctc">
        <div className="cursor-pointer hover:text-accent transition-colors">
          <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" fill="currentColor" />
          </svg>
        </div>
      </Link>

      <Link href="https://www.instagram.com/gdgoc.gctc?igsh=ZXI4a3VoYjRqdnFk">
        <div className="cursor-pointer hover:text-accent transition-colors">
          <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="currentColor" />
          </svg>
        </div>
      </Link>

      <Link href="http://gdg.community.dev/gdg-on-campus-geethanjali-college-of-engineering-and-technology-hyderabad-india">
        <div className="cursor-pointer hover:text-accent transition-colors">
          <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.55.06-1.08.16-1.58L9 13v1c0 1.1.9 2 2 2v2.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
          </svg>
        </div>
      </Link>

      <div className="h-4 flex items-center">
        <Switch sizePx={16} />
      </div>
    </>
  );

  return (
    <>
      {/* Navbar */}
      <nav className='w-full shadow-md relative bg-[var(--color-background)] border-b border-[var(--color-border)]'>
        <div className="bg-[var(--color-background)] text-[var(--color-header-text)] w-full m-auto text-center p-2 flex justify-center items-center">
          <div><Image src="/assets/cloudLg.svg" alt="Google Cloud Logo" width="40" height="40" /></div>
          <p className='text-sm md:text-base'>
            Demo Days: Google Cloud Study Jams 2025-26
          </p>
        </div>

        <div className="w-full pl-0 pr-4 md:pl-0 md:pr-6 py-3 flex justify-between items-center">
          <div className="logo flex items-center justify-start h-12 md:h-16 -ml-6 md:-ml-10">
            <div className="relative h-full w-[22rem] md:w-[32rem]">
              <Image
                src={currentLogo}
                alt="GDSC Logo"
                fill
                sizes="(max-width: 768px) 22rem, 32rem"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--color-primary)] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-5 text-[var(--color-primary)]">
            <SocialLinks />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--color-card-background)] border-t border-[var(--color-border)]">
            <div className="flex flex-col items-center space-y-4 py-4">
              <SocialLinks />
            </div>
          </div>
        )}
      </nav>

      {/* Deadline Timer */}
      <DeadlineTimer />

      {/* Program Metrics */}
      <div className="text-center my-8 md:my-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-header-text)]">
          Program Metrics
        </h2>
        <div className="flex flex-wrap justify-center gap-4 px-4 md:flex-nowrap">
          <div className="stat-card p-4 rounded-lg shadow-md flex items-center w-full md:w-1/5">
            <div className="mr-4">
              <svg className="w-8 h-8 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">Credits Redeemed</h3>
              <p className="text-3xl font-bold text-[var(--color-primary)]">{creditsRedeemed}</p>
            </div>
          </div>
          <div className="stat-card p-4 rounded-lg shadow-md flex items-center w-full md:w-1/5">
            <div className="mr-4">
              <svg className="w-8 h-8 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">Total Badges Earned</h3>
              <p className="text-3xl font-bold text-[var(--color-primary)]">{totalBadgesEarned}</p>
            </div>
          </div>
          <div className="stat-card p-4 rounded-lg shadow-md flex items-center w-full md:w-1/5">
            <div className="mr-4">
              <svg className="w-8 h-8 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-14l-3 3m5 5l3-3m-8 8l-3 3m5-5l3 3M5 21v-4M3 19h4m13-13l-3 3m5 5l3-3m-8 8l-3 3m5-5l3 3" /></svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">Top Performer</h3>
              <p className="text-3xl font-bold text-[var(--color-primary)]">{topPerformer["User Name"]}</p>
            </div>
          </div>
          <div className="stat-card p-4 rounded-lg shadow-md flex items-center w-full md:w-1/5">
            <div className="mr-4">
              <svg className="w-8 h-8 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h5a3 3 0 013 3v1" /></svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">Game Winners</h3>
              <p className="text-3xl font-bold text-[var(--color-primary)]">{gameWinners}</p>
            </div>
          </div>
          <div className="stat-card p-4 rounded-lg shadow-md flex items-center w-full md:w-1/5">
            <div className="mr-4">
              <svg className="w-8 h-8 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l7-3v13l-7 3zM9 19a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012 2v13zm7-13a2 2 0 00-2-2h-2a2 2 0 00-2 2v13a2 2 0 002 2h2a2 2 0 002-2V6z" /></svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">Skill Badge Masters</h3>
              <p className="text-3xl font-bold text-[var(--color-primary)]">{skillBadgeMasters}</p>
            </div>
          </div>
        </div>
      </div>

      <Leaderboard />

      <Footer />
    </>
  );
}
