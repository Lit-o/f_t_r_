import {charCharacteristicsActionsEnum, charCharacteristicsNamesEnum, IAction} from '../../reducers/char/charCharacteristicsReducer'

export const charCharacteristicsAction = (name:charCharacteristicsNamesEnum, gainedExp:number ):IAction => {
    return {
        type: charCharacteristicsActionsEnum.CHAR_CHANGE, 
        name,
        gainedExp
    }
}
