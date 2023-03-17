import {charCharacteristicsActionsEnum, charCharacteristicsNamesEnum, IAction} from '../reducers/charCharacteristicsReducer'

export const charCharacteristicsChange = (name:charCharacteristicsNamesEnum, currentExp:number ):IAction => {
    return {
        type: charCharacteristicsActionsEnum.CHAR_CHANGE, 
        name,
        currentExp
    }
}
