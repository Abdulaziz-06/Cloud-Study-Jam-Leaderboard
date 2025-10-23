"use client"
import React, { useState, useEffect } from 'react'
import LeaderboardList from './LeaderboardList'
import dataArr from '../../public/data.json'
import useMobileLayout from '@/hooks/useMobileLayout';

function Leaderboard({ topPerformer }) {
  const isMobile = useMobileLayout();

  const imported_data = JSON.stringify(dataArr);
  const data = JSON.parse(imported_data);
  const [Participationdata, setParticipationdata] = useState(() => {
    const lockedParticipants = [];
    const otherParticipants = [];

    data.forEach(participant => {
      const badges = Number(participant['# of Skill Badges Completed'] ?? 0);
      const games = Number(participant['# of Arcade Games Completed'] ?? 0);

      if (badges === 19 && games === 1) {
        lockedParticipants.push(participant);
      } else {
        otherParticipants.push(participant);
      }
    });

    // Keep locked participants in their original order from data.json
    // No additional sorting applied to lockedParticipants here.

    // Sort other participants by existing logic
    otherParticipants.sort((a, b) => {
      const badgesA = Number(a['# of Skill Badges Completed'] ?? 0);
      const badgesB = Number(b['# of Skill Badges Completed'] ?? 0);
      
      if (badgesB !== badgesA) return badgesB - badgesA;
      
      const gamesA = Number(a['# of Arcade Games Completed'] ?? 0);
      const gamesB = Number(b['# of Arcade Games Completed'] ?? 0);
      if (gamesB !== gamesA) return gamesB - gamesA;
      
      const nameA = String(a['User Name'] || '').toLowerCase();
      const nameB = String(b['User Name'] || '').toLowerCase();
      return nameA.localeCompare(nameB);
    });

    return [...lockedParticipants, ...otherParticipants];
  });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = Participationdata.filter((participant) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;

    const name = String(participant['User Name'] || '').toLowerCase();
    const email = String(participant['User Email'] || '').toLowerCase();
    const badges = String(participant['# of Skill Badges Completed'] ?? '').toLowerCase();
    const games = String(participant['# of Arcade Games Completed'] ?? '').toLowerCase();

    return (
      name.includes(query) ||
      email.includes(query) ||
      badges.includes(query) ||
      games.includes(query)
    );
  });

  return (
    <div className='w-full relative px-4 md:px-6'>
      <h2 className="text-2xl md:text-3xl font-bold text-center my-8">Leaderboard</h2>
      <div className="max-w-3xl mx-auto mb-4">
        <input
          type="text"
          aria-label="Search participants by name, email, badges, or games"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-card-background)] px-4 py-2 text-sm text-[var(--color-primary)] placeholder-[var(--color-secondary)] focus:outline-none"
        />
      </div>

      {isMobile ? (
        <LeaderboardList Participationdata={filteredData} searchTerm={searchTerm} topPerformer={topPerformer} />
      ) : (
        <div className='w-full overflow-x-auto'>
          <table className='mx-auto w-full table-fixed m-5 border-collapse'>
            <thead className='text-sm text-[var(--color-secondary)] sticky top-2 z-10'>
              <tr className='text-left'>
                <th className="p-4 font-semibold">Rank</th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Skill Badges</th>
                <th className="p-4 font-semibold">Arcade Games</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] text-sm text-[var(--color-primary)]">
              {filteredData.map((participant, index) => {
                const originalIndex = Participationdata.findIndex(p => p["User Name"] === participant["User Name"]);
                return (
                  <tr key={participant['User Email'] || `${participant['User Name']}-${index}`} className={`group transition-colors ${
                    participant["User Name"] === topPerformer["User Name"] 
                      ? "top-performer-row" 
                      : ""
                  }`}>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{originalIndex + 1}</span>
                        {participant["User Name"] === topPerformer["User Name"] && (
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="truncate">
                        {participant["Google Cloud Skills Boost Profile URL"] ? (
                          <a 
                            href={participant["Google Cloud Skills Boost Profile URL"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors duration-200 ${
                              participant["User Name"] === topPerformer["User Name"] 
                                ? "text-yellow-600 group-hover:text-yellow-500 font-bold" 
                                : "text-[var(--color-primary)] group-hover:text-[var(--color-accent)]"
                            }`}
                            title="View Google Cloud Skills Boost Profile"
                          >
                            {participant["User Name"]}
                          </a>
                        ) : (
                          <span className={`${
                            participant["User Name"] === topPerformer["User Name"] 
                              ? "text-yellow-600 group-hover:text-yellow-500 font-bold" 
                              : "text-[var(--color-primary)] group-hover:text-[var(--color-accent)]"
                          }`}>
                            {participant["User Name"]}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[var(--color-secondary)] truncate">{participant["User Email"]?.toLowerCase() || "Email hidden"}</div>
                    </td>
                    <td className="p-4">{participant["# of Skill Badges Completed"]}</td>
                    <td className="p-4">{participant["# of Arcade Games Completed"]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Leaderboard;