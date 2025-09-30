// 🧠 Challenge 5: Cyberpunk Shop System — Buy Item

/* 🕹️ Scenario:
Your character walks into a neon-lit gear shop. 
You want to simulate buying an item and updating the inventory.

🧩 Your Task:
Write a function called buyItem(shopItem, inventory, credits) that:
- Checks if the player has enough credits

- If yes:
- Adds the item to inventory
- Deducts the item’s cost from credits
- Returns a success message

- If not:
- Returns a failure message

🧪 Sample Setup:
const inventory = [];
let credits = 100;

const shopItem = {
  name: "Cyber Katana",
  cost: 75
};

🧪 Sample Output
"✅ Purchased: Cyber Katana. Remaining credits: 25"


or
"❌ Not enough credits to buy Cyber Katana."



 */
const player = { credits: 100 };

function buyItem(shopItem, inventory, player) {
    // Check the cost of the item up against player credits
    if (shopItem.cost <= player.credits) {
        player.credits = player.credits - shopItem.cost;    // If you are inside this block it means that player had enough credits, deduct item cost from credits
        inventory.push(shopItem);   // Push the bought item to inventory
        return `✅ Player successfully bought ${shopItem.name} for ${shopItem.cost} credits. Remaining credits: ${player.credits}`;
    } else {
        return `❌ Not enough credits to purchase ${shopItem.name}`;
    }
}

const inventory = [];

const shopItem = {
    name: "Cyber Katana",
    cost: 75
}

console.log(buyItem(shopItem, inventory, player));
console.log(inventory);
console.log(`🧮 Final credits: ${player.credits}`);