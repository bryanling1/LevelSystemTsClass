import {LevelSystem} from "./models"
const lvlDef = [
    {
        start: 1,
        end: 1,
        xpPerLevel: 10,
    },
    {
        start: 2,
        end: 2,
        xpPerLevel: 25,
    },
    {
        start: 3,
        end: 3,
        xpPerLevel: 50,
    },
    {
        start: 4,
        end: 4,
        xpPerLevel: 75,
    },
    {
        start: 5,
        xpPerLevel: 100,
    }
]

const labelDef = [
    {
        start: 1,
        end: 9,
        label: "casual",
    },
    {
        start: 10,
        end: 19,
        label: "uncommon",
    },
    {
        start: 20,
        end: 29,
        label: "strange",
    },
    {
        start: 30,
        end: 39,
        label: "strange",
    },
    {
        start: 40,
        label: 'Legendary',
    }
]

const system = new LevelSystem(lvlDef, labelDef)
console.log(system.getNewLevel({level: 1, xp: 5}, 30))

