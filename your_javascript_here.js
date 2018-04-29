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

const enemy = {
    health: 70,
    weapon: {
        type: "Claw",
        damage: 3
    }
}

var item = {
    type: "knife",
    damage: 2
}

var index = 0



// Game logic
function rest(creature) {
    console.log(`before rest: ${creature.health}`)
    creature.health = 10
    console.log(`after rest: ${creature.health}`)
    return creature
}

function pickUpItem(creature, item) {
    console.log("before pickup: ", creature.inventory)
    creature.inventory.push(item)
    console.log("after pickup: ",creature.inventory)
    return creature
}

function dealDamage(attacker, defender) {
    defender.health -= attacker.weapon.damage
    return defender
}

function equipWeapon(creature, index){
    console.log("before askIndex: ",creature.weapon)
    creature.weapon = creature.inventory[index]
    creature.inventory.splice(index, 1)
    console.log("after askIndex: ", creature.weapon)
    return creature
}

function doBattle(heroicCreature, creature){
    if (!heroicCreature.heroic) {
        return null
    }
    console.log(`before battle heroic creature health: ${heroicCreature.health}`);
    while (heroicCreature.health > 0 && creature.health > 0) {

        if (heroicCreature.health > 0) {
            dealDamage(heroicCreature, creature)
        }

        if (creature.health > 0) {
            dealDamage(creature, heroicCreature)
        }

        if (heroicCreature.health > 0 && creature.health <= 0) {
            alert(`${heroicCreature.name} won!`)
            return heroicCreature


        } else if (creature.health > 0 && heroicCreature.health <= 0) {
            alert('Ahw.. You died!')
            return creature
        } else if (heroicCreature.health <= 0 && creature.health <= 0) {
            alert('They both died!')
        }
        console.log(`after battle heroic creature health: ${heroicCreature.health}`);
    }
}

function displayStats(){
    
}


// UI

document.getElementById("innRest").addEventListener("click", function(){
    rest(hero)
})

document.getElementById("sword").addEventListener("click", function(){
    pickUpItem(hero, item)
})

document.getElementById("enemy").addEventListener("click", function(){
    doBattle(hero, enemy)
})

document.getElementById("backpack").addEventListener("click", function(){
    var askIndex = window.prompt('what index weapon do you want to equip?')
    equipWeapon(hero, askIndex)
})

// rest(creature) // WORKS
// dealDamage(attacker, defender) //doesnt subtract //WORKS
// pickUpItem(creature, item)//item is nog niet defined //WORKS
// equipWeapon(creature, index)//index is not defined
// doBattle(hero, creature)
