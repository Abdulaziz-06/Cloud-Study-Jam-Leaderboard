import React from "react";

function ParticipantCard({ participant, position, topPerformer }) {
  const badges = Number(participant['# of Skill Badges Completed'] ?? 0);
  const games = Number(participant['# of Arcade Games Completed'] ?? 0);
  const isCampaignCompleter = badges === 19 && games === 1;
  
  return (
    <div className={`p-3 rounded-lg shadow-md flex items-center space-x-3 transition-all duration-300 group ${
      isCampaignCompleter 
        ? "top-performer-card" 
        : "bg-[var(--color-card-background)]"
    }`}>
      
      {/* Position / Rank number in black/white based on theme */}
      <div className="text-lg font-semibold text-[var(--color-header-text)] flex-shrink-0 flex items-center gap-2">
        <span>{position}</span>
        {isCampaignCompleter && (
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )}
      </div>

      <div className="flex-grow min-w-0">
        <div className="text-base font-medium text-[var(--color-primary)] truncate">
          {participant["Google Cloud Skills Boost Profile URL"] ? (
            <a 
              href={participant["Google Cloud Skills Boost Profile URL"]}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                isCampaignCompleter 
                  ? "text-yellow-600 font-semibold" 
                  : "text-[var(--color-primary)]"
              }`}
              title="View Google Cloud Skills Boost Profile"
              >
                {participant["User Name"]}
              </a>
          ) : (
            <span className={`${
              isCampaignCompleter 
                ? "text-yellow-600 font-semibold" 
                : "text-[var(--color-primary)]"
            }`}>
              {participant["User Name"]}
            </span>
          )}
        </div>
        <div className="text-sm text-[var(--color-secondary)] truncate">
          {participant["User Email"]?.toLowerCase() || "Email hidden"}
        </div>
      </div>

      <div className="flex flex-col items-end flex-shrink-0">
        <div className="text-xs text-[var(--color-primary)]">
          Skill Badges: {participant["# of Skill Badges Completed"]}
        </div>
        <div className="text-xs text-[var(--color-primary)]">
          Arcade Games: {participant["# of Arcade Games Completed"]}
        </div>
      </div>

    </div>
  );
}

export default ParticipantCard;
