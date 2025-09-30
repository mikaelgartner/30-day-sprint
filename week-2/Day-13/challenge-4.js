// 🧠 Challenge 4: Inventory System — Item Pickup & Display

/* 🕹️ Scenario:
Your cyberpunk character roams the neon-lit streets, picking up rare gear. You need a system to:
- Add items to the inventory
- Display the current inventory
- Optionally: prevent duplicates or limit inventory size

🧩 Your Task:
Write two functions:
1. addItem(inventory, item)
- Adds the item to the inventory array
- Returns a message like:
- "Picked up: Nano Blade"

2. showInventory(inventory)- Logs all items in the inventory
- Example output:
Inventory:
- Nano Blade
- Titanium Vest

🧪 Sample Setup:
const inventory = [];
const item1 = "Nano Blade";
const item2 = "Titanium Vest";

🔧 Bonus Ideas (Optional)- Prevent duplicates: don’t add the same item twice
- Limit inventory to 5 items max
- Add item objects with name, type, rarity
- Format output like a terminal readout
Would you like to try writing the first function (addItem) yourself and I’ll help you refine it? Or want to sketch both at once and we’ll review together? You’re building real game systems now — and they’re looking slick. 

*/


function addItem(inventory, item) {
    // Placing the item in the inventory array
    inventory.push(item);

    // Returning a loot message like ("Picked up: Nano Blade")
    return `🟢 Loot Acquired: ${item}`;
}

function showInventory(inventory) {
    console.log("📦 Inventory:");
    inventory.forEach((item, index) => {
        console.log(`   ${index + 1}. ${item}`);
    });

}

const inventory = [];
const item1 = "Nano Blade";
const item2 = "Titanium Vest";

console.log(addItem(inventory, item1));
console.log(addItem(inventory, item2));
showInventory(inventory);