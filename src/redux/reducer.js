import { MENU_OPEN } from './action';
import { CARD_MODAL_OPEN } from './action';
import { SELECTED_PRODUCT } from './action';

const initialState = {openMenu: false};
const initialStateCardModal = {openCardModal: false};
const initialStateSelectedProduct = {selectedProduct: null};

const initialsStates = {
    ...initialState,
    ...initialStateCardModal,
    ...initialStateSelectedProduct
}

export const reducer = (state = initialsStates, action) => {
    switch (action.type) {
        case MENU_OPEN:
            return {...initialsStates, openMenu: action.payload};
        case CARD_MODAL_OPEN:
            return {...initialsStates, openCardModal: action.payload};
        case SELECTED_PRODUCT:
            return {...initialsStates, selectedProduct: action.payload};
        default:
            return state;
    }
}