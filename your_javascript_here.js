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

var item = {
    type: "knife",
    damage: 2
}

var index = 0

// Game logic
function rest(creature) {
    creature.health = 10
    return creature
}

function pickUpItem(creature, item) {
    creature.inventory.push(item)
    return creature
}

function dealDamage(attacker, defender) {
    defender.health -= attacker.weapon.damage
    return defender
}

function equipWeapon(creature, index){
    creature.weapon = creature.inventory[index]
    creature.inventory.splice(index, 1)
    return creature
}


// console.log(creature.inventory)

function doBattle(heroicCreature, creature){

}

// UI




// rest(creature) // WORKS
// dealDamage(attacker, defender) //doesnt subtract //WORKS
// pickUpItem(creature, item)//item is nog niet defined //WORKS
// equipWeapon(creature, index)//index is not defined
