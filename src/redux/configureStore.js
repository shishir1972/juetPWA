import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import facultyReducer from './reducers/Faculty'
import admissionHandler from './reducers/Admission'

const rootReducer = combineReducers({
    facultyStore : facultyReducer,
    admissionStore: admissionHandler 
})

const configureStore = (initialState) => createStore(rootReducer,initialState,applyMiddleware(thunk,logger))

export default configureStore;
