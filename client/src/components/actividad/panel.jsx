import React from 'react'

import TituloActividad from './tituloactividad.jsx'
import FotosActividad from './fotosactividad.jsx'
import DetallesExperiencia from './detallesexperiencia.jsx'
import Experiencia from './experiencia.jsx'
import ReservasCarrito from './reservascarrito.jsx'
import Informativo from './informativo.jsx'
import Galeria from './galeria.jsx'
import Opiniones from './opiniones.jsx'
import Recomendaciones from './recomendaciones.jsx'
import Actividades from './actividades.jsx'
import MenuLateralCarrito from '../comun/menulateralcarrito.jsx'

import { useSelector } from 'react-redux'

export default function ActividadPanel({proporcional}) {

    const {open_menu_lateral_carrito} = useSelector(({data_actions}) => data_actions)

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <TituloActividad proporcional={proporcional}/>
            <FotosActividad proporcional={proporcional}/>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '70%', height: 'auto'}}>
                        <DetallesExperiencia proporcional={proporcional}/>
                        <Experiencia proporcional={proporcional}/>
                    </div>
                    <div style={{width: '30%', height: 'auto'}}>
                        <ReservasCarrito proporcional={proporcional}/>
                        <Informativo proporcional={proporcional}/>
                    </div>
                </div>
            </div>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <Galeria proporcional={proporcional}/>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <Opiniones proporcional={proporcional}/>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <Recomendaciones proporcional={proporcional}/>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <Actividades proporcional={proporcional}/>
            {
                open_menu_lateral_carrito ? (
                    <MenuLateralCarrito proporcional={proporcional}/>
                ) : null
            }
        </div>
    )
}