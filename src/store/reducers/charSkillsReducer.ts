export enum charSkillsEnum {
    SKILL_CHANGE = 'SKILL_CHANGE'
}

const initialState = {
    craft: 1,
    search: 1
}

type charSkillsType = typeof initialState
export type charSkillsTypeKeys = keyof charSkillsType

export interface ActionType {
    type: charSkillsEnum,
    name: charSkillsTypeKeys,
    value: number
}

const charSkillsReducer = (state = initialState, action:ActionType): charSkillsType => {
    switch (action.type) {
        case charSkillsEnum.SKILL_CHANGE:
            return {
                ...state,
                [action.name]: state[action.name] + action.value
            }
        default:
            return state
    }
} 

export default charSkillsReducer;