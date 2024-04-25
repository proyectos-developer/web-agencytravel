import {datatypes} from '../actions/data.js'

const initial_state = {
    authenticated: false,
    open_menu_main: false,
    open_menu_lateral_carrito: false,
    data_page_reserva: {nro_adultos: 0, nro_ninios: 0, fecha: '', hora: '', direccion: '', requisitos: ''},
    screen_search: false
}

const data = (state = initial_state, action) => {
    if (action.type === datatypes.SET_AUTHENTICATED){
        const authenticated = action.authenticated
        return {
            ... state,
            authenticated
        }
    }else if (action.type === datatypes.SET_OPEN_MENU_MAIN){
        const open_menu_main = action.open_menu_main
        return {
            ... state,
            open_menu_main
        }
    }else if (action.type === datatypes.SET_OPEN_MENU_LATERAL_CARRITO){
        const open_menu_lateral_carrito = action.open_menu_lateral_carrito
        return {
            ... state,
            open_menu_lateral_carrito
        }
    }else if (action.type === datatypes.SET_DATA_PAGE_RESERVA){
        const data_page_reserva = action.data_page_reserva
        return {
            ... state,
            data_page_reserva
        }
    }else if (action.type === datatypes.SET_SCREEN_SEARCH){
        const screen_search = action.screen_search
        return {
            ... state,
            screen_search
        }
    }else{
        return state
    }
}

export default data