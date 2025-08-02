// --- Step 1: Ingredient Data ---
// This is the complete, unsorted list of ingredients with all their rarity stats.
// I have combined the original data with the new entries from your uploaded file.
const originalIngredients = [
    {
        id: "mushroom",
        name: "Mushroom",
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


// --- Step 2: Calculation Logic ---
function calculateFoodEffects(ing1Id, ing1Rarity, ing2Id, ing2Rarity) {
    const ingredient1 = sortedIngredients.find(ing => ing.id === ing1Id);
    const ingredient2 = sortedIngredients.find(ing => ing.id === ing2Id);
    
    if (!ingredient1 || !ingredient2) {
        return "Please select two ingredients.";
    }

    const effects1 = ingredient1.rarity[ing1Rarity];
    const effects2 = ingredient2.rarity[ing2Rarity];
    
    const result = {};

    function combineEffects(eff1, eff2, target) {
        for (const key in eff1) {
            target[key] = eff1[key];
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
                target[key] = eff2[key];
            } else {
                const val1 = typeof target[key] === 'object' ? target[key].value : target[key];
                const val2 = typeof eff2[key] === 'object' ? eff2[key].value : eff2[key];

                if (val2 > val1) {
                    target[key] = eff2[key];
                }
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
    const sortBySelect = document.getElementById('sort-by');

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

    calculateButton.addEventListener('click', () => {
        const ing1Id = ingredient1Select.value;
        const ing2Id = ingredient2Select.value;
        const ing1Rarity = document.querySelector('input[name="rarity1"]:checked').value;
        const ing2Rarity = document.querySelector('input[name="rarity2"]:checked').value;
        
        const effects = calculateFoodEffects(ing1Id, ing1Rarity, ing2Id, ing2Rarity);
        displayResults(effects);
    });

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
            
            if (key === 'food') {
                text = `+${effect} Food Amount`;
            } else if (key === 'healthRegen') {
                text = `+${effect.value} Health every second for ${effect.duration} seconds`;
            } else if (key === 'healthRegenToAllies') {
                text = `+${effect.value} Health every second to you and all nearby allies for ${effect.duration} seconds`;
            } else if (key === 'maxHealth') {
                text = `+${effect.value} Max Health for ${effect.duration} minutes`;
            } else if (key === 'permMaxHealth') {
                text = `Perm +${effect.value} Max Health`;
            } else if (key === 'physicalMeleeDamage') {
                text = `+${effect.value}% Physical Melee Damage for ${effect.duration} minutes`;
            } else if (key === 'physicalRangeDamage') {
                text = `+${effect.value}% Physical Range Damage for ${effect.duration} minutes`;
            } else if (key === 'meleeAttackSpeed') {
                text = `+${effect.value}% Melee Attack Speed for ${effect.duration} minutes`;
            } else if (key === 'rangeAttackSpeed') {
                text = `+${effect.value}% Range Attack Speed for ${effect.duration} minutes`;
            } else if (key === 'movementSpeed') {
                text = `+${effect.value}% Movement Speed for ${effect.duration} minutes`;
            } else if (key === 'armor') {
                text = `+${effect.value} Armor for ${effect.duration} minutes`;
            } else if (key === 'knockbackChance') {
                text = `+${effect.value}% Chance for Knockback on Melee Hit for ${effect.duration} minutes`;
            } else if (key === 'reducedBossDamage') {
                text = `+${effect.value}% Reduced Damage Taken from Bosses for ${effect.duration} minutes`;
            } else if (key === 'damageAgainstBosses') {
                text = `+${effect.value}% Damage Against Bosses for ${effect.duration} minutes`;
            } else if (key === 'lessFoodDrained') {
                text = `+${effect.value}% Less Food Drained when Running for ${effect.duration} minutes`;
            } else if (key === 'glow') {
                text = `+${effect.value} Glow for ${effect.duration} minutes`;
            } else if (key === 'blueGlow') {
                text = `+${effect.value} Blue Glow for ${effect.duration} minutes`;
            } else if (key === 'magicDamage') {
                text = `+${effect.value}% Magic Damage for ${effect.duration} minutes`;
            } else if (key === 'magicBarrier') {
                text = `+${effect.value} Magic Barrier for ${effect.duration} minutes`;
            } else if (key === 'minionDamage') {
                text = `+${effect.value}% Minion Damage for ${effect.duration} minutes`;
            } else if (key === 'minionAttackSpeed') {
                text = `+${effect.value}% Minion Attack Speed for ${effect.duration} minutes`;
            } else if (key === 'minionCriticalHitChance') {
                text = `+${effect.value}% Minion Critical Hit Chance for ${effect.duration} minutes`;
            } else if (key === 'healingRegeneration') {
                text = `+${effect.value}% More Healing from Health over Time Regeneration for ${effect.duration} minutes`;
            } else if (key === 'damage') {
                text = `+${effect.value}% Damage for ${effect.duration} minutes`;
            } else if (key === 'criticalHitChance') {
                text = `+${effect.value}% Critical Hit Chance for ${effect.duration} minutes`;
            } else if (key === 'lifeOnMeleeHit') {
                text = `+${effect.value} Life on Melee Hit for ${effect.duration} minutes`;
            } else if (key === 'miningDamage') {
                text = `+${effect.value} Mining Damage for ${effect.duration} minutes`;
            } else if (key === 'miningSpeed') {
                text = `+${effect.value}% Mining Speed for ${effect.duration} minutes`;
            } else if (key === 'maxMana') {
                text = `+${effect.value} Max Mana for ${effect.duration} minutes`;
            } else if (key === 'thornsDamage') {
                text = `+${effect.value} Thorns Damage for ${effect.duration} minutes`;
            } else if (key === 'fishing') {
                text = `+${effect.value} Fishing for ${effect.duration} minutes`;
            } else if (key === 'dodgeChance') {
                text = `+${effect.value}% Dodge Chance for ${effect.duration} minutes`;
            } else if (key === 'criticalHitDamage') {
                text = `+${effect.value}% Critical Hit Damage for ${effect.duration} minutes`;
            } else if (key === 'meleeAndRangeAttackSpeed') {
                text = `+${effect.value}% Melee and Range Attack Speed for ${effect.duration} minutes`;
            } else if (key === 'petDamage') {
                text = `+${effect.value}% Damage dealt by your pet for ${effect.duration} minutes`;
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
                    text = `${key}: ${effect.value} (for ${effect.duration} mins)`;
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
