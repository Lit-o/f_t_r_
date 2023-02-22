import { Dispatch } from "redux"
import { rollExtraChances, rollExtraChancesEnum, isChance } from "../../core/coreMechanics"
import { charCharacteristicsChange } from "../actions/charCharacteristicsAction"
import { charInventoryAction } from "../actions/charInventoryAction"
import { charSkillsAction } from "../actions/charSkillsAction"


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
    const numberOfSkill = (endurance * 2) + (perception * 5) + search
    if (isChance(numberOfSkill)) {
        dispatch(charCharacteristicsChange("endurance", 0.05))
        dispatch(charCharacteristicsChange("perception", 0.05))
        dispatch(charInventoryAction("electricalComponent", 1))
        dispatch(charSkillsAction("search", 2))

    } else {
        dispatch(charCharacteristicsChange("endurance", 0.01))
        dispatch(charCharacteristicsChange("perception", 0.01))
        dispatch(charSkillsAction("search", 1))
    }

}
