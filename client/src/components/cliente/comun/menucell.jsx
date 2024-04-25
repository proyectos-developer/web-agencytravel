import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function MenuClienteLateralCell({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()

    const [menu_cliente, setMenuCliente] = useState ('mis-reservas')
    const [seleccion_menu, setSeleccionMenu] = useState ('')

    useEffect(() => {
        setMenuCliente(location.pathname.split('/')[2])
    }, [location.pathname.split('/')[2]])

    return (
        <div style={{width: '90%', height: 'auto'}}>
            <div style={{width: '100%', height: 30 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, 
                    color: (menu_cliente === 'mis-datos' || seleccion_menu === 'mis-datos')? 'rgb(23, 43, 222)' : 'rgb(122, 122, 122)', 
                    fontWeight: menu_cliente === 'mis-datos' || seleccion_menu === 'mis-datos' ? 700 : 500,  fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer'}} 
                    onMouseOver={() => setSeleccionMenu('mis-datos')} onMouseLeave={() => setSeleccionMenu('')}
                    onClick={() => navigate ('/cliente/mis-datos')}>
                    Mis datos
                </p>
            </div>
            <div style={{width: '100%', height: 30 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, 
                    color: (menu_cliente === 'mis-reservas' || seleccion_menu === 'mis-reservas')? 'rgb(23, 43, 222)' : 'rgb(122, 122, 122)', 
                    fontWeight: menu_cliente === 'mis-reservas' || seleccion_menu === 'mis-reservas' ? 700 : 500,  fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer'}}
                    onMouseOver={() => setSeleccionMenu('mis-reservas')} onMouseLeave={() => setSeleccionMenu('')}
                    onClick={() => navigate ('/cliente/mis-reservas')}>
                    Mis reservas
                </p>
            </div>
            <div style={{width: '100%', height: 30 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, 
                    color: (menu_cliente === 'tours-realizados' || seleccion_menu === 'tours-realizados')? 'rgb(23, 43, 222)' : 'rgb(122, 122, 122)', 
                    fontWeight: menu_cliente === 'tours-realizados' || seleccion_menu === 'mis-datos' ? 700 : 500,  fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer'}}
                    onMouseOver={() => setSeleccionMenu('tours-realizados')} onMouseLeave={() => setSeleccionMenu('')}
                    onClick={() => navigate ('/cliente/tours/realizados')}>
                    Tours realizados
                </p>
            </div>
            <div style={{width: '100%', height: 30 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, 
                    color: (menu_cliente === 'pagos-pendientes' || seleccion_menu === 'pagos-pendientes')? 'rgb(23, 43, 222)' : 'rgb(122, 122, 122)', 
                    fontWeight: menu_cliente === 'pagos-pendientes' || seleccion_menu === 'pagos-pendientes' ? 700 : 500,  fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer'}}
                    onMouseOver={() => setSeleccionMenu('pagos-pendientes')} onMouseLeave={() => setSeleccionMenu('')}
                    onClick={() => navigate ('/cliente/pagos-pendientes')}>
                    Pagos pendientes
                </p>
            </div>
            <div style={{width: '100%', height: 30 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, 
                    color: (menu_cliente === 'pagos-realizados' || seleccion_menu === 'pagos-realizados')? 'rgb(23, 43, 222)' : 'rgb(122, 122, 122)', 
                    fontWeight: menu_cliente === 'pagos-realizados' || seleccion_menu === 'pagos-realizados' ? 700 : 500,  fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer'}}
                    onMouseOver={() => setSeleccionMenu('pagos-realizados')} onMouseLeave={() => setSeleccionMenu('')}
                    onClick={() => navigate ('/cliente/pagos-realizados')}>
                    Pagos realizados
                </p>
            </div>
            <div style={{width: '100%', height: 30 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, 
                    color: (menu_cliente === 'mis-opiniones' || seleccion_menu === 'mis-opiniones')? 'rgb(23, 43, 222)' : 'rgb(122, 122, 122)', 
                    fontWeight: menu_cliente === 'mis-opiniones' || seleccion_menu === 'mis-opiniones' ? 700 : 500,  fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer'}}
                    onMouseOver={() => setSeleccionMenu('mis-opiniones')} onMouseLeave={() => setSeleccionMenu('')}
                    onClick={() => navigate ('/cliente/mis-opiniones')}>
                    Mis opiniones
                </p>
            </div>
            <div style={{width: '100%', height: 30 / proporcional, paddingLeft: 15 / proporcional, paddingRight: 15 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, 
                    color: (menu_cliente === 'cerrar-sesion' || seleccion_menu === 'cerrar-sesion')? 'rgb(23, 43, 222)' : 'rgb(122, 122, 122)', 
                    fontWeight: menu_cliente === 'cerrar-sesion' || seleccion_menu === 'cerrar-sesion' ? 700 : 500,  fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'pointer'}}
                    onMouseOver={() => setSeleccionMenu('cerrar-sesion')} onMouseLeave={() => setSeleccionMenu('')}
                    onClick={() => navigate ('/')}>
                    Cerrar sesión
                </p>
            </div>
        </div>
    )
}
