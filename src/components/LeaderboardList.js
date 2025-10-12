import React from 'react'
import ParticipantCard from './ParticipantCard'

function LeaderboardList({ Participationdata, searchTerm }) {
    const hasResults = Participationdata.length > 0

    return (
        <div className="space-y-4">
            {hasResults ? (
                Participationdata.map((participant, index) => (
                    <ParticipantCard
                        key={participant['User Email'] || `${participant['User Name']}-${index}`}
                        participant={participant}
                        position={index + 1}
                    />
                ))
            ) : (
                <div className="text-center py-10">
                    <p className="text-lg text-[var(--color-secondary)]">
                        {searchTerm?.trim()
                            ? `No participants found for "${searchTerm}"`
                            : 'No participant data available right now.'}
                    </p>
                </div>
            )}
        </div>
    )
}

export default LeaderboardList
