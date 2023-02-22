import { ActionType, charSkillsTypeKeys, charSkillsEnum } from "../reducers/charSkillsReducer";


export const charSkillsAction = (name: charSkillsTypeKeys, value:number):ActionType => ({
    type: charSkillsEnum.SKILL_CHANGE,
    name,
    value
})