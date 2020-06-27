import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
const initialState = {}

export default () => {
    return createStore(
        rootReducer,
        initialState,
        // applyMiddleware(...middleware) // to add other middleware
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    )
}