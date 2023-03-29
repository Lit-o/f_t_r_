export enum charSkillsEnum {
    SKILL_CHANGE = 'SKILL_CHANGE'
}

export enum charSkillsNamesEnum {
    craft = 0,
    search = 1,
}

const initialState = [
    {name: charSkillsNamesEnum.craft, currentLvl: 10, nextLvlExpCup: 55000, currentExp: 0, label: 'Крафт', effect: 0, power: 10},
    {name: charSkillsNamesEnum.search, currentLvl: 10, nextLvlExpCup: 55000, currentExp: 0, label: 'Поиск', effect: 0, power: 10}
]


type TState = typeof initialState

export interface IAction {
    type: charSkillsEnum,
    name: charSkillsNamesEnum,
    gainedExp: number
}

// type AllIAction = IAction | IAction2

const charSkillsReducer = (state = initialState, action:IAction): TState => {
    switch (action.type) {
        case charSkillsEnum.SKILL_CHANGE:
            if (state[action.name].currentExp + action.gainedExp < state[action.name].nextLvlExpCup) {
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

export default charSkillsReducer;


