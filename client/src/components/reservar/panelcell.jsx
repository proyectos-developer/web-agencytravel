import React from 'react'

import icono_left from '../../assets/iconos/icono_left_black_96.png'

import ImageTituloCell from './imagetitulocell.jsx'
import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import FormularioReservaCell from './formularioreservacell.jsx'
import ReservacionCell from './reservacioncell.jsx'
import ActividadesCell from './actividadescell.jsx'

export default function ReservarTourPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperiorCell proporcional={proporcional}/>
                </div>
                <ImageTituloCell proporcional={proporcional}/>
            </div>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                            paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
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
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <FormularioReservaCell proporcional={proporcional}/>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <ReservacionCell proporcional={proporcional}/>
                    </div>
                </div>
                <ActividadesCell proporcional={proporcional}/>
            </div>
        </div>
    )
}