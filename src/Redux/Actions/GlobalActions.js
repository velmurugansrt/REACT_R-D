import { createAction } from 'redux-actions';

export const LOADER_UPDATE = 'GLOBAL/LOADER_UPDATE';
export const LOADER = createAction(LOADER_UPDATE);


export const ADD_VALUE = 'VALUE/ADD';
export const ADD = createAction(ADD_VALUE);
