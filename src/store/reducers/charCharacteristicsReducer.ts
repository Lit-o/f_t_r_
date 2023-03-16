export enum charCharacteristicsActionsEnum {
    CHAR_CHANGE = 'CHAR_CHANGE'
}

export enum charCharacteristicsNamesEnum {
    strength = 0,
    endurance = 1,
    agility = 2,
    perception = 3,
    intellect = 4,
    charisma = 5,
    stressResistantce = 6
}


const initialState = [
    {name: charCharacteristicsNamesEnum.strength, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 500, label: 'Сила'},
    {name: charCharacteristicsNamesEnum.endurance, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Выносливость'},
    {name: charCharacteristicsNamesEnum.agility, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Ловкость'},
    {name: charCharacteristicsNamesEnum.perception, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Внимательность'},
    {name: charCharacteristicsNamesEnum.intellect, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 700, label: 'Интеллект'},
    {name: charCharacteristicsNamesEnum.charisma, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 100, label: 'Харизма'},
    {name: charCharacteristicsNamesEnum.stressResistantce, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Стрессоустойчивость'}
]

export interface charAction {
    type: charCharacteristicsActionsEnum,
    name: charCharacteristicsNamesEnum,
    currentLvl: number,
    nextLvlExpCup: number,
    currentExp: number
}

type charType = typeof initialState
export type nameOfCharacteristicsType = keyof charType

const charCharacteristicsReducer = (state = initialState, action: charAction): charType => {
    switch (action.type) {
        case charCharacteristicsActionsEnum.CHAR_CHANGE:
            return [
                ...state.slice(0, action.name),
                {...state[action.name], 
                    currentLvl: action.currentLvl,
                    nextLvlExpCup: action.nextLvlExpCup,
                    currentExp: action.currentExp
                },
                ...state.slice(action.name + 1)
            ]
        default:
            return state
    }

}

export default charCharacteristicsReducer