"use client"
import React, { useState, useEffect } from 'react'
import TableBody from './TableBody'
import dataArr from '../../public/data.json'

function TableIndex() {
  // JSON file gone print here 
  const imported_data = JSON.stringify(dataArr);
  const data = JSON.parse(imported_data);
  const [Participationdata, setParticipationdata] = useState(() => {
    const sorted = [...data].sort((a, b) => {
      const badgesA = Number(a['# of Skill Badges Completed'] ?? 0);
      const badgesB = Number(b['# of Skill Badges Completed'] ?? 0);
      if (badgesB !== badgesA) return badgesB - badgesA; // desc by badges
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
    <div className='w-full relative px-3'>
      <h2 className="text-2xl font-bold text-center my-8">Top 100 Participants</h2>
      <div className="max-w-3xl mx-auto mb-4">
        <input
          type="text"
          aria-label="Search participants by name, email, badges, or games"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-[var(--text-color)]/20 bg-[var(--background-color)] px-4 py-2 text-sm text-[var(--text-color)] placeholder-[var(--text-color)]/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <table className='mx-auto table-fixed m-5 border border-[var(--text-color)]/20'>
        <thead className='shadow-md text-sm bg-[var(--background-color)] text-[var(--text-color)] sticky top-2 z-10'>
          <tr className='text-center '>
            <td className="rounded-ss-lg w-80 p-2 border-r-2 border-[var(--text-color)]/20">Name</td>
            <td className="p-2 border-r-2 border-[var(--text-color)]/20">Skill Badges Completed</td>
            <td className="mob:hidden rounded-se-lg p-2 max-w-[150px]">Arcade Games Completed</td>
          </tr>
        </thead>
        <TableBody
          Participationdata={filteredData}
          searchTerm={searchTerm}
        />
      </table>

    </div>
  )
}

export default TableIndex