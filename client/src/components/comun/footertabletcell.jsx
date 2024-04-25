import React from 'react'

import icono_facebook from '../../assets/iconos/icono_facebook_white_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_white_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_white_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_white_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_white_96.png'

import icono_email from '../../assets/iconos/icono_email_white_96.png'
import icono_phone from '../../assets/iconos/icono_phone_white_96.png'
import icono_location from '../../assets/iconos/icono_location_white_96.png'

import icono_right from '../../assets/iconos/icono_right_white_96.png'

export default function FooterCell({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, 
                paddingTop: 200 / proporcional, paddingBottom: 50 / proporcional, background: 'rgb(23, 43, 222)'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '90%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div style={{width: '90%', height: 'auto'}}>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white', cursor: 'default', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif'}} 
                                onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                AGENCIA
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Roboto, sans-serif'}} 
                                onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                <div className='rounded-circle' style={{background: '#3cb371', width: 50 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_facebook} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 9 / proporcional}}/>
                                </div>
                                <div className='rounded-circle' style={{background: '#3cb371', width: 50 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_instagram} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 9 / proporcional}}/>
                                </div>
                                <div className='rounded-circle' style={{background: '#3cb371', width: 50 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_twitter} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 9 / proporcional}}/>
                                </div>
                                <div className='rounded-circle' style={{background: '#3cb371', width: 50 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_tiktok} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 9 / proporcional}}/>
                                </div>
                                <div className='rounded-circle' style={{background: '#3cb371', width: 50 / proporcional, height: 50 / proporcional}}>
                                    <img src={icono_linkedin} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 9 / proporcional}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white', cursor: 'default', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif'}} 
                                onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                Menu
                            </p>
                            <div className='rounded-pill' style={{width: '20%', height: 2 / proporcional, background: 'white', marginBottom: 60 / proporcional, marginBottom: 50 / proporcional}}/>
                            <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}}
                                    onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                <img src={icono_right} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 500, 
                                    fontFamily: 'Roboto, sans-serif'}} >
                                    Acera de nosotros
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}}
                                    onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                <img src={icono_right} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 500, 
                                    fontFamily: 'Roboto, sans-serif'}} >
                                    Viajes
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}}
                                    onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                <img src={icono_right} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 500, 
                                    fontFamily: 'Roboto, sans-serif'}} >
                                    Blog
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}}
                                    onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                <img src={icono_right} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 500, 
                                    fontFamily: 'Roboto, sans-serif'}} >
                                    Contáctanos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white', cursor: 'default', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif'}} 
                                onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                Contácto
                            </p>
                            <div className='rounded-pill' style={{width: '20%', height: 2 / proporcional, background: 'white', marginBottom: 60 / proporcional, marginBottom: 50 / proporcional}}/>
                            <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}}
                                    onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                <img src={icono_location} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 500, 
                                    fontFamily: 'Roboto, sans-serif'}} >
                                    Dirección, número, distrito, región.
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}}
                                    onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                <img src={icono_phone} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 500, 
                                    fontFamily: 'Roboto, sans-serif'}} >
                                    Número de teléfono
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}}
                                    onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                <img src={icono_phone} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 500, 
                                    fontFamily: 'Roboto, sans-serif'}} >
                                    Número de celular
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', cursor: 'pointer'}}
                                    onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                <img src={icono_email} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 500, 
                                    fontFamily: 'Roboto, sans-serif'}} >
                                    Correo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white', cursor: 'default', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif'}} 
                                onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                Galería
                            </p>
                            <div className='rounded-pill' style={{width: '20%', height: 2 / proporcional, background: 'white', marginBottom: 60 / proporcional, marginBottom: 50 / proporcional}}/>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='rounded' style={{width: '31%', height: 100 / proporcional, background: '#bdbdbd', marginRight: 20 / proporcional}}/>
                                    <div className='rounded' style={{width: '31%', height: 100 / proporcional, background: '#bdbdbd', marginRight: 20 / proporcional}}/>
                                    <div className='rounded' style={{width: '31%', height: 100 / proporcional, background: '#bdbdbd'}}/>
                                </div>
                                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                    <div className='rounded' style={{width: '31%', height: 100 / proporcional, background: '#bdbdbd', marginRight: 20 / proporcional}}/>
                                    <div className='rounded' style={{width: '31%', height: 100 / proporcional, background: '#bdbdbd', marginRight: 20 / proporcional}}/>
                                    <div className='rounded' style={{width: '31%', height: 100 / proporcional, background: '#bdbdbd'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}