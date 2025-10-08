import React from "react";
import Link from 'next/link';

function TableRow({ participant, position }) {
    const isEligible = participant["All Skill Badges & Games Completed"] === "Yes"
    const redeemed = participant["Access Code Redemption Status"] === "Yes"

    const isTop100 = position <= 100;

    return (
        <tr className={`transition-colors duration-200 ${isTop100 ? 'bg-[var(--background-color)] border-b-2 border-blue-500' : 'odd:bg-[var(--background-color)]/5 even:bg-[var(--background-color)]/[0.02]'} hover:bg-[var(--background-color)]/10`}>
            <td className="px-6 py-4 text-sm border-r-2 border-[var(--text-color)]/20">
                <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--text-color)]/20 bg-[var(--text-color)]/10 text-xs uppercase tracking-wide text-[var(--text-color)]">
                        {position}
                    </span>
                    <div>
                        <div className="flex items-center gap-2 text-base font-semibold text-[var(--text-color)]">
                            {participant["User Name"]}
                        </div>
                        <p className="text-xs tracking-[0.3em] text-[var(--text-color)]/60">
                            {participant["User Email"]?.toLowerCase() || "Email hidden"}
                        </p>
                    </div>
                </div>
            </td>

            <td className="px-6 py-4 text-center text-sm text-[var(--text-color)] border-r-2 border-[var(--text-color)]/20">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--text-color)]/20 bg-[var(--text-color)]/10">
                    {participant["# of Skill Badges Completed"]}
                </div>
            </td>

            <td className="px-6 py-4 text-center text-sm mob:hidden text-[var(--text-color)]">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--text-color)]/20 bg-[var(--text-color)]/10">
                    {participant["# of Arcade Games Completed"]}
                </div>
            </td>
        </tr>
    );
}

export default TableRow;
