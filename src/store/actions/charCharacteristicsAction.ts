import {charCharacteristicsActionsEnum, nameOfCharacteristicsType, charAction} from '../reducers/charCharacteristicsReducer'

export const charCharacteristicsChange = (name:nameOfCharacteristicsType, value:number):charAction => {
    return {
        type: charCharacteristicsActionsEnum.CHAR_CHANGE, 
        name, 
        value
    }
}
