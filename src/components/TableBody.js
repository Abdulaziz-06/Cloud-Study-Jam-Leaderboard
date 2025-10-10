import React from 'react'
import TableRow from './TableRow'

function TableBody({ Participationdata, searchTerm }) {
    const hasResults = Participationdata.length > 0

    return (
        <tbody className="divide-y divide-[var(--text-color)]/10 text-sm text-[var(--text-color)]">
            {hasResults ? (
                Participationdata.map((participant, index) => (
                    <TableRow
                        key={participant['User Email'] || `${participant['User Name']}-${index}`}
                        participant={participant}
                        position={index + 1}
                    />
                ))
            ) : (
                <tr>
                    <td colSpan="3" className="px-6 py-14 text-center text-sm text-[var(--text-color)]/60">
                        {searchTerm?.trim()
                            ? `No participants found for "${searchTerm}"`
                            : 'No participant data available right now.'}
                    </td>
                </tr>
            )}
        </tbody>
    )
}

export default TableBody