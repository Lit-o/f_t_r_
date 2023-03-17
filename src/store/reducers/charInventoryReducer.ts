export enum inventoryEnum {
    INVENTORY_CHANGE = 'INVENTORY_CHANGE'
}
enum inventoryLabelsEnum {
    electricalComponent = 'Электрокомпонеты',
    chip = 'Микросхема'
}

let inventory = {
    electricalComponent: {
        label: inventoryLabelsEnum.electricalComponent,
        amount: 1110
    },
    chip: {
        label: inventoryLabelsEnum.chip,
        amount: 0,
    }
}

type inventoryType = typeof inventory
export type inventoryKeysType = keyof inventoryType

export interface IAction {
    type: inventoryEnum.INVENTORY_CHANGE;
    name: inventoryKeysType;
    value: number;
}

const charInventoryReducer = (state = inventory, action: IAction):inventoryType => {
    switch (action.type) {
        case inventoryEnum.INVENTORY_CHANGE:
            return {
                ...state,
                [action.name]: {...state[action.name], amount: state[action.name].amount + action.value}
            }
        default:
            return state
    }
}

export default charInventoryReducer;