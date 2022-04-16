import {createStore , combineReducers , applyMiddleware , compose} from "redux"

import{City_Reducer} from "./City/reducer"
import {Country_Reducer} from "./Country/reducer"
import thunk  from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

     const middleware = [thunk]
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

export const root_reducer = combineReducers({
  city:City_Reducer,
  Country:Country_Reducer
})

export const store = createStore(root_reducer ,  enhancer)