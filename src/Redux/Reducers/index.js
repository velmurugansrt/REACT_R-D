import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import GlobalReducer from './GlobalReducer';

const appReducer = combineReducers({
    // form: formReducer,
    GlobalReducer: GlobalReducer,
});

const rootReducer = (state, action) => {

    return appReducer(state, action);
};

export default rootReducer;
