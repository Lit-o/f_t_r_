export enum rollExtraChancesEnum {
    ID_NO_CHANCE = 'ID_NO_CHANCE',
    ID_GOOD_CHANCE = 'ID_GOOD_CHANCE',
    ID_BAD_CHANCE = 'ID_BAD_CHANCE'
}

export const rollExtraChances = (): rollExtraChancesEnum => {
    if ((Math.floor(Math.random() * 100000) + 1) === 1) {
        const chance = (Math.floor(Math.random() * 2) + 1)
        return chance === 1 ? rollExtraChancesEnum.ID_GOOD_CHANCE : rollExtraChancesEnum.ID_BAD_CHANCE
    }
    return rollExtraChancesEnum.ID_NO_CHANCE
}

export const isChance = (percent: number) => (Math.floor(Math.random() * 100) + 1) <= percent