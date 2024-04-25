import React from 'react'

import icono_left from '../../assets/iconos/icono_left_black_96.png'

import ImageTitulo from './imagetitulo.jsx'
import MenuSuperior from '../comun/menusuperior.jsx'
import FormularioReserva from './formularioreserva.jsx'
import Reservacion from './reservacion.jsx'
import Actividades from './actividades.jsx'

export default function ReservarTourPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperior proporcional={proporcional}/>
                </div>
                <ImageTitulo proporcional={proporcional}/>
            </div>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional,
                            paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black', cursor: 'default', fontWeight: 700, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                            Reservar
                        </p>
                        <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                            <img src={icono_left} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                fontFamily: 'Roboto, sans-serif', textDecoration: 'underline'}}>
                                Ver todas las reservas que has hecho
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div style={{width: '64%', height: 'auto'}}>
                        <FormularioReserva proporcional={proporcional}/>
                    </div>
                    <div style={{width: '34%', height: 'auto'}}>
                        <Reservacion proporcional={proporcional}/>
                    </div>
                </div>
                <Actividades proporcional={proporcional}/>
            </div>
        </div>
    )
}