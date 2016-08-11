import { compose, createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { devTools, persistState } from 'redux-devtools'

const loggerMiddleware = createLogger()

const storeConfig = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)(createStore)

export function configureStore(initialState) {
    return storeConfig(rootReducer, initialState)
}

