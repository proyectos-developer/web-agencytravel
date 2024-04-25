import React from 'react'

import icono_shop_blue from '../../assets/iconos/icono_shop_blue_96.png'
import icono_calendar_white from '../../assets/iconos/icono_calendar_white_96.png'

export default function ReservasCarritoTablet({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: '100%', height: 280 / proporcional, marginBottom: 30 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 280 / proporcional}}>
                <div className='shadow-lg rounded' style={{width: '90%', height: 280 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: '100%', paddingTop: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                        <div style={{width: '40%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto', paddingTop: 12.5 / proporcional, paddingBottom: 12.5 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(23, 43, 222)', marginBottom: 5 / proporcional, fontWeight: 600}}>
                                    Antes <span style={{textDecoration: 'line-through'}}> $150.00</span>
                                </p>
                                <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'red', marginBottom: 5 / proporcional, fontWeight: 600}}>
                                    $90.00
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(23, 43, 222)', marginBottom: 0 / proporcional, fontWeight: 600}}>
                                    por persona
                                </p>
                            </div>
                        </div>
                        <div style={{width: '60%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex rounded-pill justify-content-center' style={{width: '100%', height: 50 / proporcional, background: 'rgb(43, 23, 222)', cursor: 'pointer',
                                    marginBottom: 20 / proporcional}}>
                                    <img src={icono_calendar_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 15 / proporcional,
                                            marginBottom: 15 / proporcional, marginRight: 10 / proporcional}}/>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', marginBottom: 0 / proporcional, fontWeight: 600}}
                                        onClick={() => navigate ('/tour/actividad/reservar')}>
                                        Reservar
                                    </p>
                                </div>
                                <div className='d-flex rounded-pill justify-content-center' style={{width: '100%', height: 50 / proporcional, background: 'white', cursor: 'pointer',
                                    border: '1px solid rgb(23, 43, 222)'}}>
                                    <img src={icono_shop_blue} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 15 / proporcional,
                                            marginBottom: 15 / proporcional, marginRight: 10 / proporcional}}/>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'rgb(23, 43, 222)', marginBottom: 0 / proporcional, fontWeight: 600}}>
                                        Agregar al carrito
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}