import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { setUserTypeReducer } from "./reducers/userTypeReducer"

const rootReducer = combineReducers({
    userType: setUserTypeReducer,
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store;