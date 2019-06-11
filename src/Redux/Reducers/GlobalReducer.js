import ip from 'icepick';
import { GlobalActions } from '../Actions';


const initialState = ip.freeze({
    loader: false,
});



export default function (state = initialState, action) {
    switch (action.type) {
        case GlobalActions.LOADER_UPDATE: {
            const response = action.payload;
            state = ip.setIn(state, ['loader'], response);
            return state;
        }
        default:
            return state;
    }

}