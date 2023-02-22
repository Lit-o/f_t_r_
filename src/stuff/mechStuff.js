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
console.log(lvlCupTo(22))
// END-----------------------------------------------------------------------------

// extraChance
const isExtraChance = () => {
    if ((Math.floor(Math.random() * 100000) + 1) === 1) {
        return (Math.floor(Math.random() * 2) + 1)
    }
    return 0
}




