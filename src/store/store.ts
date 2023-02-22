import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk"
import charCharacteristicsReducer from "./reducers/charCharacteristicsReducer"
import charInventoryReducer from "./reducers/charInventoryReducer"
import charSkillsReducer from "./reducers/charSkillsReducer"

const rootReducer = combineReducers({
    charCharacteristics: charCharacteristicsReducer,
    charSkills: charSkillsReducer,
    charInventory: charInventoryReducer
})

export type rootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
