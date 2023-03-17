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
    {name: charCharacteristicsNamesEnum.strength, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Сила'},
    {name: charCharacteristicsNamesEnum.endurance, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Выносливость'},
    {name: charCharacteristicsNamesEnum.agility, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Ловкость'},
    {name: charCharacteristicsNamesEnum.perception, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Внимательность'},
    {name: charCharacteristicsNamesEnum.intellect, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Интеллект'},
    {name: charCharacteristicsNamesEnum.charisma, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Харизма'},
    {name: charCharacteristicsNamesEnum.stressResistantce, currentLvl: 1, nextLvlExpCup: 1000, currentExp: 0, label: 'Стрессоустойчивость'}
]
type TState = typeof initialState

export interface IAction {
    type: charCharacteristicsActionsEnum,
    name: charCharacteristicsNamesEnum,
    currentExp: number
}


const charCharacteristicsReducer = (state = initialState, action: IAction): TState => {
    switch (action.type) {
        case charCharacteristicsActionsEnum.CHAR_CHANGE:
            if (state[action.name].currentExp + action.currentExp < state[action.name].nextLvlExpCup){
                return [
                    ...state.slice(0, action.name),
                    {...state[action.name], 
                        currentExp: state[action.name].currentExp + action.currentExp
                    },
                    ...state.slice(action.name + 1)
                ]               
            } else {
                const sumEx = state[action.name].currentExp + action.currentExp
                const curEx = sumEx - state[action.name].nextLvlExpCup 
                const nextLvl = state[action.name].currentLvl + 1
                return [
                    ...state.slice(0, action.name),
                    {...state[action.name], 
                        currentLvl: nextLvl,
                        nextLvlExpCup: ((nextLvl + 1) * ((nextLvl + 1) - 1) / 2) * 1000,
                        currentExp: curEx
                    },
                    ...state.slice(action.name + 1)
                ]
            }
        default:
            return state
    }
}

export default charCharacteristicsReducer