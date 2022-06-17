import { MENU_OPEN } from './action';

const initialState = {openMenu: false};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_OPEN:
            return {...initialState, openMenu: action.payload};
        default:
            return state;
    }
}