import React from 'react'

import icono_satisfaccion from '../../assets/iconos/icono_satisfaccion_asegurada_blue_96.png'
import icono_precio from '../../assets/iconos/icono_mejores_precios_blue_96.png'
import icono_servicios_personalizados from '../../assets/iconos/icono_servicios_personzaliados_blue_96.png'
import icono_clientes from '../../assets/iconos/icono_clientes_blue_96.png'
import icono_reservas from '../../assets/iconos/icono_reservas_blue_96.png'
import icono_pagos_seguros from '../../assets/iconos/icono_pago_seguro_blue_96.png'

export default function BeneficiosTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
            background: '#efefef'}}>
            <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 500, 
                fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                Beneficios que te ofrecemos
            </p>
            <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 20 / proporcional, color: '#212121', cursor: 'default', fontWeight: 700, 
                fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                ¿Por qué reservar con ...?
            </p>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_satisfaccion} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Satisfacción Garantizada
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 400, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Somos una empresa local, comprometida con el proceso de mejora continua orientado a alcanzar la satisfacción de los clientes a más del 100%
                            </p>
                        </div>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_precio} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Mejores precios
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 400, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Con .., obtienes opciones y experiencias a precios cómods, accesibles reserva ahora ocn 30% y luego al empezar el tour.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_servicios_personalizados} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Servicios Personalizados
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Ofrecemos servicio personalizado y de calidad con grupos pequeños no mayores a 16 personas.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_clientes} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                +5000 clientes
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 400, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                +5000 clientes garantizan la calidad de nuestros servicios de turismo y hospedaje alrededor del Perú.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                    <div style={{width: '48%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_reservas} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Reserva rápida
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 400, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Reserva con pasos simples, no mayores a 2 minutos, realiza tu reservación sin complicaciones fácil y seguro.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '48%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_pagos_seguros} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 700, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Pagos seguros
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', 
                                fontWeight: 500, fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                Rserva tu tour solo con el 30% de forma segura, sin cargos ni moras por reservas o tarjetas de crédito.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}