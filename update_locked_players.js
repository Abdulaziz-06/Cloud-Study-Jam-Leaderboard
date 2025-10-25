const fs = require('fs');

const data = require('./public/data.json');
const lockedPlayers = require('./public/locked_players.json');

const lockedPlayersMap = new Map(lockedPlayers.map(p => [p['User Name'], p.locked_position]));

let maxLockedPosition = 0;
for (const player of lockedPlayers) {
  if (player.locked_position > maxLockedPosition) {
    maxLockedPosition = player.locked_position;
  }
}

const newMilestoneAchievers = [];
data.forEach(participant => {
  const badges = Number(participant['# of Skill Badges Completed'] ?? 0);
  const games = Number(participant['# of Arcade Games Completed'] ?? 0);

  if (badges === 19 && games === 1 && !lockedPlayersMap.has(participant['User Name'])) {
    newMilestoneAchievers.push(participant);
  }
});

if (newMilestoneAchievers.length > 0) {
  let nextLockedPosition = maxLockedPosition + 1;
  const updatedLockedPlayers = [...lockedPlayers];

  newMilestoneAchievers.forEach(participant => {
    updatedLockedPlayers.push({
      "User Name": participant['User Name'],
      locked_position: nextLockedPosition,
    });
    nextLockedPosition++;
  });

  fs.writeFileSync('./public/locked_players.json', JSON.stringify(updatedLockedPlayers, null, 2));
  console.log('locked_players.json has been updated with new milestone achievers.');
} else {
  console.log('No new milestone achievers to add.');
}
