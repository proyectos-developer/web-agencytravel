import React from 'react'

import icono_left from '../../assets/iconos/icono_left_black_96.png'

import ImageTituloTablet from './imagetitulotablet.jsx'
import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import FormularioReservaTablet from './formularioreservatablet.jsx'
import ReservacionTablet from './reservaciontablet.jsx'
import ActividadesTablet from './actividadestablet.jsx'

export default function ReservarTourPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperiorTablet proporcional={proporcional}/>
                </div>
                <ImageTituloTablet proporcional={proporcional}/>
            </div>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
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
                        <FormularioReservaTablet proporcional={proporcional}/>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <ReservacionTablet proporcional={proporcional}/>
                    </div>
                </div>
                <ActividadesTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}