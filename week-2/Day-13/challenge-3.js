//🧠 Challenge 3: Combat Log Tracker


/* 🕹️ Scenario

You’ve got a turn-based combat system. Now you want to track each action in a 
log — like a scrolling terminal feed or battle history.


🧩 Your Task

Write a function called logCombatTurn(attacker, defender, logArray) that:
- Runs the attack logic (subtract health)
- Pushes a message into logArray
- Returns the updated logArray

*/

function logCombatTurn(attacker, defender, logArray) {
    // Apply damage to defender first
    defender.health = defender.health - attacker.attackPower;

    // Then log the updated health
    const logMessage = `${attacker.name} attacks ${defender.name} for ${attacker.attackPower} damage. ${defender.name} now has ${defender.health} health.`;
    
    // Then push the combat logMessage into the array and return it
    logArray.push(logMessage);
    return logArray;
}

const player1 = { name: "ZeroBlade", health: 100, attackPower: 20 };
const player2 = { name: "MechaFang", health: 100, attackPower: 15 };
const combatLog = [];

logCombatTurn(player1, player2, combatLog);
console.log(combatLog);