export enum charCharacteristicsActionsEnum {
    CHAR_CHANGE = 'CHAR_CHANGE'
}

const initialState = {
    strength: 1,
    endurance: 1,
    agility: 1,
    perception: 1,
    intellect: 1,
    charisma: 1,
    stressResistantce: 1
}

export interface charAction {
    type: charCharacteristicsActionsEnum,
    value: number,
    name: nameOfCharacteristicsType
}

type charType = typeof initialState
export type nameOfCharacteristicsType = keyof charType

const charCharacteristicsReducer = (state = initialState, action: charAction): charType => {
    switch (action.type) {
        case charCharacteristicsActionsEnum.CHAR_CHANGE:
            return {
                ...state,
                [action.name]: state[action.name] + action.value
            }
        default:
            return state
    }

}

export default charCharacteristicsReducer