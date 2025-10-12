"use client"
import React, { useState, useEffect } from 'react'
import LeaderboardList from './LeaderboardList'
import dataArr from '../../public/data.json'
import useMobileLayout from '@/hooks/useMobileLayout';

function Leaderboard() {
  const isMobile = useMobileLayout();

  const imported_data = JSON.stringify(dataArr);
  const data = JSON.parse(imported_data);
  const [Participationdata, setParticipationdata] = useState(() => {
    const sorted = [...data].sort((a, b) => {
      const badgesA = Number(a['# of Skill Badges Completed'] ?? 0);
      const badgesB = Number(b['# of Skill Badges Completed'] ?? 0);
      if (badgesB !== badgesA) return badgesB - badgesA;
      const nameA = String(a['User Name'] || '').toLowerCase();
      const nameB = String(b['User Name'] || '').toLowerCase();
      return nameA.localeCompare(nameB);
    });
    return sorted;
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
          className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-card-background)] px-4 py-2 text-sm text-[var(--color-primary)] placeholder-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
      </div>

      {isMobile ? (
        <LeaderboardList Participationdata={filteredData} searchTerm={searchTerm} />
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
              {filteredData.map((participant, index) => (
                <tr key={participant['User Email'] || `${participant['User Name']}-${index}`} className="hover:bg-[var(--color-card-background)] transition-colors">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">
                    <div className="truncate">{participant["User Name"]}</div>
                    <div className="text-xs text-[var(--color-secondary)] truncate">{participant["User Email"]?.toLowerCase() || "Email hidden"}</div>
                  </td>
                  <td className="p-4">{participant["# of Skill Badges Completed"]}</td>
                  <td className="p-4">{participant["# of Arcade Games Completed"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Leaderboard;