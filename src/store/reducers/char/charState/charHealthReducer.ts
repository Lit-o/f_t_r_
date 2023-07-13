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

const initialState = {
    LabelHP: 'Здоровье',
    currentHP: 30,
    cupHP: 30,
    danger: false
}
type TState = typeof initialState

const healthReducer = (state = initialState, action:IAction): TState => {
    switch (action.type) {
        case ActionTypeEnum.CURRENT_HP_CHANGE:
            if (state.currentHP + action.value < state.cupHP * 0.2) {
                return {
                    ...state,
                    currentHP: state.currentHP + action.value,
                    danger: true
                }
            } else {
                return {
                    ...state,
                    currentHP: state.currentHP + action.value,
                    danger: false
                }
            }
        case ActionTypeEnum.CUP_HP_CHANGE:
            return {
                ...state,
                cupHP: state.cupHP + action.value
            }
        default: 
            return state
    }
}

export default healthReducer
