export enum ActionTypeEnum {
    CURRENT_HP_CHANGE = 'CURRENT_HP_CHANGE',
    CUP_HP_CHANGE = 'CUP_HP_CHANGE'
}

interface IActionCurrent {
    type: ActionTypeEnum.CURRENT_HP_CHANGE,
    value: number
}
interface IActionCup {
    type: ActionTypeEnum.CUP_HP_CHANGE,
    value: number
}
export type IAction = IActionCurrent | IActionCup

const cupHPStarter = 10

const initialState = {
    LabelHP: 'Здоровье',
    currentHP: 1,
    cupHP: cupHPStarter,
    danger: true
}
type TState = typeof initialState

const healthReducer = (state = initialState, action:IAction): TState => {
    switch (action.type) {
        case ActionTypeEnum.CURRENT_HP_CHANGE:
            const owerflowCheckedCurrentHP = state.currentHP + action.value >= state.cupHP ? state.cupHP : state.currentHP + action.value 
            const isDanger = state.currentHP + action.value < state.cupHP * 0.2
            
            if (isDanger) {
                return {
                    ...state,
                    currentHP: owerflowCheckedCurrentHP,
                    danger: true
                }
            } else {
                return {
                    ...state,
                    currentHP: owerflowCheckedCurrentHP,
                    danger: false
                }
            }
            
        case ActionTypeEnum.CUP_HP_CHANGE:
            return {
                ...state,
                cupHP: cupHPStarter + action.value
            }
            
        default: 
            return state
    }
}

export default healthReducer
