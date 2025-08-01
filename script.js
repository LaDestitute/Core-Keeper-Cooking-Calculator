// --- Step 1: Ingredient Data ---
const ingredients = [
    {
        id: "bomb_pepper",
        name: "Bomb Pepper",
        rarity: {
            regular: {
                food: 15,
                healthRegen: { value: 2.8, duration: 20 },
                meleeDamage: { value: 17.1, duration: 10 },
            },
            rare: {
                food: 18,
                healthRegen: { value: 3.2, duration: 20 },
                meleeDamage: { value: 21.3, duration: 10 },
            },
            epic: {
                food: 21,
                healthRegen: { value: 3.6, duration: 20 },
                meleeDamage: { value: 25.6, duration: 10 },
            },
        }
    },
    {
        id: "heart_berry",
        name: "Heart Berry",
        rarity: {
            regular: {
                food: 31,
                healthRegen: { value: 0.8, duration: 20 },
                maxHealth: { value: 24, duration: 10 },
                permMaxHealth: { value: 25 }
            },
            rare: {
                food: 39,
                healthRegen: { value: 1.0, duration: 20 },
                maxHealth: { value: 30, duration: 10 },
                permMaxHealth: { value: 25 }
            },
            epic: {
                food: 46,
                healthRegen: { value: 1.2, duration: 20 },
                maxHealth: { value: 36, duration: 10 },
                permMaxHealth: { value: 25 }
            },
        }
    }
];

// --- Step 2: Calculation Logic ---
function calculateFoodEffects(ing1Id, ing1Rarity, ing2Id, ing2Rarity) {
    const ingredient1 = ingredients.find(ing => ing.id === ing1Id);
    const ingredient2 = ingredients.find(ing => ing.id === ing2Id);
    
    if (!ingredient1 || !ingredient2) {
        return "Please select two ingredients.";
    }

    const effects1 = ingredient1.rarity[ing1Rarity];
    const effects2 = ingredient2.rarity[ing2Rarity];
    
    const result = {};

    // Combine effects
    function combineEffects(eff1, eff2, target) {
        for (const key in eff1) {
            target[key] = eff1[key]; // Copy the value directly, it could be a number or an object
        }
        for (const key in eff2) {
            if (key === 'maxHealth') { // Additive
                target.maxHealth = {
                    value: (target.maxHealth?.value || 0) + eff2.maxHealth.value,
                    duration: Math.max((target.maxHealth?.duration || 0), eff2.maxHealth.duration)
                };
            } else if (key === 'permMaxHealth') { // Additive
                target.permMaxHealth = {
                    value: (target.permMaxHealth?.value || 0) + eff2.permMaxHealth.value
                };
            } else if (key === 'food') { // Additive, for simple number values
                target.food = (target.food || 0) + eff2.food;
            } else if (!target[key] || (eff2[key].value > target[key].value)) { // Take highest
                target[key] = eff2[key];
            }
        }
    }

    combineEffects(effects1, effects2, result);
    
    return result;
}

// --- Step 3: UI Interaction ---
document.addEventListener('DOMContentLoaded', () => {
    const ingredient1Select = document.getElementById('ingredient1');
    const ingredient2Select = document.getElementById('ingredient2');
    const calculateButton = document.getElementById('calculateButton');
    const resultsDiv = document.getElementById('results');

    // Populate the dropdowns
    function populateDropdowns() {
        ingredients.forEach(ingredient => {
            const option1 = document.createElement('option');
            option1.value = ingredient.id;
            option1.textContent = ingredient.name;
            ingredient1Select.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = ingredient.id;
            option2.textContent = ingredient.name;
            ingredient2Select.appendChild(option2);
        });
    }

    // Display the results
    function displayResults(effects) {
        resultsDiv.innerHTML = ''; // Clear previous results
        
        if (typeof effects === 'string') {
            resultsDiv.textContent = effects;
            return;
        }

        for (const key in effects) {
            const effect = effects[key];
            const p = document.createElement('p');
            let text = '';
            
            // This is the updated part, now correctly checking for type
            if (key === 'food') {
                text = `+${effect} Food Amount`;
            } else if (key === 'healthRegen') {
                text = `+${effect.value} Health every second for ${effect.duration} seconds`;
            } else if (key === 'maxHealth') {
                text = `+${effect.value} Max Health for ${effect.duration} minutes`;
            } else if (key === 'permMaxHealth') {
                text = `Perm +${effect.value} Max Health`;
            } else if (key === 'meleeDamage') {
                text = `+${effect.value}% Physical Melee Damage for ${effect.duration} minutes`;
            } else {
                // A generic display for other effects
                // This is a catch-all for effects not explicitly handled above
                // We must be careful if the effect is a simple number or an object
                if (typeof effect === 'object' && effect.duration) {
                    text = `${key}: ${effect.value} (for ${effect.duration} mins)`;
                } else {
                    text = `${key}: ${effect}`;
                }
            }
            p.textContent = text;
            resultsDiv.appendChild(p);
        }
    }

    // Event listener for the calculate button
    calculateButton.addEventListener('click', () => {
        const ing1Id = ingredient1Select.value;
        const ing2Id = ingredient2Select.value;
        const ing1Rarity = document.querySelector('input[name="rarity1"]:checked').value;
        const ing2Rarity = document.querySelector('input[name="rarity2"]:checked').value;
        
        const effects = calculateFoodEffects(ing1Id, ing1Rarity, ing2Id, ing2Rarity);
        displayResults(effects);
    });

    populateDropdowns();
});
