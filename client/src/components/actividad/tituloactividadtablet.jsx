import React from 'react'

import icono_facebook from '../../assets/iconos/icono_facebook_white_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_white_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_white_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_white_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_white_96.png'

import icono_star_yellow from '../../assets/iconos/icono_calificacion_yellow_96.png'

export default function TituloActividadTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '65%', height: 64 / proporcional}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'black', marginBottom: 0, fontWeight: 700}}>
                        Day Trip: Huacachina, Islas Ballestas con Buggy y Sandboard desde Lima 2024
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '23%', height: 64 / proporcional}}>
                    <div className='' style={{width: 'auto', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'black', marginBottom: 0, fontWeight: 500, textDecoration: 'underline'}}>
                                Compartir
                            </p>
                        </div>
                        <div className='d-flex' style={{width: 'auto', height: 32 / proporcional}}>
                            <div className='rounded-circle' 
                                style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional, background: '#212121'}}>
                                <img src={icono_facebook} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 7 / proporcional}}/>
                            </div>
                            <div className='rounded-circle' 
                                style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional, background: '#212121'}}>
                                <img src={icono_instagram} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 7 / proporcional}}/>
                            </div>
                            <div className='rounded-circle' 
                                style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional, background: '#212121'}}>
                                <img src={icono_twitter} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 7 / proporcional}}/>
                            </div>
                            <div className='rounded-circle' 
                                style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional, background: '#212121'}}>
                                <img src={icono_tiktok} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 7 / proporcional}}/>
                            </div>
                            <div className='rounded-circle' 
                                style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional, background: '#212121'}}>
                                <img src={icono_linkedin} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 7 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 22 / proporcional, marginBottom: 50 / proporcional}}>
                <div style={{width: 'auto', height: 22 / proporcional, marginRight: 10 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: 'black', marginBottom: 0, fontWeight: 600}}>
                        5.0/5.0
                    </p>
                </div>
                <img src={icono_star_yellow} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                <img src={icono_star_yellow} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                <img src={icono_star_yellow} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                <img src={icono_star_yellow} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                <img src={icono_star_yellow} style={{width: 22 / proporcional, height: 22 / proporcional, padding: 2 / proporcional}}/>
                <div style={{width: 'auto', height: 22 / proporcional, marginRight: 10 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: 'rgb(51, 51, 51)', marginBottom: 0, fontWeight: 500}}>
                        3 opiniones
                    </p>
                </div>
            </div>
        </div>
    )
}