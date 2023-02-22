import { Dispatch } from "redux"
import { rollExtraChances, rollExtraChancesEnum, isChance } from "../../core/coreMechanics"
import { charCharacteristicsChange } from "../actions/charCharacteristicsAction"
import { charInventoryAction } from "../actions/charInventoryAction"
import { charSkillsAction } from "../actions/charSkillsAction"


export const handleCreateChipThunk = (craft:number, electricalComponentAmount:number, agility:number, intellect:number) => (dispatch: Dispatch) => {
    setTimeout( () => {
        console.log('погнали')
        if (craft > 100) {
            alert('КОНГРАДУЛЕЙШОНС!Вы прошли игру за Крафтера!')
        }
        // -----------------
        if (electricalComponentAmount < 2) {
            alert('Нехватает компонентов, Дружище!')
            return
        }
    
        // ------------------
        // refactor to SWITCH
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
        const numberOfSkill = (agility * 2) + (intellect * 5) + craft
    
        if (isChance(numberOfSkill)) {
            dispatch(charInventoryAction("electricalComponent", -2))
            dispatch(charInventoryAction("chip", 1))
    
    
            dispatch(charCharacteristicsChange("intellect", 0.05))
            dispatch(charCharacteristicsChange("agility", 0.05))
    
            dispatch(charSkillsAction("craft", 2))
    
            console.log('Чип создан!')
        } else {
            dispatch(charInventoryAction("electricalComponent", -1))
    
            dispatch(charCharacteristicsChange("intellect", 0.01))
            dispatch(charCharacteristicsChange("agility", 0.01))
    
            dispatch(charSkillsAction("craft", 1))
            console.log('Чип совершенно не создан!')
        }
    }, 2000)
    
    
}