import React from "react";

function ParticipantCard({ participant, position }) {
  return (
    <div className="bg-[var(--color-card-background)] p-4 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
      
      {/* Position / Rank number in black/white based on theme */}
      <div className="text-2xl font-bold text-[var(--color-header-text)] flex-shrink-0">
        {position}
      </div>

      <div className="flex-grow min-w-0">
        <div className="text-lg font-semibold text-[var(--color-primary)] truncate">
          {participant["User Name"]}
        </div>
        <div className="text-sm text-[var(--color-secondary)] truncate">
          {participant["User Email"]?.toLowerCase() || "Email hidden"}
        </div>
      </div>

      <div className="flex flex-col items-end flex-shrink-0">
        <div className="text-sm text-[var(--color-primary)]">
          Skill Badges: {participant["# of Skill Badges Completed"]}
        </div>
        <div className="text-sm text-[var(--color-primary)]">
          Arcade Games: {participant["# of Arcade Games Completed"]}
        </div>
      </div>

    </div>
  );
}

export default ParticipantCard;
