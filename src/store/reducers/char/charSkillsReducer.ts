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
            const newState = state.map(el => ({...el}))
            if (newState[action.name].currentExp + action.gainedExp < newState[action.name].nextLvlExpCup) {
                return [
                    ...newState.slice(0, action.name),
                    {...newState[action.name],
                         currentExp: newState[action.name].currentExp + action.gainedExp                      
                    },
                    ...newState.slice(action.name + 1)
                ]
                    // TODO Ввести else if и условие для кап прокачки  
                    // TODO Ввести предохранитель, на количство опыта превышающего 
                    // поднятие на 1 уровень, возможно цикл с проверкой 
            } else {
                const sumExp = newState[action.name].currentExp + action.gainedExp
                const curExp = sumExp - newState[action.name].nextLvlExpCup
                const nextLvl = newState[action.name].currentLvl + 1
                return [
                    ...newState.slice(0, action.name),
                    {...newState[action.name],
                        currentLvl: nextLvl,
                        power: nextLvl,
                        nextLvlExpCup: ((nextLvl + 1) * ((nextLvl + 1) - 1) / 2) * 1000,
                        currentExp: curExp
                    },
                    ...newState.slice(action.name + 1)
                ]
            }
        default:
            return state
    }
} 

export default charSkillsReducer;


