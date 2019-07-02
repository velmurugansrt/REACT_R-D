import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import GlobalReducer from './GlobalReducer';

const appReducer = combineReducers({
    // form: formReducer,
    GlobalReducer: GlobalReducer,
});

const rootReducer = (state, action) => {
    console.log('reducers1', state)
    console.log('reducers1', action)
    console.log('reducers1---------')

    return appReducer(state, action);
};

export default rootReducer;
