import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import facultyReducer from './reducers/Faculty'

const rootReducer = combineReducers({
    facultyStore : facultyReducer 
})

const configureStore = (initialState) => createStore(rootReducer,initialState,applyMiddleware(thunk,logger))

export default configureStore;
