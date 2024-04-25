import React, { useState } from 'react'

import icono_whatsapp from '../../assets/iconos/icono_whatsapp_white_96.png'

import tarjeta_visa from '../../assets/iconos/icono_visa_color_96.png'
import tarjeta_mastercard from '../../assets/iconos/icono_mastercard_color_96.png'
import tarjeta_americanexpress from '../../assets/iconos/icono_americanexpress_color_96.png'
import tarjeta_dinersclub from '../../assets/iconos/icono_dinersclub_color_96.png'
import tarjeta_paypal from '../../assets/iconos/icono_paypal_color_96.png'

export default function InformativoTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <div className='rounded shadow-lg' style={{width: '90%', height: 'auto', padding: 20 / proporcional, background: 'rgb(23, 43, 222)'}}>
                    <div className='rounded' style={{width: '100%',  height: 'auto', border: '1px dashed white', padding: 20 / proporcional}}>
                        <p style={{fontSize: 26 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', marginBottom: 10 / proporcional, fontWeight: 500, textAlign: 'center'}}>
                            ¡SIN CARGOS POR<br/>RESERVACIÓN CON<br/>TARJETA DE CRÉDITO!
                        </p>
                        <p style={{fontSize: 26 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', marginBottom: 10 / proporcional, fontWeight: 700, textAlign: 'center'}}>
                            RESERVA AHORA CON TAN <br/>SOLO EL 30%
                        </p>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <div className='rounded shadow-lg' style={{width: '90%', height: 'auto', paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                        paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, background: '#10b02c'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%',  height: 'auto'}}>
                        <div className='d-flex' style={{width: 'auto', height: 'auto'}}>
                            <img src={icono_whatsapp} style={{width: 64 / proporcional, height: 64 / proporcional, margin: 19 / proporcional}}/>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'white', marginBottom: 20 / proporcional, fontWeight: 500}}>
                                    ¡RESERVA POR WHATSAPP!
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'white', marginBottom: 5 / proporcional, fontWeight: 700}}>
                                    +51 999 XXXXXX
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'white', marginBottom: 5 / proporcional, fontWeight: 700}}>
                                    24 HORAS ONLINE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <div className='rounded' style={{width: '90%', height: 60 / proporcional, marginBottom: 20 / proporcional, background: 'rgb(23, 43, 222)', cursor: 'default',
                    border: '1px solid rgb(23, 43, 222)'}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${60 / proporcional}px`, color: 'white', marginBottom: 5 / proporcional, fontWeight: 700, textAlign: 'center'}}>
                        PAGOS CON:
                    </p>
                </div>
            </div>


            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <img src={tarjeta_visa} style={{width: '19%', height: '100%'}}/>
                        <img src={tarjeta_mastercard} style={{width: '19%', height: '100%'}}/>
                        <img src={tarjeta_americanexpress} style={{width: '19%', height: '100%'}}/>
                        <img src={tarjeta_dinersclub} style={{width: '19%', height: '100%'}}/>
                        <img src={tarjeta_paypal} style={{width: '19%', height: '100%'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}