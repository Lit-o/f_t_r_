import { charSkillsEnum, charSkillsNamesEnum, IAction } from "../../reducers/char/charSkillsReducer";


export const charSkillsAction = (name: charSkillsNamesEnum, gainedExp:number):IAction => ({
    type: charSkillsEnum.SKILL_CHANGE,
    name,
    gainedExp
})