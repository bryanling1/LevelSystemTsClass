import {LevelSystem} from "./models"
const lvlDef = [
    {
        start: 1,
        end: 9,
        xpPerLevel: 10,
    },
    {
        start: 10,
        end: 24,
        xpPerLevel: 25,
    },
    {
        start: 25,
        end: 49,
        xpPerLevel: 50,
    },
    {
        start: 50,
        end: 99,
        xpPerLevel: 75,
    },
    {
        start: 100,
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
console.log(system.getLabel(20))

