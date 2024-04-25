import React, { useState } from 'react'

import icono_star_yellow from '../../assets/iconos/icono_calificacion_yellow_96.png'

import CardOpinionTablet from './card/opiniontablet.jsx'
import { useNavigate } from 'react-router-dom'

export default function OpinionesTablet({proporcional}) {

    const navigate = useNavigate()

    const [boton_opiniones, setBotonOpiniones] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '48%', height: 'auto', paddingLeft: 50 / proporcional}}>
                        <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 5 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 600, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                            Opiniones de nuestros viajeros
                        </p>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 5 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                            Todas las opiniones recientes que han sido escritas por clientes reales que nos han ayudado a mejorar cada día más.
                        </p>
                    </div>
                    <div style={{width: '48%', height: 'auto', paddingRight: 50 / proporcional}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: 'auto', height: 'auto'}}>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 5 / proporcional}}>
                                        <div style={{width: 'auto', height: 28 / proporcional, marginRight: 10 / proporcional}}>
                                            <p style={{fontSize: 26 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', 
                                                fontWeight: 800, fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                                5.0 / 5.0
                                            </p>
                                        </div>
                                        <div className='d-flex' style={{width: 'auto', height: 26 / proporcional, paddingTop: 1 / proporcional, paddingBottom: 1 / proporcional}}>
                                            <img src={icono_star_yellow} style={{width: 26 / proporcional, height: 26 / proporcional, marginRight: 5 / proporcional}}/>
                                            <img src={icono_star_yellow} style={{width: 26 / proporcional, height: 26 / proporcional, marginRight: 5 / proporcional}}/>
                                            <img src={icono_star_yellow} style={{width: 26 / proporcional, height: 26 / proporcional, marginRight: 5 / proporcional}}/>
                                            <img src={icono_star_yellow} style={{width: 26 / proporcional, height: 26 / proporcional, marginRight: 5 / proporcional}}/>
                                            <img src={icono_star_yellow} style={{width: 26 / proporcional, height: 26 / proporcional}}/>
                                        </div>
                                    </div>
                                    <div style={{width: 'auto', height: 20 / proporcional, marginRight: 0 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', 
                                            fontWeight: 400, fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                            48 opiniones | 18 pasajeros
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <CardOpinionTablet proporcional={proporcional}/>
                    <CardOpinionTablet proporcional={proporcional}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <CardOpinionTablet proporcional={proporcional}/>
                    <CardOpinionTablet proporcional={proporcional}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <button className='btn rounded-pill' style={{width: '25%', background: boton_opiniones ? 'rgb(23, 43, 222)' : 'white', height: 40 / proporcional, fontSize: 18 / proporcional, 
                        color: boton_opiniones ? 'white' : 'rgb(23, 43, 222)', fontWeight: 600, border: '1px solid rgb(23, 43, 222)'}}
                        onMouseOver={() => setBotonOpiniones(true)} onMouseLeave={() => setBotonOpiniones(false)} 
                        onClick={() => navigate ('/opiniones')}>
                        Ver todas las opiniones
                    </button>
                </div>
            </div>
        </div>
    )
}