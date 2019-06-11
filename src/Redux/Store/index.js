import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from '../Reducers';




export default function configureStore(initialState) {
    if (initialState) {
    } else {
        initialState = {};
    }
    // const middleware = [
    //     sagaMiddleware,
    //     localStorageMiddleware,
    //     networkErrorMiddleware,
    // ];
    // const composeEnhancers =
    //     global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // const enhancer = composeEnhancers(applyMiddleware(...middleware));
    const store = createStore(Reducers, initialState);
    return store;
}
