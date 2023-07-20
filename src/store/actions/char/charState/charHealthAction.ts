import { ActionTypeEnum, IAction } from "../../../reducers/char/charState/charHealthReducer"

export const charCurrentHPAction = (value:number):IAction => ({
    type: ActionTypeEnum.CURRENT_HP_CHANGE,
    value
})

export const charCupHPAction = (value:number):IAction => ({
    type: ActionTypeEnum.CUP_HP_CHANGE,
    value
})

