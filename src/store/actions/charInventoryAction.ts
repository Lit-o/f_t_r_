import { IAction, inventoryEnum, inventoryKeysType } from "../reducers/charInventoryReducer";



export const charInventoryAction = (name: inventoryKeysType, value:number):IAction => ({
    type: inventoryEnum.INVENTORY_CHANGE,
    name,
    value 
})