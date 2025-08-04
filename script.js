// --- Step 1: Ingredient Data ---
// This is the complete, unsorted list of ingredients with all their rarity stats.
// I have also added an 'isPlant', 'isFish', or 'isGolden' property to each ingredient for the new perks.
const originalIngredients = [
    {
        id: "mushroom",
        name: "Mushroom",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                healthRegen: { value: 4.2, duration: 20 },
            },
            rare: {
                food: 24,
                healthRegen: { value: 5.2, duration: 20 },
            },
            epic: {
                food: 28,
                healthRegen: { value: 6.3, duration: 20 },
            },
        }
    },
    {
        id: "giant_mushroom",
        name: "Giant Mushroom",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 31,
                permMaxHealth: { value: 25 },
                maxHealth: { value: 24, duration: 10 },
            },
            rare: {
                food: 39,
                permMaxHealth: { value: 25 },
                maxHealth: { value: 30, duration: 10 },
            },
            epic: {
                food: 46,
                permMaxHealth: { value: 25 },
                maxHealth: { value: 36, duration: 10 },
            },
        }
    },
    {
        id: "heart_berry",
        name: "Heart Berry",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                maxHealth: { value: 25, duration: 10 },
                healthRegen: { value: 2.8, duration: 20 },
            },
            rare: {
                food: 24,
                maxHealth: { value: 31, duration: 10 },
                healthRegen: { value: 3.5, duration: 20 },
            },
            epic: {
                food: 28,
                maxHealth: { value: 38, duration: 10 },
                healthRegen: { value: 4.2, duration: 20 },
            },
        }
    },
    {
        id: "golden_heart_berry",
        name: "Golden Heart Berry",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 18,
                maxHealth: { value: 50, duration: 10 },
                healthRegen: { value: 4.4, duration: 20 },
                physicalMeleeDamage: { value: 17.1, duration: 10 },
            },
            rare: {
                food: 22,
                maxHealth: { value: 62, duration: 10 },
                healthRegen: { value: 5.5, duration: 20 },
                physicalMeleeDamage: { value: 21.4, duration: 10 },
            },
            epic: {
                food: 27,
                maxHealth: { value: 75, duration: 10 },
                healthRegen: { value: 6.6, duration: 20 },
                physicalMeleeDamage: { value: 25.6, duration: 10 },
            },
        }
    },
    {
        id: "glow_tulip",
        name: "Glow Tulip",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 2,
                blueGlow: { value: 5, duration: 10 },
                manaRegen: { value: 1.4, duration: 10 },
            },
            rare: {
                food: 2,
                blueGlow: { value: 6, duration: 10 },
                manaRegen: { value: 1.8, duration: 10 },
            },
            epic: {
                food: 3,
                blueGlow: { value: 8, duration: 10 },
                manaRegen: { value: 2.1, duration: 10 },
            },
        }
    },
    {
        id: "golden_glow_tulip",
        name: "Golden Glow Tulip",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 2,
                blueGlow: { value: 6, duration: 10 },
                manaRegen: { value: 2.3, duration: 10 },
                maxMana: { value: 25, duration: 10 },
            },
            rare: {
                food: 2,
                blueGlow: { value: 8, duration: 10 },
                manaRegen: { value: 2.9, duration: 10 },
                maxMana: { value: 31, duration: 10 },
            },
            epic: {
                food: 3,
                blueGlow: { value: 9, duration: 10 },
                manaRegen: { value: 3.4, duration: 10 },
                maxMana: { value: 38, duration: 10 },
            },
        }
    },
    {
        id: "bomb_pepper",
        name: "Bomb Pepper",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 10,
                movementSpeed: { value: 21, duration: 1 },
            },
            rare: {
                food: 12,
                movementSpeed: { value: 26.2, duration: 1 },
            },
            epic: {
                food: 15,
                movementSpeed: { value: 31.5, duration: 1 },
            },
        }
    },
    {
        id: "golden_bomb_pepper",
        name: "Golden Bomb Pepper",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 11,
                movementSpeed: { value: 26.9, duration: 1 },
                meleeAttackSpeed: { value: 8.9, duration: 10 },
            },
            rare: {
                food: 14,
                movementSpeed: { value: 33.6, duration: 1 },
                meleeAttackSpeed: { value: 11.1, duration: 10 },
            },
            epic: {
                food: 16,
                movementSpeed: { value: 40.4, duration: 1 },
                meleeAttackSpeed: { value: 13.4, duration: 10 },
            },
        }
    },
    {
        id: "carrock",
        name: "Carrock",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 15,
                armor: { value: 23, duration: 10 },
            },
            rare: {
                food: 19,
                armor: { value: 29, duration: 10 },
            },
            epic: {
                food: 22,
                armor: { value: 34, duration: 10 },
            },
        }
    },
    {
        id: "golden_carrock",
        name: "Golden Carrock",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 13,
                armor: { value: 26, duration: 10 },
                knockbackChance: { value: 18, duration: 2 },
            },
            rare: {
                food: 16,
                armor: { value: 32, duration: 10 },
                knockbackChance: { value: 22, duration: 2 },
            },
            epic: {
                food: 20,
                armor: { value: 39, duration: 10 },
                knockbackChance: { value: 27, duration: 2 },
            },
        }
    },
    {
        id: "puffungi",
        name: "Puffungi",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 10,
                reducedBossDamage: { value: 6, duration: 10 },
                healthRegen: { value: 5.5, duration: 20 },
            },
            rare: {
                food: 12,
                reducedBossDamage: { value: 8, duration: 10 },
                healthRegen: { value: 6.9, duration: 20 },
            },
            epic: {
                food: 15,
                reducedBossDamage: { value: 9, duration: 10 },
                healthRegen: { value: 8.2, duration: 20 },
            },
        }
    },
    {
        id: "golden_puffungi",
        name: "Golden Puffungi",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 10,
                reducedBossDamage: { value: 9, duration: 10 },
                healthRegen: { value: 7.9, duration: 20 },
                damageAgainstBosses: { value: 14, duration: 1 },
            },
            rare: {
                food: 12,
                reducedBossDamage: { value: 11, duration: 10 },
                healthRegen: { value: 9.9, duration: 20 },
                damageAgainstBosses: { value: 18, duration: 1 },
            },
            epic: {
                food: 15,
                reducedBossDamage: { value: 14, duration: 10 },
                healthRegen: { value: 11.8, duration: 20 },
                damageAgainstBosses: { value: 21, duration: 1 },
            },
        }
    },
    {
        id: "bloat_oat",
        name: "Bloat Oat",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 43,
                healthRegen: { value: 9.1, duration: 20 },
            },
            rare: {
                food: 54,
                healthRegen: { value: 11.4, duration: 20 },
            },
            epic: {
                food: 64,
                healthRegen: { value: 13.6, duration: 20 },
            },
        }
    },
    {
        id: "golden_bloat_oat",
        name: "Golden Bloat Oat",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 42,
                healthRegen: { value: 12.1, duration: 20 },
                lessFoodDrained: { value: 10, duration: 10 },
            },
            rare: {
                food: 52,
                healthRegen: { value: 15.1, duration: 20 },
                lessFoodDrained: { value: 12, duration: 10 },
            },
            epic: {
                food: 63,
                healthRegen: { value: 18.2, duration: 20 },
                lessFoodDrained: { value: 15, duration: 10 },
            },
        }
    },
    {
        id: "pewpaya",
        name: "Pewpaya",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 6.3, duration: 20 },
                physicalRangeDamage: { value: 22.4, duration: 10 },
            },
            rare: {
                food: 25,
                healthRegen: { value: 7.9, duration: 20 },
                physicalRangeDamage: { value: 28, duration: 10 },
            },
            epic: {
                food: 30,
                healthRegen: { value: 9.4, duration: 20 },
                physicalRangeDamage: { value: 33.6, duration: 10 },
            },
        }
    },
    {
        id: "golden_pewpaya",
        name: "Golden Pewpaya",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 8.2, duration: 20 },
                physicalRangeDamage: { value: 28.2, duration: 10 },
                rangeAttackSpeed: { value: 8.4, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 10.2, duration: 20 },
                physicalRangeDamage: { value: 35.2, duration: 10 },
                rangeAttackSpeed: { value: 10.5, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 12.3, duration: 20 },
                physicalRangeDamage: { value: 42.3, duration: 10 },
                rangeAttackSpeed: { value: 12.6, duration: 10 },
            },
        }
    },
    {
        id: "pinegrapple",
        name: "Pinegrapple",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 5.4, duration: 20 },
                physicalMeleeDamage: { value: 22.4, duration: 10 },
            },
            rare: {
                food: 25,
                healthRegen: { value: 6.8, duration: 20 },
                physicalMeleeDamage: { value: 28, duration: 10 },
            },
            epic: {
                food: 30,
                healthRegen: { value: 8.1, duration: 20 },
                physicalMeleeDamage: { value: 33.6, duration: 10 },
            },
        }
    },
    {
        id: "golden_pinegrapple",
        name: "Golden Pinegrapple",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 9, duration: 20 },
                physicalMeleeDamage: { value: 28.2, duration: 10 },
                meleeAttackSpeed: { value: 8.4, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 11.2, duration: 20 },
                physicalMeleeDamage: { value: 35.2, duration: 10 },
                meleeAttackSpeed: { value: 10.5, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 13.5, duration: 20 },
                physicalMeleeDamage: { value: 42.3, duration: 10 },
                meleeAttackSpeed: { value: 12.6, duration: 10 },
            },
        }
    },
    {
        id: "sunrice",
        name: "Sunrice",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 13,
                glow: { value: 4, duration: 10 },
                magicDamage: { value: 30, duration: 10 },
            },
            rare: {
                food: 16,
                glow: { value: 5, duration: 10 },
                magicDamage: { value: 37.5, duration: 10 },
            },
            epic: {
                food: 20,
                glow: { value: 6, duration: 10 },
                magicDamage: { value: 45, duration: 10 },
            },
        }
    },
    {
        id: "golden_sunrice",
        name: "Golden Sunrice",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 13,
                glow: { value: 4, duration: 10 },
                magicDamage: { value: 43.3, duration: 10 },
                magicBarrier: { value: 49, duration: 10 },
            },
            rare: {
                food: 16,
                glow: { value: 5, duration: 10 },
                magicDamage: { value: 54.1, duration: 10 },
                magicBarrier: { value: 61, duration: 10 },
            },
            epic: {
                food: 20,
                glow: { value: 6, duration: 10 },
                magicDamage: { value: 65, duration: 10 },
                magicBarrier: { value: 74, duration: 10 },
            },
        }
    },
    {
        id: "lunacorn",
        name: "Lunacorn",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 13,
                blueGlow: { value: 4, duration: 10 },
                minionDamage: { value: 30, duration: 10 },
            },
            rare: {
                food: 16,
                blueGlow: { value: 5, duration: 10 },
                minionDamage: { value: 37.5, duration: 10 },
            },
            epic: {
                food: 20,
                blueGlow: { value: 6, duration: 10 },
                minionDamage: { value: 45, duration: 10 },
            },
        }
    },
    {
        id: "golden_lunacorn",
        name: "Golden Lunacorn",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 14,
                blueGlow: { value: 4, duration: 10 },
                minionDamage: { value: 39.5, duration: 10 },
                minionAttackSpeed: { value: 55.2, duration: 10 },
            },
            rare: {
                food: 18,
                blueGlow: { value: 5, duration: 10 },
                minionDamage: { value: 49.4, duration: 10 },
                minionAttackSpeed: { value: 69, duration: 10 },
            },
            epic: {
                food: 21,
                blueGlow: { value: 6, duration: 10 },
                minionDamage: { value: 59.2, duration: 10 },
                minionAttackSpeed: { value: 82.8, duration: 10 },
            },
        }
    },
    {
        id: "dodo_egg",
        name: "Dodo Egg",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 30,
                healthRegen: { value: 4.3, duration: 20 },
                healingRegeneration: { value: 25, duration: 10 },
            },
            rare: {
                food: 38,
                healthRegen: { value: 5.4, duration: 20 },
                healingRegeneration: { value: 31, duration: 10 },
            },
            epic: {
                food: 45,
                healthRegen: { value: 6.4, duration: 20 },
                healingRegeneration: { value: 38, duration: 10 },
            },
        }
    },
    {
        id: "marbled_meat",
        name: "Marbled Meat",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 27,
                healthRegen: { value: 2.6, duration: 20 },
                damage: { value: 13.3, duration: 10 },
            },
            rare: {
                food: 34,
                healthRegen: { value: 3.2, duration: 20 },
                damage: { value: 16.6, duration: 10 },
            },
            epic: {
                food: 40,
                healthRegen: { value: 3.9, duration: 20 },
                damage: { value: 20, duration: 10 },
            },
        }
    },
    {
        id: "larva_meat",
        name: "Larva Meat",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 22,
                healthRegen: { value: 2.8, duration: 20 },
                criticalHitChance: { value: 6, duration: 10 },
            },
            rare: {
                food: 28,
                healthRegen: { value: 3.5, duration: 20 },
                criticalHitChance: { value: 8, duration: 10 },
            },
            epic: {
                food: 33,
                healthRegen: { value: 4.2, duration: 20 },
                criticalHitChance: { value: 9, duration: 10 },
            },
        }
    },
    {
        id: "shiny_larva_meat",
        name: "Shiny Larva Meat",
        isPlant: false,
        isFish: false,
        isGolden: false, // Not a golden food
        rarity: {
            regular: {
                food: 25,
                criticalHitChance: { value: 13, duration: 10 },
                lifeOnMeleeHit: { value: 4, duration: 10 },
            },
            rare: {
                food: 31,
                criticalHitChance: { value: 16, duration: 10 },
                lifeOnMeleeHit: { value: 5, duration: 10 },
            },
            epic: {
                food: 38,
                criticalHitChance: { value: 20, duration: 10 },
                lifeOnMeleeHit: { value: 6, duration: 10 },
            },
        }
    },
    {
        id: "amber_larva",
        name: "Amber Larva",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                permMaxHealth: { value: 50 },
                maxHealth: { value: 52, duration: 5 },
            },
            rare: {
                food: 26,
                permMaxHealth: { value: 50 },
                maxHealth: { value: 65, duration: 5 },
            },
            epic: {
                food: 32,
                permMaxHealth: { value: 50 },
                maxHealth: { value: 78, duration: 5 },
            },
        }
    },
    {
        id: "atlantean_worm_heart",
        name: "Atlantean Worm Heart",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 27,
                healthRegenToAllies: { value: 20, duration: 20 },
                permMaxHealth: { value: 100 },
            },
            rare: {
                food: 34,
                healthRegenToAllies: { value: 25, duration: 20 },
                permMaxHealth: { value: 100 },
            },
            epic: {
                food: 40,
                healthRegenToAllies: { value: 30, duration: 20 },
                permMaxHealth: { value: 100 },
            },
        }
    },
    {
        id: "grumpkin",
        name: "Grumpkin",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 4.3, duration: 20 },
                miningDamage: { value: 45, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 5.4, duration: 20 },
                miningDamage: { value: 56, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 6.4, duration: 20 },
                miningDamage: { value: 68, duration: 10 },
            },
        }
    },
    {
        id: "golden_grumpkin",
        name: "Golden Grumpkin",
        isPlant: true,
        isFish: false,
        isGolden: true,
        rarity: {
            regular: {
                food: 18,
                healthRegen: { value: 6.2, duration: 20 },
                miningDamage: { value: 71, duration: 10 },
                miningSpeed: { value: 7.2, duration: 10 },
            },
            rare: {
                food: 22,
                healthRegen: { value: 7.8, duration: 20 },
                miningDamage: { value: 89, duration: 10 },
                miningSpeed: { value: 9, duration: 10 },
            },
            epic: {
                food: 27,
                healthRegen: { value: 9.3, duration: 20 },
                miningDamage: { value: 106, duration: 10 },
                miningSpeed: { value: 10.8, duration: 10 },
            },
        }
    },
    {
        id: "orange_cave_guppy",
        name: "Orange Cave Guppy",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                healthRegen: { value: 2.1, duration: 20 },
                miningDamage: { value: 8, duration: 10 },
            },
            rare: {
                food: 24,
                healthRegen: { value: 2.6, duration: 20 },
                miningDamage: { value: 10, duration: 10 },
            },
            epic: {
                food: 28,
                healthRegen: { value: 3.2, duration: 20 },
                miningDamage: { value: 12, duration: 10 },
            },
        }
    },
    {
        id: "blue_cave_guppy",
        name: "Blue Cave Guppy",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 2.2, duration: 20 },
                magicBarrier: { value: 13, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 2.8, duration: 20 },
                magicBarrier: { value: 16, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 3.3, duration: 20 },
                magicBarrier: { value: 20, duration: 10 },
            },
        }
    },
    {
        id: "rock_jaw",
        name: "Rock Jaw",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 22,
                healthRegen: { value: 2.5, duration: 20 },
                physicalMeleeDamage: { value: 15.9, duration: 10 },
            },
            rare: {
                food: 28,
                healthRegen: { value: 3.1, duration: 20 },
                physicalMeleeDamage: { value: 19.9, duration: 10 },
            },
            epic: {
                food: 33,
                healthRegen: { value: 3.8, duration: 20 },
                physicalMeleeDamage: { value: 23.8, duration: 10 },
            },
        }
    },
    {
        id: "gem_crab",
        name: "Gem Crab",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 3.1, duration: 20 },
                armor: { value: 14, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 3.9, duration: 20 },
                armor: { value: 18, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 4.6, duration: 20 },
                armor: { value: 22, duration: 10 },
            },
        }
    },
    {
        id: "dagger_fin",
        name: "Dagger Fin",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 3.9, duration: 20 },
                minionDamage: { value: 23.3, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 4.9, duration: 20 },
                minionDamage: { value: 29.1, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 5.8, duration: 20 },
                minionDamage: { value: 35, duration: 10 },
            },
        }
    },
    {
        id: "pink_palace_fish",
        name: "Pink Palace Fish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 22,
                healthRegen: { value: 3.9, duration: 20 },
                meleeAttackSpeed: { value: 9.2, duration: 10 },
            },
            rare: {
                food: 28,
                healthRegen: { value: 4.9, duration: 20 },
                meleeAttackSpeed: { value: 11.5, duration: 10 },
            },
            epic: {
                food: 33,
                healthRegen: { value: 5.8, duration: 20 },
                meleeAttackSpeed: { value: 13.8, duration: 10 },
            },
        }
    },
    {
        id: "teal_palace_fish",
        name: "Teal Palace Fish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 4, duration: 20 },
                rangeAttackSpeed: { value: 10.4, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 5, duration: 20 },
                rangeAttackSpeed: { value: 13, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 6, duration: 20 },
                rangeAttackSpeed: { value: 15.6, duration: 10 },
            },
        }
    },
    {
        id: "crown_squid",
        name: "Crown Squid",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                healthRegen: { value: 5, duration: 20 },
                knockbackChance: { value: 19, duration: 10 },
            },
            rare: {
                food: 24,
                healthRegen: { value: 6.2, duration: 20 },
                knockbackChance: { value: 24, duration: 10 },
            },
            epic: {
                food: 28,
                healthRegen: { value: 7.5, duration: 20 },
                knockbackChance: { value: 28, duration: 10 },
            },
        }
    },
    {
        id: "yellow_blister_head",
        name: "Yellow Blister Head",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 2.6, duration: 20 },
                immuneToSlime: true,
            },
            rare: {
                food: 26,
                healthRegen: { value: 3.2, duration: 20 },
                immuneToSlime: true,
            },
            epic: {
                food: 32,
                healthRegen: { value: 3.9, duration: 20 },
                immuneToSlime: true,
            },
        }
    },
    {
        id: "green_blister_head",
        name: "Green Blister Head",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 2.5, duration: 20 },
                immuneToAcid: true,
            },
            rare: {
                food: 25,
                healthRegen: { value: 3.1, duration: 20 },
                immuneToAcid: true,
            },
            epic: {
                food: 30,
                healthRegen: { value: 3.8, duration: 20 },
                immuneToAcid: true,
            },
        }
    },
    {
        id: "devil_worm",
        name: "Devil Worm",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 3, duration: 20 },
                physicalRangeDamage: { value: 22.8, duration: 10 },
            },
            rare: {
                food: 25,
                healthRegen: { value: 3.8, duration: 20 },
                physicalRangeDamage: { value: 28.5, duration: 10 },
            },
            epic: {
                food: 30,
                healthRegen: { value: 4.5, duration: 20 },
                physicalRangeDamage: { value: 34.2, duration: 10 },
            },
        }
    },
    {
        id: "vampire_eel",
        name: "Vampire Eel",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 3.5, duration: 20 },
                lifeOnMeleeHit: { value: 3, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 4.4, duration: 20 },
                lifeOnMeleeHit: { value: 4, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 5.2, duration: 20 },
                lifeOnMeleeHit: { value: 4, duration: 10 },
            },
        }
    },
    {
        id: "mold_shark",
        name: "Mold Shark",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 4.8, duration: 20 },
                physicalMeleeDamage: { value: 38.6, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 6, duration: 20 },
                physicalMeleeDamage: { value: 48.2, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 7.2, duration: 20 },
                physicalMeleeDamage: { value: 57.9, duration: 10 },
            },
        }
    },
    {
        id: "rot_fish",
        name: "Rot Fish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                immuneToMold: true,
            },
            rare: {
                food: 26,
                immuneToMold: true,
            },
            epic: {
                food: 32,
                immuneToMold: true,
            },
        }
    },
    {
        id: "black_steel_urchin",
        name: "Black Steel Urchin",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                healthRegen: { value: 3.6, duration: 20 },
                armor: { value: 22, duration: 10 },
                thornsDamage: { value: 15, duration: 10 },
            },
            rare: {
                food: 24,
                healthRegen: { value: 4.5, duration: 20 },
                armor: { value: 28, duration: 10 },
                thornsDamage: { value: 19, duration: 10 },
            },
            epic: {
                food: 28,
                healthRegen: { value: 5.4, duration: 20 },
                armor: { value: 33, duration: 10 },
                thornsDamage: { value: 22, duration: 10 },
            },
        }
    },
    {
        id: "azure_feather_fish",
        name: "Azure Feather Fish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 8.1, duration: 20 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 10.1, duration: 20 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 12.2, duration: 20 },
            },
        }
    },
    {
        id: "emerald_feather_fish",
        name: "Emerald Feather Fish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 3, duration: 20 },
                maxMana: { value: 29, duration: 10 },
                magicDamage: { value: 21, duration: 10 },
            },
            rare: {
                food: 25,
                healthRegen: { value: 3.8, duration: 20 },
                maxMana: { value: 36, duration: 10 },
                magicDamage: { value: 26.2, duration: 10 },
            },
            epic: {
                food: 30,
                healthRegen: { value: 4.5, duration: 20 },
                maxMana: { value: 44, duration: 10 },
                magicDamage: { value: 31.5, duration: 10 },
            },
        }
    },
    {
        id: "spirit_veil",
        name: "Spirit Veil",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                movementSpeed: { value: 36.2, duration: 2 },
            },
            rare: {
                food: 24,
                movementSpeed: { value: 45.2, duration: 2 },
            },
            epic: {
                food: 28,
                movementSpeed: { value: 54.3, duration: 2 },
            },
        }
    },
    {
        id: "astral_jelly",
        name: "Astral Jelly",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 5.2, duration: 20 },
                fishing: { value: 63, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 6.5, duration: 20 },
                fishing: { value: 79, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 7.8, duration: 20 },
                fishing: { value: 94, duration: 10 },
            },
        }
    },
    {
        id: "bottom_tracer",
        name: "Bottom Tracer",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 5.8, duration: 20 },
                manaRegen: { value: 2.8, duration: 10 },
            },
            rare: {
                food: 25,
                healthRegen: { value: 7.2, duration: 20 },
                manaRegen: { value: 3.5, duration: 10 },
            },
            epic: {
                food: 30,
                healthRegen: { value: 8.7, duration: 20 },
                manaRegen: { value: 4.2, duration: 10 },
            },
        }
    },
    {
        id: "silver_dart",
        name: "Silver Dart",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 5.5, duration: 20 },
                criticalHitDamage: { value: 31, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 6.9, duration: 20 },
                criticalHitDamage: { value: 39, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 8.2, duration: 20 },
                criticalHitDamage: { value: 46, duration: 10 },
            },
        }
    },
    {
        id: "golden_dart",
        name: "Golden Dart",
        isPlant: false,
        isFish: true,
        isGolden: true,
        rarity: {
            regular: {
                food: 22,
                healthRegen: { value: 5.7, duration: 20 },
                dodgeChance: { value: 11, duration: 10 },
            },
            rare: {
                food: 28,
                healthRegen: { value: 7.1, duration: 20 },
                dodgeChance: { value: 14, duration: 10 },
            },
            epic: {
                food: 33,
                healthRegen: { value: 8.6, duration: 20 },
                dodgeChance: { value: 16, duration: 10 },
            },
        }
    },
    {
        id: "pink_coralotl",
        name: "Pink Coralotl",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 22,
                healthRegen: { value: 4.7, duration: 20 },
                maxMana: { value: 50, duration: 10 },
                magicBarrier: { value: 36, duration: 10 },
            },
            rare: {
                food: 28,
                healthRegen: { value: 5.9, duration: 20 },
                maxMana: { value: 62, duration: 10 },
                magicBarrier: { value: 45, duration: 10 },
            },
            epic: {
                food: 33,
                healthRegen: { value: 7, duration: 20 },
                maxMana: { value: 75, duration: 10 },
                magicBarrier: { value: 54, duration: 10 },
            },
        }
    },
    {
        id: "white_coralotl",
        name: "White Coralotl",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                healthRegen: { value: 5.8, duration: 20 },
                miningSpeed: { value: 14.8, duration: 10 },
            },
            rare: {
                food: 24,
                healthRegen: { value: 7.2, duration: 20 },
                miningSpeed: { value: 18.5, duration: 10 },
            },
            epic: {
                food: 28,
                healthRegen: { value: 8.7, duration: 20 },
                miningSpeed: { value: 22.2, duration: 10 },
            },
        }
    },
    {
        id: "solid_spikeback",
        name: "Solid Spikeback",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                armor: { value: 38, duration: 10 },
                thornsDamage: { value: 50, duration: 10 },
            },
            rare: {
                food: 26,
                armor: { value: 48, duration: 10 },
                thornsDamage: { value: 62, duration: 10 },
            },
            epic: {
                food: 32,
                armor: { value: 57, duration: 10 },
                thornsDamage: { value: 75, duration: 10 },
            },
        }
    },
    {
        id: "sandy_spikeback",
        name: "Sandy Spikeback",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                maxHealth: { value: 78, duration: 10 },
                miningDamage: { value: 206, duration: 10 },
            },
            rare: {
                food: 24,
                maxHealth: { value: 98, duration: 10 },
                miningDamage: { value: 258, duration: 10 },
            },
            epic: {
                food: 28,
                maxHealth: { value: 117, duration: 10 },
                miningDamage: { value: 309, duration: 10 },
            },
        }
    },
    {
        id: "grey_dune_tail",
        name: "Grey Dune Tail",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 6.7, duration: 20 },
                meleeAttackSpeed: { value: 13.9, duration: 10 },
            },
            rare: {
                food: 25,
                healthRegen: { value: 8.4, duration: 20 },
                meleeAttackSpeed: { value: 17.4, duration: 10 },
            },
            epic: {
                food: 30,
                healthRegen: { value: 10, duration: 20 },
                meleeAttackSpeed: { value: 20.8, duration: 10 },
            },
        }
    },
    {
        id: "brown_dune_tail",
        name: "Brown Dune Tail",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 8.1, duration: 20 },
                rangeAttackSpeed: { value: 13.9, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 10.1, duration: 20 },
                rangeAttackSpeed: { value: 17.4, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 12.2, duration: 20 },
                rangeAttackSpeed: { value: 20.8, duration: 10 },
            },
        }
    },
    {
        id: "tornis_kingfish",
        name: "Tornis Kingfish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 7.8, duration: 20 },
                damage: { value: 50.4, duration: 10 },
            },
            rare: {
                food: 25,
                healthRegen: { value: 9.8, duration: 20 },
                damage: { value: 63, duration: 10 },
            },
            epic: {
                food: 30,
                healthRegen: { value: 11.7, duration: 20 },
                damage: { value: 75.6, duration: 10 },
            },
        }
    },
    {
        id: "dark_lava_eater",
        name: "Dark Lava Eater",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                healthRegen: { value: 7.8, duration: 20 },
                lifeOnMeleeHit: { value: 7, duration: 10 },
            },
            rare: {
                food: 24,
                healthRegen: { value: 9.8, duration: 20 },
                lifeOnMeleeHit: { value: 9, duration: 10 },
            },
            epic: {
                food: 28,
                healthRegen: { value: 11.7, duration: 20 },
                lifeOnMeleeHit: { value: 10, duration: 10 },
            },
        }
    },
    {
        id: "bright_lava_eater",
        name: "Bright Lava Eater",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 7.1, duration: 20 },
                healingRegeneration: { value: 21, duration: 10 },
            },
            rare: {
                food: 25,
                healthRegen: { value: 8.9, duration: 20 },
                healingRegeneration: { value: 26, duration: 10 },
            },
            epic: {
                food: 30,
                healthRegen: { value: 10.6, duration: 20 },
                healingRegeneration: { value: 32, duration: 10 },
            },
        }
    },
    {
        id: "verdant_dragonfish",
        name: "Verdant Dragonfish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                criticalHitDamage: { value: 41, duration: 10 },
                immuneToBurning: true,
            },
            rare: {
                food: 26,
                criticalHitDamage: { value: 51, duration: 10 },
                immuneToBurning: true,
            },
            epic: {
                food: 32,
                criticalHitDamage: { value: 62, duration: 10 },
                immuneToBurning: true,
            },
        }
    },
    {
        id: "elder_dragonfish",
        name: "Elder Dragonfish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                criticalHitChance: { value: 14, duration: 10 },
                immuneToBurning: true,
            },
            rare: {
                food: 24,
                criticalHitChance: { value: 18, duration: 10 },
                immuneToBurning: true,
            },
            epic: {
                food: 28,
                criticalHitChance: { value: 21, duration: 10 },
                immuneToBurning: true,
            },
        }
    },
    {
        id: "starlight_nautilus",
        name: "Starlight Nautilus",
        isPlant: false,
        isFish: true,
        isGolden: false, // The prompt does not state this is a golden food
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 17.7, duration: 20 },
                criticalHitChance: { value: 7, duration: 10 },
                meleeAndRangeAttackSpeed: { value: 8.5, duration: 10 },
                permMaxHealth: { value: 100 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 22.1, duration: 20 },
                criticalHitChance: { value: 9, duration: 10 },
                meleeAndRangeAttackSpeed: { value: 10.6, duration: 10 },
                permMaxHealth: { value: 100 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 26.6, duration: 20 },
                criticalHitChance: { value: 10, duration: 10 },
                meleeAndRangeAttackSpeed: { value: 12.8, duration: 10 },
                permMaxHealth: { value: 100 },
            },
        }
    },
    {
        id: "beryll_angle_fish",
        name: "Beryll Angle Fish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                maxHealth: { value: 136, duration: 10 },
            },
            rare: {
                food: 25,
                maxHealth: { value: 170, duration: 10 },
            },
            epic: {
                food: 30,
                maxHealth: { value: 204, duration: 10 },
            },
        }
    },
    {
        id: "glistening_deepstalker",
        name: "Glistening Deepstalker",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                dodgeChance: { value: 13, duration: 10 },
                movementSpeed: { value: 27.2, duration: 1 },
            },
            rare: {
                food: 25,
                dodgeChance: { value: 16, duration: 10 },
                movementSpeed: { value: 34, duration: 1 },
            },
            epic: {
                food: 30,
                dodgeChance: { value: 20, duration: 10 },
                movementSpeed: { value: 40.8, duration: 1 },
            },
        }
    },
    {
        id: "cosmic_form",
        name: "Cosmic Form",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 18,
                petDamage: { value: 30.9, duration: 10 },
            },
            rare: {
                food: 22,
                petDamage: { value: 38.6, duration: 10 },
            },
            epic: {
                food: 27,
                petDamage: { value: 46.4, duration: 10 },
            },
        }
    },
    {
        id: "jasper_angle_fish",
        name: "Jasper Angle Fish",
        isPlant: false,
        isFish: true,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                maxHealth: { value: 96, duration: 10 },
                armor: { value: 45, duration: 10 },
            },
            rare: {
                food: 24,
                maxHealth: { value: 120, duration: 10 },
                armor: { value: 56, duration: 10 },
            },
            epic: {
                food: 28,
                maxHealth: { value: 144, duration: 10 },
                armor: { value: 68, duration: 10 },
            },
        }
    },
    {
        id: "splendid_deepstalker",
        name: "Splendid Deepstalker",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                dodgeChance: { value: 10, duration: 10 },
                movementSpeed: { value: 21.2, duration: 1 },
                meleeAndRangeAttackSpeed: { value: 11.3, duration: 10 },
            },
            rare: {
                food: 25,
                dodgeChance: { value: 12, duration: 10 },
                movementSpeed: { value: 26.5, duration: 1 },
                meleeAndRangeAttackSpeed: { value: 14.1, duration: 10 },
            },
            epic: {
                food: 30,
                dodgeChance: { value: 15, duration: 10 },
                movementSpeed: { value: 31.8, duration: 1 },
                meleeAndRangeAttackSpeed: { value: 17, duration: 10 },
            },
        }
    },
    {
        id: "terra_trilobite",
        name: "Terra Trilobite",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                maxHealth: { value: 103, duration: 10 },
                miningDamage: { value: 344, duration: 10 },
            },
            rare: {
                food: 24,
                maxHealth: { value: 129, duration: 10 },
                miningDamage: { value: 430, duration: 10 },
            },
            epic: {
                food: 28,
                maxHealth: { value: 154, duration: 10 },
                miningDamage: { value: 516, duration: 10 },
            },
        }
    },
    {
        id: "litho_trilobite",
        name: "Litho Trilobite",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 22,
                healthRegen: { value: 5.5, duration: 20 },
                maxMana: { value: 69, duration: 10 },
                magicBarrier: { value: 43, duration: 10 },
            },
            rare: {
                food: 28,
                healthRegen: { value: 6.9, duration: 20 },
                maxMana: { value: 86, duration: 10 },
                magicBarrier: { value: 54, duration: 10 },
            },
            epic: {
                food: 33,
                healthRegen: { value: 8.2, duration: 20 },
                maxMana: { value: 104, duration: 10 },
                magicBarrier: { value: 64, duration: 10 },
            },
        }
    },
    {
        id: "greenhorn_pico",
        name: "Greenhorn Pico",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 21,
                healthRegen: { value: 6.6, duration: 40 },
                minionAttackSpeed: { value: 36.8, duration: 10 },
                minionCriticalHitChance: { value: 12, duration: 10 },
            },
            rare: {
                food: 26,
                healthRegen: { value: 8.2, duration: 40 },
                minionAttackSpeed: { value: 46, duration: 10 },
                minionCriticalHitChance: { value: 15, duration: 10 },
            },
            epic: {
                food: 32,
                healthRegen: { value: 9.9, duration: 40 },
                minionAttackSpeed: { value: 55.2, duration: 10 },
                minionCriticalHitChance: { value: 18, duration: 10 },
            },
        }
    },
    {
        id: "pinkhorn_pico",
        name: "Pinkhorn Pico",
        isPlant: true,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 20,
                healthRegen: { value: 9.5, duration: 20 },
                minionDamage: { value: 52.1, duration: 10 },
            },
            rare: {
                food: 25,
                healthRegen: { value: 11.9, duration: 20 },
                minionDamage: { value: 65.1, duration: 10 },
            },
            epic: {
                food: 30,
                healthRegen: { value: 14.2, duration: 20 },
                minionDamage: { value: 78.2, duration: 10 },
            },
        }
    },
    {
        id: "riftian_lampfish",
        name: "Riftian Lampfish",
        isPlant: false,
        isFish: false,
        isGolden: false,
        rarity: {
            regular: {
                food: 19,
                healthRegen: { value: 7.2, duration: 20 },
                maxMana: { value: 58, duration: 10 },
                magicDamage: { value: 27.6, duration: 10 },
                blueGlow: { value: 5, duration: 10 },
            },
            rare: {
                food: 24,
                healthRegen: { value: 9, duration: 20 },
                maxMana: { value: 72, duration: 10 },
                magicDamage: { value: 34.5, duration: 10 },
                blueGlow: { value: 6, duration: 10 },
            },
            epic: {
                food: 28,
                healthRegen: { value: 10.8, duration: 20 },
                maxMana: { value: 87, duration: 10 },
                magicDamage: { value: 41.4, duration: 10 },
                blueGlow: { value: 8, duration: 10 },
            },
        }
    },
];

// A working copy of the ingredients array that we will sort.
let sortedIngredients = [...originalIngredients];


// A custom rounding function for Core Keeper's rules
function coreKeeperRound(value) {
    const decimalPart = value - Math.floor(value);
    if (decimalPart >= 0.5) {
        return Math.ceil(value);
    } else {
        return Math.floor(value);
    }
}

// --- Step 2: Calculation Logic ---
function calculateFoodEffects(ing1Id, ing1Rarity, ing2Id, ing2Rarity, foodPerkLevel, fastFoodPerkLevel, longLastingFoodPerkLevel, eatVegetablesPerkLevel, omega3PerkLevel, masterChefEnabled, resultQuality) {
    // Get the original ingredient data to prevent cumulative stacking of perks
    const ingredient1 = originalIngredients.find(ing => ing.id === ing1Id);
    const ingredient2 = originalIngredients.find(ing => ing.id === ing2Id);
    
    if (!ingredient1 || !ingredient2) {
        return "Please select two ingredients.";
    }

    const effects1 = ingredient1.rarity[ing1Rarity];
    const effects2 = ingredient2.rarity[ing2Rarity];
    
    // Create a deep copy to avoid modifying the original data
    let result = {};
    function combineEffects(eff1, eff2, target) {
        for (const key in eff1) {
            if (typeof eff1[key] === 'object') {
                target[key] = { ...eff1[key] };
            } else {
                target[key] = eff1[key];
            }
        }
        for (const key in eff2) {
            if (key === 'maxHealth') {
                target.maxHealth = {
                    value: (target.maxHealth?.value || 0) + eff2.maxHealth.value,
                    duration: Math.max((target.maxHealth?.duration || 0), eff2.maxHealth.duration)
                };
            } else if (key === 'permMaxHealth') {
                target.permMaxHealth = {
                    value: (target.permMaxHealth?.value || 0) + eff2.permMaxHealth.value
                };
            } else if (!target[key]) {
                if (typeof eff2[key] === 'object') {
                    target[key] = { ...eff2[key] };
                } else {
                    target[key] = eff2[key];
                }
            } else {
                const val1 = typeof target[key] === 'object' ? target[key].value : target[key];
                const val2 = typeof eff2[key] === 'object' ? eff2[key].value : eff2[key];
                if (val2 > val1) {
                    if (typeof eff2[key] === 'object') {
                        target[key] = { ...eff2[key] };
                    } else {
                        target[key] = eff2[key];
                    }
                }
            }
        }
    }

    combineEffects(effects1, effects2, result);

    // Master Chef bonus applied after base calculation
    if (masterChefEnabled && resultQuality) {
        let qualityMultiplier = 1;
        if (resultQuality === 'rare') {
            qualityMultiplier = 1.25;
        } else if (resultQuality === 'epic') {
            qualityMultiplier = 1.50;
        }
        
        // Check for two golden ingredients (excluding Shiny Larva Meat)
        if (ingredient1.isGolden && ingredient2.isGolden) {
            qualityMultiplier += 0.15;
        }

        for (const key in result) {
            // Apply multiplier to all effects except permMaxHealth
            if (key !== 'permMaxHealth' && typeof result[key] === 'object' && result[key].value !== undefined) {
                result[key].value = result[key].value * qualityMultiplier;
                if (result[key].duration !== undefined) {
                    result[key].duration = result[key].duration * qualityMultiplier;
                }
            } else if (key === 'food') {
                result[key] = result[key] * qualityMultiplier;
            }
        }
    }

    // Apply the "Utilizing every nutrient" perk
    if (result.food && foodPerkLevel > 0) {
        const foodMultiplier = 1 + (foodPerkLevel * 0.05);
        result.food = result.food * foodMultiplier;
    }
    
    // Apply the "Fast food" skill
    if (fastFoodPerkLevel > 0) {
        const bonusMeleeAttackSpeed = fastFoodPerkLevel * 1;
        const bonusDuration = 0.5;

        if (!result.meleeAttackSpeed) {
            result.meleeAttackSpeed = { value: 0, duration: 0 };
        }
        
        result.meleeAttackSpeed.value = result.meleeAttackSpeed.value + bonusMeleeAttackSpeed;
        result.meleeAttackSpeed.duration = Math.max(result.meleeAttackSpeed.duration, bonusDuration);
    }

    // Apply the "Long-lasting food" skill to all effects with a duration
    if (longLastingFoodPerkLevel > 0) {
        const durationMultiplier = 1 + (longLastingFoodPerkLevel * 0.06);
        for (const key in result) {
            if (typeof result[key] === 'object' && result[key].duration !== undefined) {
                result[key].duration = result[key].duration * durationMultiplier;
            }
        }
    }
    
    // Apply the "Eat your vegetables!" perk
    const isPlantCombo = (ingredient1.isPlant || ingredient2.isPlant);
    if (isPlantCombo && result.food && eatVegetablesPerkLevel > 0) {
        const foodMultiplier = 1 + (eatVegetablesPerkLevel * 0.05);
        result.food = result.food * foodMultiplier;
    }

    // Apply the "Power of Omega-3!" perk
    const isFishCombo = (ingredient1.isFish || ingredient2.isFish);
    if (isFishCombo && omega3PerkLevel > 0) {
        // Find the base damageAgainstBosses value from the combined effects
        let baseDamageAgainstBosses = 0;
        if (effects1.damageAgainstBosses?.value > baseDamageAgainstBosses) {
            baseDamageAgainstBosses = effects1.damageAgainstBosses.value;
        }
        if (effects2.damageAgainstBosses?.value > baseDamageAgainstBosses) {
            baseDamageAgainstBosses = effects2.damageAgainstBosses.value;
        }

        // Apply bonus to the current damageAgainstBosses value if it exists, otherwise create it
        if (!result.damageAgainstBosses) {
            result.damageAgainstBosses = { value: 0, duration: 0 };
        }
        
        const bonusDamage = baseDamageAgainstBosses * (omega3PerkLevel * 0.03);
        result.damageAgainstBosses.value += bonusDamage;
        // Ensure duration is set, taking the max of the two ingredients or a default of 10 if neither has it.
        result.damageAgainstBosses.duration = Math.max(result.damageAgainstBosses.duration, effects1.damageAgainstBosses?.duration || 0, effects2.damageAgainstBosses?.duration || 0, 10);
    }


    // Apply meleeAndRangeAttackSpeed to both melee and range attack speed
    if (result.meleeAndRangeAttackSpeed) {
        const sharedValue = result.meleeAndRangeAttackSpeed.value;
        const sharedDuration = result.meleeAndRangeAttackSpeed.duration;

        if (!result.meleeAttackSpeed) {
            result.meleeAttackSpeed = { value: 0, duration: 0 };
        }
        result.meleeAttackSpeed.value = Math.max(result.meleeAttackSpeed.value, sharedValue);
        result.meleeAttackSpeed.duration = Math.max(result.meleeAttackSpeed.duration, sharedDuration);

        if (!result.rangeAttackSpeed) {
            result.rangeAttackSpeed = { value: 0, duration: 0 };
        }
        result.rangeAttackSpeed.value = Math.max(result.rangeAttackSpeed.value, sharedValue);
        result.rangeAttackSpeed.duration = Math.max(result.rangeAttackSpeed.duration, sharedDuration);

        delete result.meleeAndRangeAttackSpeed;
    }
    
    return result;
}

// --- Step 3: UI Interaction ---
document.addEventListener('DOMContentLoaded', () => {
    const ingredient1Select = document.getElementById('ingredient1');
    const ingredient2Select = document.getElementById('ingredient2');
    const calculateButton = document.getElementById('calculateButton');
    const randomButton = document.getElementById('randomButton'); // New button
    const resultsDiv = document.getElementById('results');
    const sortBySelect = document.getElementById('sort-by');
    const masterChefEnabledCheckbox = document.getElementById('masterChefEnabled');
    const qualityRareRadio = document.getElementById('qualityRare');
    const qualityEpicRadio = document.getElementById('qualityEpic');
    
    function populateDropdowns() {
        ingredient1Select.innerHTML = '';
        ingredient2Select.innerHTML = '';

        const emptyOption = document.createElement('option');
        emptyOption.value = "";
        emptyOption.textContent = "Select an Ingredient";
        ingredient1Select.appendChild(emptyOption.cloneNode(true));
        ingredient2Select.appendChild(emptyOption.cloneNode(true));

        sortedIngredients.forEach(ingredient => {
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

    function sortIngredients(type) {
        if (type === 'name') {
            sortedIngredients.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            sortedIngredients = [...originalIngredients];
        }
        populateDropdowns();
    }

    sortBySelect.addEventListener('change', (event) => {
        sortIngredients(event.target.value);
    });

    masterChefEnabledCheckbox.addEventListener('change', () => {
        const isChecked = masterChefEnabledCheckbox.checked;
        qualityRareRadio.disabled = !isChecked;
        qualityEpicRadio.disabled = !isChecked;
        if (!isChecked) {
            qualityRareRadio.checked = false;
            qualityEpicRadio.checked = false;
        }
    });

    function getRandomRarity() {
        const rarities = ['regular', 'rare', 'epic'];
        return rarities[Math.floor(Math.random() * rarities.length)];
    }

    function randomizeAndCalculate() {
        const randomIndex1 = Math.floor(Math.random() * originalIngredients.length);
        let randomIndex2 = Math.floor(Math.random() * originalIngredients.length);
        
        // Ensure ingredient 2 is different from ingredient 1 unless there's only one ingredient.
        if (originalIngredients.length > 1) {
            while (randomIndex2 === randomIndex1) {
                randomIndex2 = Math.floor(Math.random() * originalIngredients.length);
            }
        }
        
        const randomIng1 = originalIngredients[randomIndex1];
        const randomIng2 = originalIngredients[randomIndex2];
        const randomRarity1 = getRandomRarity();
        const randomRarity2 = getRandomRarity();
        
        // Set the UI to reflect the random choices
        ingredient1Select.value = randomIng1.id;
        ingredient2Select.value = randomIng2.id;
        document.querySelector(`input[name="rarity1"][value="${randomRarity1}"]`).checked = true;
        document.querySelector(`input[name="rarity2"][value="${randomRarity2}"]`).checked = true;
        
        // Get perk levels from UI
        const foodPerkLevel = parseInt(document.getElementById('foodPerkLevel').value, 10);
        const fastFoodPerkLevel = parseInt(document.getElementById('fastFoodPerkLevel').value, 10);
        const longLastingFoodPerkLevel = parseInt(document.getElementById('longLastingFoodPerkLevel').value, 10);
        const eatVegetablesPerkLevel = parseInt(document.getElementById('eatVegetablesPerkLevel').value, 10);
        const omega3PerkLevel = parseInt(document.getElementById('omega3PerkLevel').value, 10);

        // Master Chef perk
        const masterChefEnabled = masterChefEnabledCheckbox.checked;
        const resultQuality = document.querySelector('input[name="resultQuality"]:checked')?.value || null;

        const effects = calculateFoodEffects(randomIng1.id, randomRarity1, randomIng2.id, randomRarity2, foodPerkLevel, fastFoodPerkLevel, longLastingFoodPerkLevel, eatVegetablesPerkLevel, omega3PerkLevel, masterChefEnabled, resultQuality);
        displayResults(effects);
    }

    calculateButton.addEventListener('click', () => {
        const ing1Id = ingredient1Select.value;
        const ing2Id = ingredient2Select.value;
        const ing1Rarity = document.querySelector('input[name="rarity1"]:checked').value;
        const ing2Rarity = document.querySelector('input[name="rarity2"]:checked').value;
        const foodPerkLevel = parseInt(document.getElementById('foodPerkLevel').value, 10);
        const fastFoodPerkLevel = parseInt(document.getElementById('fastFoodPerkLevel').value, 10);
        const longLastingFoodPerkLevel = parseInt(document.getElementById('longLastingFoodPerkLevel').value, 10);
        const eatVegetablesPerkLevel = parseInt(document.getElementById('eatVegetablesPerkLevel').value, 10);
        const omega3PerkLevel = parseInt(document.getElementById('omega3PerkLevel').value, 10);
        const masterChefEnabled = masterChefEnabledCheckbox.checked;
        const resultQuality = document.querySelector('input[name="resultQuality"]:checked')?.value || null;
        
        const effects = calculateFoodEffects(ing1Id, ing1Rarity, ing2Id, ing2Rarity, foodPerkLevel, fastFoodPerkLevel, longLastingFoodPerkLevel, eatVegetablesPerkLevel, omega3PerkLevel, masterChefEnabled, resultQuality);
        displayResults(effects);
    });

    randomButton.addEventListener('click', randomizeAndCalculate);

    function displayResults(effects) {
        resultsDiv.innerHTML = '';
        
        if (typeof effects === 'string') {
            resultsDiv.textContent = effects;
            return;
        }

        for (const key in effects) {
            const effect = effects[key];
            const p = document.createElement('p');
            let text = '';
            
            // Custom function to round numbers with the specified logic
            function roundValue(num) {
                const decimalPart = num - Math.floor(num);
                if (decimalPart >= 0.5) {
                    return Math.ceil(num);
                } else {
                    return Math.floor(num);
                }
            }

            if (key === 'food') {
                text = `+${roundValue(effect)} Food Amount`;
            } else if (key === 'healthRegen') {
                text = `+${effect.value.toFixed(1)} Health every second for ${roundValue(effect.duration)} seconds`;
            } else if (key === 'healthRegenToAllies') {
                text = `+${roundValue(effect.value)} Health every second to you and all nearby allies for ${roundValue(effect.duration)} seconds`;
            } else if (key === 'maxHealth') {
                text = `+${roundValue(effect.value)} Max Health for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'permMaxHealth') {
                text = `Perm +${roundValue(effect.value)} Max Health`;
            } else if (key === 'physicalMeleeDamage') {
                text = `+${effect.value.toFixed(2)}% Physical Melee Damage for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'physicalRangeDamage') {
                text = `+${effect.value.toFixed(2)}% Physical Range Damage for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'meleeAttackSpeed') {
                text = `+${effect.value.toFixed(2)}% Melee Attack Speed for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'rangeAttackSpeed') {
                text = `+${effect.value.toFixed(2)}% Range Attack Speed for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'movementSpeed') {
                text = `+${effect.value.toFixed(2)}% Movement Speed for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'armor') {
                text = `+${roundValue(effect.value)} Armor for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'knockbackChance') {
                text = `+${roundValue(effect.value)}% Chance for Knockback on Melee Hit for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'reducedBossDamage') {
                text = `+${roundValue(effect.value)}% Reduced Damage Taken from Bosses for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'damageAgainstBosses') {
                text = `+${effect.value.toFixed(2)}% Damage Against Bosses for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'lessFoodDrained') {
                text = `+${roundValue(effect.value)}% Less Food Drained when Running for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'glow') {
                text = `+${roundValue(effect.value)} Glow for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'blueGlow') {
                text = `+${roundValue(effect.value)} Blue Glow for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'magicDamage') {
                text = `+${effect.value.toFixed(2)}% Magic Damage for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'magicBarrier') {
                text = `+${roundValue(effect.value)} Magic Barrier for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'minionDamage') {
                text = `+${effect.value.toFixed(2)}% Minion Damage for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'minionAttackSpeed') {
                text = `+${effect.value.toFixed(2)}% Minion Attack Speed for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'minionCriticalHitChance') {
                text = `+${roundValue(effect.value)}% Minion Critical Hit Chance for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'healingRegeneration') {
                text = `+${roundValue(effect.value)}% More Healing from Health over Time Regeneration for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'damage') {
                text = `+${effect.value.toFixed(2)}% Damage for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'criticalHitChance') {
                text = `+${roundValue(effect.value)}% Critical Hit Chance for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'lifeOnMeleeHit') {
                text = `+${roundValue(effect.value)} Life on Melee Hit for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'miningDamage') {
                text = `+${roundValue(effect.value)} Mining Damage for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'miningSpeed') {
                text = `+${effect.value.toFixed(2)}% Mining Speed for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'maxMana') {
                text = `+${roundValue(effect.value)} Max Mana for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'thornsDamage') {
                text = `+${roundValue(effect.value)} Thorns Damage for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'fishing') {
                text = `+${roundValue(effect.value)} Fishing for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'dodgeChance') {
                text = `+${roundValue(effect.value)}% Dodge Chance for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'criticalHitDamage') {
                text = `+${roundValue(effect.value)}% Critical Hit Damage for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'meleeAndRangeAttackSpeed') {
                text = `+${roundValue(effect.value)}% Melee and Range Attack Speed for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'petDamage') {
                text = `+${effect.value.toFixed(2)}% Damage dealt by your pet for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'manaRegen') {
                text = `+${roundValue(effect.value)} Mana every second for ${roundValue(effect.duration)} minutes`;
            } else if (key === 'immuneToSlime') {
                text = 'Immune to being slowed by slime';
            } else if (key === 'immuneToAcid') {
                text = 'Immune to acid damage';
            } else if (key === 'immuneToMold') {
                text = 'Immune to mold infection';
            } else if (key === 'immuneToBurning') {
                text = 'Immune to burning';
            } else {
                if (typeof effect === 'object' && effect.duration) {
                    text = `${key}: ${effect.value.toFixed(2)} (for ${roundValue(effect.duration)} mins)`;
                } else {
                    text = `${key}: ${effect}`;
                }
            }
            p.textContent = text;
            resultsDiv.appendChild(p);
        }
    }

    populateDropdowns();
});
