// Challenge 1: Cyberpunk Inventory Tracker

/* Scenario
You’re building a system for a cyberpunk RPG where players collect gear. Each item has a name, type (weapon, armor, gadget), and a rarity level (common, rare, epic, legendary). You need to write a function that:
- Accepts an array of item objects.
- Filters out only epic and legendary items.
- Groups them by type.
- Returns an object like this:
{
  weapon: ["Plasma Rifle", "Nano Blade"],
  armor: ["Titanium Vest"],
  gadget: ["Neural Uplink"]
}



🧪 Sample Input
const inventory = [
  { name: "Plasma Rifle", type: "weapon", rarity: "epic" },
  { name: "Leather Jacket", type: "armor", rarity: "common" },
  { name: "Nano Blade", type: "weapon", rarity: "legendary" },
  { name: "Titanium Vest", type: "armor", rarity: "epic" },
  { name: "Neural Uplink", type: "gadget", rarity: "legendary" },
];



🧩 Your Task
Create a function called groupRareItems(inventory) that returns the grouped object above.

💡 Hints
- Use .filter() to isolate rare items
- Use .reduce() to group them by type
- Make sure each type is initialized as an array

 */

function groupRareItems(inventory) {
    // Step 1: Filter only epic and legendary items
    const rareItems = inventory.filter(item => 
        item.rarity === "epic" || item.rarity === "legendary"
    );

    const grouped = {};

    for(let i = 0; i < rareItems.length; i++) {
        const item = rareItems[i];  // Get the item in the first index position
        const type = item.type; // Get the items type ("weapon", "armor")
        const name = item.name; // Get the items name ("Plasma rifle", "Nano Blade")

        if(grouped[type] === undefined) {   // If the type does not exist in grouped, create it
            grouped[type] = [];     // emtpy array for that specific item type
        }

        grouped[type].push(name);   // add the name of the item to the item type array
    }

    return grouped;

}

const inventory = [
  { name: "Plasma Rifle", type: "weapon", rarity: "epic" },
  { name: "Leather Jacket", type: "armor", rarity: "common" },
  { name: "Nano Blade", type: "weapon", rarity: "legendary" },
  { name: "Titanium Vest", type: "armor", rarity: "epic" },
  { name: "Neural Uplink", type: "gadget", rarity: "legendary" },
];

console.log(groupRareItems(inventory));