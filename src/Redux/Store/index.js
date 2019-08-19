import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import createEncryptor from 'redux-persist-transform-encrypt'
import rootReducer from '../Reducers';


const encryptor = createEncryptor({
    secretKey: 'my-super-secret-key',
    onError: function (error) {
        // Handle the error.
    }
})


const persistConfig = {
    key: 'root',
    storage,
    transforms: [encryptor]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const logger = createLogger();

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

    let store = createStore(persistedReducer, compose(applyMiddleware(logger)));
    let persistor = persistStore(store);
    return { store, persistor };

}
