import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { UserReducer } from './user/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  combineReducers({ User: UserReducer }),
  composeWithDevTools(applyMiddleware(createSagaMiddleware()))
)
