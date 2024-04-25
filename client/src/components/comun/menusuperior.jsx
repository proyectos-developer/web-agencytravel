import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import icono_down_black from '../../assets/iconos/icono_down_black_96.png'
import icono_search_black from '../../assets/iconos/icono_search_black_96.png'
import icono_profile_black from '../../assets/iconos/icono_profile_black_96.png'
import icono_shop_black from '../../assets/iconos/icono_shop_black_96.png'

import icono_down_white from '../../assets/iconos/icono_down_white_96.png'
import icono_search_white from '../../assets/iconos/icono_search_white_96.png'
import icono_profile_white from '../../assets/iconos/icono_profile_white_96.png'
import icono_shop_white from '../../assets/iconos/icono_shop_white_96.png'

import icono_down_shop_black from '../../assets/iconos/icono_down_shop_black_96.png'
import icono_down_shop_white from '../../assets/iconos/icono_down_shop_white_96.png'
import { useDispatch } from 'react-redux';
import { set_screen_search } from '../../redux/actions/data';

export default function MenuSuperior({proporcional}) {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const [seleccion_menu, setSeleccionMenu] = useState ('')
    const [menu, setMenu] = useState('')

    useEffect(() => {
        setMenu(location.pathname.split ('/')[1])
    }, [location.pathname.split('/')[1]])

    return (
        <div className='' style={{width: '100%', heigh: 100 / proporcional, 
            background: (location.pathname.split ('/')[1] !== '' && location.pathname.split('/')[3] === undefined && location.pathname.split('/')[2] !== 'reservar') ? 'rgb(23, 43, 222)' : 'transparent', zIndex: 99999}}>
            <div style={{width: '100%', height: 100 / proporcional, paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 100 / proporcional}}>
                    <div style={{width: '25%', height: 100 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '100%', height: 100 / proporcional, paddingTop: 7 / proporcional, paddingBottom: 7 / proporcional}}>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${86 / proporcional}px`, marginBottom: 0, color: location.pathname.split ('/')[1] ? 'white' : 'black', cursor: 'pointer', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif'}} 
                                onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                AGENCIA
                            </p>
                        </div>
                    </div>
                    <div style={{width: '50%', height: 100 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingTop: 37 / proporcional, paddingBottom: 37 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '20%', height: 26 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: location.pathname.split ('/')[1] ? 'white' :  'black', cursor: 'pointer', 
                                    fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                    cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                    onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}
                                    onMouseOver={() => setSeleccionMenu ('inicio')} onMouseLeave={() => setSeleccionMenu('')}>
                                    Inicio
                                </p>
                                <img style={{width: 16 / proporcional, height: 16 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                                    src={location.pathname.split ('/')[1] ? icono_down_white : icono_down_black}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '20%', height: 26 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: location.pathname.split ('/')[1] ? 'white' :  'black', cursor: 'pointer', 
                                    fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                    cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                    onClick={() => {navigate ('/destinos'); window.scrollTo(0, 0)}}
                                    onMouseOver={() => setSeleccionMenu ('destinos')} onMouseLeave={() => setSeleccionMenu('')}>
                                    Destinos
                                </p>
                                <img style={{width: 16 / proporcional, height: 16 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                                    src={location.pathname.split ('/')[1] ? icono_down_white : icono_down_black}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '20%', height: 26 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: location.pathname.split ('/')[1] ? 'white' :  'black', cursor: 'pointer', 
                                    fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                    cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                    onClick={() => {navigate ('/viajes'); window.scrollTo(0, 0)}}
                                    onMouseOver={() => setSeleccionMenu ('viajes')} onMouseLeave={() => setSeleccionMenu('')}>
                                    Viajes
                                </p>
                                <img style={{width: 16 / proporcional, height: 16 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                                    src={location.pathname.split ('/')[1] ? icono_down_white : icono_down_black}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '20%', height: 26 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: location.pathname.split ('/')[1] ? 'white' :  'black', cursor: 'pointer', 
                                    fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                    cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                    onClick={() => {navigate ('/paquetes'); window.scrollTo(0, 0)}}
                                    onMouseOver={() => setSeleccionMenu ('paquetes')} onMouseLeave={() => setSeleccionMenu('')}>
                                    Paquetes
                                </p>
                                <img style={{width: 16 / proporcional, height: 16 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                                    src={location.pathname.split ('/')[1] ? icono_down_white : icono_down_black}/>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '20%', height: 26 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: location.pathname.split ('/')[1] ? 'white' :  'black', cursor: 'pointer', 
                                    fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                    cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                    onClick={() => {navigate ('/contacto'); window.scrollTo(0, 0)}}
                                    onMouseOver={() => setSeleccionMenu ('contacto')} onMouseLeave={() => setSeleccionMenu('')}>
                                    Contaco
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '25%', height: 100 / proporcional}}>
                        <div className='d-flex justify-content-end' style={{width: '100%', height: 100 / proporcional, paddingTop: 37 / proporcional, paddingBottom: 37 / proporcional}}>
                            <img src={location.pathname.split ('/')[1] ? icono_search_white : icono_search_black} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional,
                                marginRight: 15 / proporcional, cursor: 'pointer'}}
                                onClick={() => dispatch(set_screen_search(true))}/>
                            <img src={location.pathname.split ('/')[1] ? icono_profile_white : icono_profile_black} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional,
                                marginRight: 15 / proporcional, cursor: 'pointer'}}/>
                            <div className='d-flex position-relative' style={{width: 41 / proporcional, height: 26 / proporcional}}>
                                <img src={location.pathname.split('/')[1] ? icono_shop_white : icono_shop_black} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 4 / proporcional, marginRight: 5 / proporcional}}/>
                                <img src={location.pathname.split('/')[1] ? icono_down_white : icono_down_shop_black} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 4 / proporcional, cursor: 'pointer'}}/>
                                <div className='position-absolute' style={{width: 15 / proporcional, height: 15 / proporcional, left: 20 / proporcional, top: -7 / proporcional}}>
                                    <div className='rounded-circle' style={{width: 15 / proporcional, height: 15 / proporcional, background: 'red'}}>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, marginBottom: 0, color: location.pathname.split ('/')[1] ? 'white' :  'black', cursor: 'pointer', 
                                            fontWeight: 600, cursor: 'pointer', fontFamily: 'Roboto, sans-serif', textAlign: 'center'}}>
                                            0
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}