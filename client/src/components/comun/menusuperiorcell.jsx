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

import { useDispatch, useSelector } from 'react-redux';
import { set_open_menu_main, set_screen_search } from '../../redux/actions/data';

export default function MenuSuperiorCell({proporcional}) {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [seleccion_menu, setSeleccionMenu] = useState ('')
    const [menu, setMenu] = useState('')

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    useEffect(() => {
        setMenu(location.pathname.split ('/')[1])
    }, [location.pathname.split('/')[1]])

    return (
        <div className='' style={{width: '100%', heigh: 172 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
            background: (location.pathname.split ('/')[1] !== '' && location.pathname.split('/')[3] === undefined && location.pathname.split('/')[2] !== 'reservar') ? 'rgb(23, 43, 222)' : 'transparent', zIndex: 99999}}>
            <div style={{width: '100%', height: 86 / proporcional}}>
                <div className='d-flex justify-content-end' style={{width: '100%', height: 86 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional}}>
                    <div style={{width: 26 / proporcional, height: 26 / proporcional, marginRight: 10 / proporcional}}>
                        <img src={icono_search} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 4 / proporcional, cursor: 'pointer'}}
                            onClick={() => dispatch(set_screen_search(true))}/>
                    </div>
                    <div style={{width: 26 / proporcional, height: 26 / proporcional, marginRight: 10 / proporcional}}>
                        <img src={icono_profile} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 4 / proporcional, cursor: 'pointer'}}/>
                    </div>
                    <div className='d-flex position-relative' style={{width: 41 / proporcional, height: 26 / proporcional}}>
                        <img src={location.pathname.split('/')[1] ? icono_shop_white : icono_shop_black} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 10 / proporcional, marginRight: 5 / proporcional}}/>
                        <img src={location.pathname.split('/')[1] ? icono_down_white : icono_down_shop_black} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 10 / proporcional, cursor: 'pointer'}}/>
                        <div className='position-absolute' style={{width: 15 / proporcional, height: 15 / proporcional, left: 20 / proporcional, top: -7 / proporcional}}>
                            <div className='rounded-circle' style={{width: 15 / proporcional, height: 15 / proporcional, background: 'red'}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', 
                                    fontWeight: 600, cursor: 'pointer', fontFamily: 'Roboto, sans-serif', textAlign: 'center'}}>
                                    0
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 86 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 86 / proporcional}}>
                    <div style={{width: '50%', height: 86 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '100%', height: 86 / proporcional, paddingTop: 16 / proporcional, paddingBottom: 16 / proporcional}}>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${54 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif'}} 
                                onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                                AGENCIA
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: '100%', height: 86 / proporcional}}>
                    <div style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 33 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={icono_menu} style={{witdth: 20 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                            onClick={() => dispatch(set_open_menu_main(!open_menu_main))}/>
                    </div>
                </div>
            </div>
            {
                open_menu_main ? (
                    <div className='position-absolute start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.4)', top: 172 / proporcional}}>
                        <div style={{width: '50%', height: '100%', background: 'white'}}>
                            <div className='' style={{width: '100%', height: '100%', padding: 50 / proporcional}}>
                                <div className='d-flex justify-content-start' style={{width: '20%', height: 26 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: '#212121', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                        cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                        onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}
                                        onMouseOver={() => setSeleccionMenu ('inicio')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Inicio
                                    </p>
                                    <img style={{width: 16 / proporcional, height: 16 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                                        src={icono_down}/>
                                </div>
                                <div className='d-flex justify-content-start' style={{width: '20%', height: 26 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: '#212121', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                        cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                        onClick={() => {navigate ('/destinos'); window.scrollTo(0, 0)}}
                                        onMouseOver={() => setSeleccionMenu ('destinos')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Destinos
                                    </p>
                                    <img style={{width: 16 / proporcional, height: 16 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                                        src={icono_down}/>
                                </div>
                                <div className='d-flex justify-content-start' style={{width: '20%', height: 26 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: '#212121', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                        cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                        onClick={() => {navigate ('/viajes'); window.scrollTo(0, 0)}}
                                        onMouseOver={() => setSeleccionMenu ('viajes')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Viajes
                                    </p>
                                    <img style={{width: 16 / proporcional, height: 16 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                                        src={icono_down}/>
                                </div>
                                <div className='d-flex justify-content-start' style={{width: '20%', height: 26 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: '#212121', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                        cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                        onClick={() => {navigate ('/paquetes'); window.scrollTo(0, 0)}}
                                        onMouseOver={() => setSeleccionMenu ('paquetes')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Paquetes
                                    </p>
                                    <img style={{width: 16 / proporcional, height: 16 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                                        src={icono_down}/>
                                </div>
                                <div className='d-flex justify-content-start' style={{width: '20%', height: 26 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: '#212121', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'inicio' ? 800 : 600, 
                                        cursor: 'pointer', fontFamily: 'Roboto, sans-serif'}} 
                                        onClick={() => {navigate ('/contacto'); window.scrollTo(0, 0)}}
                                        onMouseOver={() => setSeleccionMenu ('contacto')} onMouseLeave={() => setSeleccionMenu('')}>
                                        Contaco
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}