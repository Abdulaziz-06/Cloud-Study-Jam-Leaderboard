"use client"
import React, { useState, useEffect } from 'react'
import TableBody from './TableBody'
import dataArr from '../../public/data.json'

function TableIndex() {
  // JSON file gone print here 
  const imported_data = JSON.stringify(dataArr);
  const data = JSON.parse(imported_data);
  const [Participationdata, setParticipationdata] = useState([...data]);

  return (
    <div className='w-full relative px-3'>
      <h2 className="text-2xl font-bold text-center my-8">Top 100 Participants</h2>
      <table className='mx-auto table-fixed m-5 border border-[var(--text-color)]/20'>
        <thead className='shadow-md text-sm bg-[var(--background-color)] text-[var(--text-color)] sticky top-2 z-10'>
          <tr className='text-center '>
            <td className="rounded-ss-lg w-80 p-2 border-r-2 border-[var(--text-color)]/20">Name</td>
            <td className="p-2 border-r-2 border-[var(--text-color)]/20">Skill Badges Completed</td>
            <td className="mob:hidden rounded-se-lg p-2 max-w-[150px]">Arcade Games Completed</td>
          </tr>
        </thead>
        <TableBody
          Participationdata={Participationdata}
          setParticipationdata={setParticipationdata}
        />
      </table>

    </div>
  )
}

export default TableIndex