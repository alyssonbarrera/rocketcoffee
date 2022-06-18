export const MENU_OPEN = 'MENU_ACTION';
export const CARD_MODAL_OPEN = 'CARD_MODAL_OPEN_ACTION';
export const SELECTED_PRODUCT = 'SELECTED_PRODUCT_ACTION';

export const menuOpen = (payload) => {
    return {type: MENU_OPEN, payload};
}

export const selectedProduct = (payload) => {
    return {type: SELECTED_PRODUCT, payload};
}

export const cardModalOpen = (payload) => {
    return {type: CARD_MODAL_OPEN, payload};
}