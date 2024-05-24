import React from 'react'

import TituloActividadđCell from './tituloactividadcell.jsx'
import FotosActividadđCell from './fotosactividadcell.jsx'
import DetallesExperienciađCell from './detallesexperienciacell.jsx'
import ExperienciađCell from './experienciacell.jsx'
import ReservasCarritođCell from './reservascarritocell.jsx'
import InformativođCell from './informativocell.jsx'
import GaleriaCell from './galeriacell.jsx'
import OpinionesCell from './opinionescell.jsx'
import RecomendacionesCell from './recomendacionescell.jsx'
import ActividadesCell from './actividadescell.jsx'
import MenuLateralCarritoCell from '../comun/menulateralcarritocell.jsx'

import { useSelector } from 'react-redux'

export default function ActividadPanelCell({proporcional}) {

    const {open_menu_lateral_carrito} = useSelector(({data_actions}) => data_actions)

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <TituloActividadđCell proporcional={proporcional}/>
            <FotosActividadđCell proporcional={proporcional}/>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <DetallesExperienciađCell proporcional={proporcional}/>
                    <ExperienciađCell proporcional={proporcional}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <ReservasCarritođCell proporcional={proporcional}/>
                    <InformativođCell proporcional={proporcional}/>
                </div>
            </div>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <GaleriaCell proporcional={proporcional}/>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <OpinionesCell proporcional={proporcional}/>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <RecomendacionesCell proporcional={proporcional}/>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
            <ActividadesCell proporcional={proporcional}/>
            {
                open_menu_lateral_carrito ? (
                    <MenuLateralCarritoCell proporcional={proporcional}/>
                ) : null
            }
        </div>
    )
}