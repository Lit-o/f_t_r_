// isPercent------------------------------------------------------------------------
const isChance = percent => (Math.floor(Math.random() * 100) + 1) <= percent

const isChanceBigFunc = percent => {
    const randomResponce = (Math.floor(Math.random() * 100) + 1)
    let answer 
    answer = randomResponce <= percent
    return answer
}

console.log(isChanceBigFunc(1))
// END-----------------------------------------------------------------------------

// lvlUp------------------------------------------------------------------------
const lvlCupTo = (lvl) => {
    return ((lvl+1)*((lvl+1)-1)/2) * 10
}
console.log(lvlCupTo(4))
// END-----------------------------------------------------------------------------

// extraChance
const isExtraChance = () => {
    if ((Math.floor(Math.random() * 100000) + 1) === 1) {
        return (Math.floor(Math.random() * 2) + 1)
    }
    return 0
}




// --------WRONG-SHALLOW-COPY----------------
const stateShallow = [
    { currentLvl: 10, currentExp: 0, label: 'Сила'},
    { currentLvl: 10, currentExp: 0, label: 'Выносливость'},
    { currentLvl: 10, currentExp: 0, label: 'Ловкость'},
]

const newStateShallow = [
    ...stateShallow.slice(0, 1),
    {...stateShallow[1],
        currentLvl: 111,
        currentExp: 111
    },
    ...stateShallow.slice(2)
]

stateShallow[1].currentExp = 2222
stateShallow[2].currentExp = 3333

console.log(stateShallow)
console.log(newStateShallow)

// --------RIGHT-DEEP-COPY----------------
const stateDeep = [
    { currentLvl: 10, currentExp: 0, label: 'Сила'},
    { currentLvl: 10, currentExp: 0, label: 'Выносливость'},
    { currentLvl: 10, currentExp: 0, label: 'Ловкость'},
]

const newStateBuff = stateDeep.map(el => ({...el}))

const newStateDeep = [
    ...newStateBuff.slice(0, 1),
    {...newStateBuff[1],
        currentLvl: 111,
        currentExp: 111
    },
    ...newStateBuff.slice(2)
]

stateDeep[1].currentExp = 2222
stateDeep[2].currentExp = 3333

console.log(stateDeep)
console.log(newStateDeep)




