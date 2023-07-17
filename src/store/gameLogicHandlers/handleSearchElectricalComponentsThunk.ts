import { Dispatch } from "redux"
import { rollExtraChances, rollExtraChancesEnum, isChance } from "../../core/coreMechanics"
import { charCharacteristicsAction } from "../actions/char/charCharacteristicsAction"
import { charInventoryAction } from "../actions/charInventoryAction"
import { charSkillsAction } from "../actions/char/charSkillsAction"
import { charSkillsNamesEnum } from "../reducers/char/charSkillsReducer"
import { charCharacteristicsNamesEnum } from "../reducers/char/charCharacteristicsReducer"
import { charCurrentHPAction } from "../actions/char/charState/charHealthAction"


export const handleSearchElectricalComponentsThunk = (search:number, endurance:number, perception:number) => (dispatch: Dispatch) => {
    if (search > 100) {
        alert('КОНГРАДУЛЕЙШОНС! Вы прошли игру за Сборщик мусора!')
    }

    const extraChance = rollExtraChances()
    switch (extraChance) {
        case rollExtraChancesEnum.ID_GOOD_CHANCE:
            console.log('!!!!!!Произошло что-то очень хорошее!!!!!!')
            break
        case rollExtraChancesEnum.ID_BAD_CHANCE:
            console.log('!!!!!!Произошло что-то очень не хорошее')
            break
        default:
            console.log('!!!!Все ок')
            break
    }

    // наш скилл
    const numberOfSkill = (endurance * 2) + (perception * 1) + search
    if (isChance(numberOfSkill)) {
        dispatch(charCharacteristicsAction(charCharacteristicsNamesEnum.endurance, 15))
        dispatch(charCharacteristicsAction(charCharacteristicsNamesEnum.perception, 15))

        dispatch(charInventoryAction("electricalComponent", 1))
        dispatch(charSkillsAction(charSkillsNamesEnum.search, 55))

    } else {
        dispatch(charCharacteristicsAction(charCharacteristicsNamesEnum.endurance, 5))
        dispatch(charCharacteristicsAction(charCharacteristicsNamesEnum.perception, 5))

        dispatch(charSkillsAction(charSkillsNamesEnum.search, 15))
        dispatch(charCurrentHPAction(-1))
    }

}
