import React from 'react'

import icono_best from '../../../assets/iconos/icono_best_choice_96.png'
import icono_trip_advisor from '../../../assets/iconos/icono_trip_advisor_96.png'
import icono_comments from '../../../assets/iconos/icono_comments_black_96.png'
import icono_check from '../../../assets/iconos/icono_check_black_96.png'
import icono_clock from '../../../assets/iconos/icono_clock_black_96.png'
import icono_calificacion_star_yellow from '../../../assets/iconos/icono_calificacion_yellow_96.png'
import icono_calificacion_empty_yellow from '../../../assets/iconos/icono_calificacion_empty_yellow_96.png'

export default function CardActividadCell({proporcional}) {

    return (
        <div className='shadow rounded' style={{width: '48%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 250 / proporcional, background: '#efefef'}}>
                <div className='position-absolute' style={{bottom: 10 / proporcional, right: 10 / proporcional}}>
                    <img src={icono_trip_advisor} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%',  height: 'auto', marginBottom: 5 / proporcional}}>
                    <div className='d-flex Justify-content-center' style={{width: '50%', height: 'auto', marginRight: 5 / proporcional}}>
                        <img src={icono_clock} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(22, 22, 22)', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif'}} >
                            2 Horas y 30 Minutos
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '50%', height: 'auto', marginRight: 5 / proporcional}}>
                        <img src={icono_comments} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(22, 22, 22)', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif'}} >
                            Español / Ingés
                        </p>
                    </div>      
                </div>   
                <div className='d-flex justify-content-center' style={{width: '100%',  height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={icono_check} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 5 / proporcional}}/>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(22, 22, 22)', cursor: 'default', fontWeight: 500, 
                        fontFamily: 'Open Sans, sans-serif'}} >
                        Cancelación gratuita
                    </p>
                </div> 
                <div style={{width: '100%', height: 'auto', marginBottom: 100 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', fontWeight: 700, 
                            fontFamily: 'Open Sans, sans-serif'}} >
                            Actividad turística
                        </p>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(39, 39, 39)', cursor: 'default', fontWeight: 700, 
                            fontFamily: 'Open Sans, sans-serif'}} >
                            Lugar | Distrito Región | año
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div style={{width:'auto', height: 'auto', marginRight: 5 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                                fontFamily: 'Open Sans, sans-serif'}} >
                                5.0/5.0
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 'auto', paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional, marginRight: 5 / proporcional}}>
                            <img src={icono_calificacion_star_yellow} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_calificacion_star_yellow} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_calificacion_star_yellow} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_calificacion_star_yellow} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_calificacion_star_yellow} style={{width: 18 / proporcional, height: 18 / proporcional}}/>
                        </div>
                        <div style={{width:'auto', height: 'auto', marginRight: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Open Sans, sans-serif'}} >
                                6 opiniones
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width:'48%', height: 30 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', cursor: 'default', fontWeight: 480, 
                                fontFamily: 'Open Sans, sans-serif'}} >
                                Free Tour
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width:'48%', height: 30 / proporcional}}>
                            <button className='btn rounded-pill' style={{width: '80%', height: 30 / proporcional, fontSize: 16 / proporcional, background: 'rgb(23, 43, 222)'}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    Reservar
                                </p>
                            </button>
                        </div>
                    </div>
                </div>                            
            </div>
        </div>
    )
}