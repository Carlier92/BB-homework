// Variables
const hero = {
    name: 'Relearya',
    heroic: true,
    inventory: [],
    health: 100,
    weapon: {
        type: "Katana",
        damage: 25
    }
}

const creature = {
    name: 'Guy',
    heroic: true,
    inventory: [],
    health: 100,
    weapon: {
        type: "Bow",
        damage: 15
    }
}

const attacker = {
    name: 'Raawr',
    heroic: true,
    inventory: [],
    health: 100,
    weapon: {
        type: "Sword",
        damage: 10
    }
}

const defender = {
    name: 'Shield',
    heroic: true,
    inventory: [],
    health: 100,
    weapon: {
        type: "shield",
        damage: 5
    }
}

var item =  {
    type: "mesje",
    damage: 2
}

// Game logic
function rest(creature) {
    creature.health += 10
    return creature
}

// console.log(creature.health)
// rest(creature) // WORKS
// console.log(creature.health)

function pickUpItem(creature, item) {
    creature.inventory.push(item)
    return creature
}

// console.log(creature.inventory)
// pickUpItem(creature, item)//item is nog niet defined //WORKS
// console.log(creature.inventory)

function dealDamage(attacker, defender) {
    defender.health -= attacker.weapon.damage
    return defender
}
// console.log(defender.health)
// dealDamage(attacker, defender) //WORKS
// console.log(defender.health)



// UI
