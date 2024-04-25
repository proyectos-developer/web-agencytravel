export const datatypes = {
    SET_AUTHENTICATED: 'SET_AUTENTICATED',
    SET_OPEN_MENU_MAIN: 'SET_OPEN_MENU_MAIN',
    SET_OPEN_MENU_LATERAL_CARRITO: 'SET_OPEN_MENU_LATERAL_CARRITO',
    SET_DATA_PAGE_RESERVA: 'SET_DATA_PAGE_RESERVA',
    SET_SCREEN_SEARCH: 'SET_SCREEN_SEARCH'
}

export const set_authenticated = authenticated => {
    return {
        authenticated,
        type: datatypes.SET_AUTHENTICATED
    }
}

export const set_open_menu_main = open_menu_main => {
    return {
        open_menu_main,
        type: datatypes.SET_OPEN_MENU_MAIN
    }
}

export const set_open_menu_lateral_carrito = open_menu_lateral_carrito => {
    return {
        open_menu_lateral_carrito,
        type: datatypes.SET_OPEN_MENU_LATERAL_CARRITO
    }
}

export const set_data_page_reserva = data_page_reserva => {
    return {
        data_page_reserva,
        type: datatypes.SET_DATA_PAGE_RESERVA
    }
}

export const set_screen_search = screen_search => {
    return {
        screen_search,
        type: datatypes.SET_SCREEN_SEARCH
    }
}