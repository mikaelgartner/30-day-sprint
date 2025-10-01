 /* 🟣 Option 3: Cyberpunk Mission Terminal 

🕹️ Concept:
Build a sleek, interactive terminal where users receive randomized missions from a 
cyberpunk syndicate. Think of it as a digital quest board with glowing UI and 
mysterious objectives.

💻 Features:
- Mission Generator: Click a button to receive a random mission (from a predefined list)
- Mission Log: Display the current mission with stylized formatting
- Syndicate Seal: Add a glowing logo or animated SVG for flair
- Optional Timer: Countdown for mission expiration (bonus challenge)

📦 Sample Mission List:
const missions = [
  "Intercept the data courier near Neon Alley.",
  "Hack the vault at SynTek Industries.",
  "Deliver encrypted package to the underground lab.",
  "Neutralize rogue AI node in Sector 7.",
  "Extract intel from the VR dive bar in Gridpoint."
];



🧪 Stretch Goals:
- Add difficulty levels (Easy, Medium, Hard)
- Include mission rewards (credits, gear, reputation)
- Style with animated background or terminal flicker effect

*/

// Object with 3 different difficulty arrays (easy, medium and hard)
const missions = {
    easy: ["Intercept the data courier near Neon Alley.",
         "Deliver encrypted package to the underground lab."],
    medium: ["Hack the vault at SynTek Industries.",
         "Extract intel from the VR dive bar in Gridpoint."],
    hard: ["Neutralize rogue AI in Sector 7."]
}
  
// Helper function getSelectedDifficulty()
function getSelectedDifficulty() {
    const radios = document.getElementsByName("difficulty");
    let selectedDifficulty;
    for (let radio of radios) {
        if (radio.checked) {
            selectedDifficulty = radio.value;
            break;
        }
    }

    missionGenerator(missions[selectedDifficulty], selectedDifficulty);
}

// Add eventListener to generate mission button. Calls function missionGenerator on "click"
document.getElementById("generateBtn").addEventListener("click", function() {
     const difficulty = getSelectedDifficulty();
     missionGenerator(missions[difficulty], difficulty);
    });

function missionGenerator(missionArray, difficulty) {
    const randomMission = missionArray[Math.floor(Math.random() * missionArray.length)];
    document.getElementById("missionLog").textContent = `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mission: ${randomMission}`;
}
