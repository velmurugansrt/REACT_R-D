import { createAction } from 'redux-actions';

export const LOADER_UPDATE = 'GLOBAL/LOADER_UPDATE';
export const LOADER = createAction(LOADER_UPDATE);