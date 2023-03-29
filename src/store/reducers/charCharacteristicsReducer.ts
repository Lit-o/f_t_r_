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
    {name: charCharacteristicsNamesEnum.strength, currentLvl: 10, nextLvlExpCup: 55000, currentExp: 0, label: 'Сила', effect: 0, power: 10},
    {name: charCharacteristicsNamesEnum.endurance, currentLvl: 10, nextLvlExpCup: 55000, currentExp: 0, label: 'Выносливость', effect: 0, power: 10},
    {name: charCharacteristicsNamesEnum.agility, currentLvl: 10, nextLvlExpCup: 55000, currentExp: 0, label: 'Ловкость', effect: 0, power: 10},
    {name: charCharacteristicsNamesEnum.perception, currentLvl: 10, nextLvlExpCup: 55000, currentExp: 0, label: 'Внимательность', effect: 0, power: 10},
    {name: charCharacteristicsNamesEnum.intellect, currentLvl: 10, nextLvlExpCup: 55000, currentExp: 0, label: 'Интеллект', effect: 0, power: 10},
    {name: charCharacteristicsNamesEnum.charisma, currentLvl: 10, nextLvlExpCup: 55000, currentExp: 0, label: 'Харизма', effect: 0, power: 10},
    {name: charCharacteristicsNamesEnum.stressResistantce, currentLvl: 10, nextLvlExpCup: 55000, currentExp: 0, label: 'Стрессоустойчивость', effect: 0, power: 10}
]
type TState = typeof initialState

export interface IAction {
    type: charCharacteristicsActionsEnum,
    name: charCharacteristicsNamesEnum,
    gainedExp: number
}

// type AllIAction = IAction | IAction2


const charCharacteristicsReducer = (state = initialState, action: IAction): TState => {
    switch (action.type) {
        case charCharacteristicsActionsEnum.CHAR_CHANGE:
            if (state[action.name].currentExp + action.gainedExp < state[action.name].nextLvlExpCup){
                return [
                    ...state.slice(0, action.name),
                    {...state[action.name], 
                        currentExp: state[action.name].currentExp + action.gainedExp
                    },
                    ...state.slice(action.name + 1)
                ]        
                    // TODO Ввести else if и условие для кап прокачки  
                    // TODO Ввести предохранитель, на количство опыта превышающего 
                    // поднятие на 1 уровень, возможно цикл с проверкой 
            } else {
                const sumExp = state[action.name].currentExp + action.gainedExp
                const curExp = sumExp - state[action.name].nextLvlExpCup 
                const nextLvl = state[action.name].currentLvl + 1
                return [
                    ...state.slice(0, action.name),
                    {...state[action.name], 
                        currentLvl: nextLvl,
                        power: nextLvl,
                        nextLvlExpCup: ((nextLvl + 1) * ((nextLvl + 1) - 1) / 2) * 1000,
                        currentExp: curExp
                    },
                    ...state.slice(action.name + 1)
                ]
            }
        default:
            return state
    }
}

export default charCharacteristicsReducer