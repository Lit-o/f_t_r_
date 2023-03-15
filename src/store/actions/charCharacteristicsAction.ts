import {charCharacteristicsActionsEnum, charCharacteristicsNamesEnum, charAction} from '../reducers/charCharacteristicsReducer'

export const charCharacteristicsChange = (name:charCharacteristicsNamesEnum, currentLvl:number, nextLvlExpCup:number, currentExp:number  ):charAction => {
    return {
        type: charCharacteristicsActionsEnum.CHAR_CHANGE, 
        name,
        currentLvl,
        nextLvlExpCup,
        currentExp
    }
}
