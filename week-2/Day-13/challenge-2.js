// Challenge 2: Cyberpunk Combat Simulator

/* Scenario
You’re designing a turn-based combat system for a cyberpunk RPG. Each character has:
- name
- health
- attackPower

You’ll write a function that:
1. - Accepts two character objects: attacker and defender
2. - Subtracts attacker.attackPower from defender.health
3. - Returns a message like: "ZeroBlade attacks MechaFang for 20 damage. MechaFang now has 80 health."

🧪 Sample Input
const player1 = { name: "ZeroBlade", health: 100, attackPower: 20 };
const player2 = { name: "MechaFang", health: 100, attackPower: 15 };

🧩 Your Task

Write a function called attackTurn(attacker, defender) that:- Updates the defender’s health
- Returns a combat message

💡 Bonus Ideas (Optional)- Add a criticalHit chance (e.g., 20% chance to double damage)
- Add a defend() function that halves incoming damage
- Track combat history in an array
*/

function attackTurn(attacker, defender) {
    defender.health = defender.health - attacker.attackPower;
    return `${attacker.name} attacks ${defender.name} for ${attacker.attackPower} damage. ${defender.name} now has ${defender.health} health.`;
}

const player1 = { name: "ZeroBlade", health: 100, attackPower: 20 };
const player2 = { name: "MechaFang", health: 100, attackPower: 15 };

console.log(attackTurn(player1, player2));

//🧪 Mini Challenge 1: Weapon Logger
// Goal: Write a function that accepts a weapon object and logs its name and damage.


function logWeapon(weapon) {
    //log: "Plasma Rifle deals 35 damage"
    console.log(`${weapon.name} deals ${weapon.damage} damage`);
}

const weapon = {
    name: "Plasma Rifle",
    damage: 35
};

// 🧪 Mini Challenge 2: Message Sender
// Goal: Write a function that accepts a message and a sender object, and returns a formatted string.

function sendMessage(message, sender) {
    // return: "ZeroBlade says: Mission Complete."
    return `${sender.name} says: ${message}`;
}

const sender = { name: "ZeroBlade" };
const message = "Mission Complete.";

// 🧪 Mini Challenge 3: Task Prioritizer
// Goal: Write a function that accepts a task object and a priority level, and logs a message.
function prioritizeTask(task, priority) {
    // log: "Task: Hack the mainframe | Priority: high"
    console.log(`Task: ${task.title} | Priority: ${priority}`);
}

const task = { title: "Hack the mainframe" };
const priority = "high";