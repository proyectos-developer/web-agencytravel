import React, { useState } from 'react'

import image_slider_00 from '../../../assets/images/image_machupicchu_cliente_1920.png'
import image_slider_01 from '../../../assets/images/image_huaraz_cliente_1920.png'
import image_slider_02 from '../../../assets/images/image_centrolima_cliente_1920.png'
import { useNavigate } from 'react-router-dom'

export default function ClienteAccesoPanelCell({proporcional}) {

    const navigate = useNavigate()

    const [correo_cuenta, setCorreoCuenta] = useState ('')
    const [codigo_acceso, setCodigoAcceso] = useState ('')

    const [boton_continuar, setBotonContinuar] = useState (false)
    const [boton_facebook, setBotonFacebook] = useState (false)
    const [boton_google, setBotonGoogle] = useState (false)

    const [boton_logo, setBotonLogo] = useState (false)
    const [step_sesion, setStepSesion] = useState (1)

    const enviar_correo = () => {
        if (step_sesion === 1){
            setStepSesion(2)
        }else{
            navigate('/cliente/reservar')
        }
    }

    const ingresar_con_google = () => {

    }

    const ingresar_con_facebook = () => {

    }

    return (
        <div style={{width: '100%', height: 1110 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 1110 / proporcional}}>
                <div id='carouselClienteCuenta' className='carousel slide' style={{width: '100%', height: 1110 / proporcional}} data-bs-ride='carousel'>
                    <div className='carousel-inner'>
                       <div className='carousel-item active' style={{backgroundImage: `url(${image_slider_00})`, width: '100%', height: 1110 / proporcional, backgroundPosition: 'center', 
                            backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} data-bs-interval='2000'/>
                        <div className='carousel-item' style={{backgroundImage: `url(${image_slider_01})`, width: '100%', height: 1110 / proporcional, backgroundPosition: 'center', 
                                backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} data-bs-interval='2000'/>
                        <div className='carousel-item' style={{backgroundImage: `url(${image_slider_02})`, width: '100%', height: 1110 / proporcional, backgroundPosition: 'center', 
                            backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} data-bs-interval='2000'/>
                    </div>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 1110 / proporcional, background: 'rgba(23, 43, 222, 0.4)'}}>
                    {
                        step_sesion === 1 ? (
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '90%' , height: 'auto'}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                                    <div className='rounded-circle' style={{width: 150 / proporcional, height: 150 / proporcional, background: boton_logo ? 'transparent' : 'white',
                                        border: boton_logo ? '1px solid white' : ''}}
                                        onMouseOver={() => setBotonLogo (true)} onMouseLeave={() => setBotonLogo(false)}
                                        onClick={() => navigate ('/')}>
                                        <p style={{fontSize: 50 / proporcional, lineHeight: `${150 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'pointer', 
                                            fontWeight: 700,  fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                            AGT
                                        </p>
                                    </div>
                                </div>
                                <div className='shadow-lg rounded' style={{width: '100%', height: '100%', padding: 20 / proporcional, background: 'white'}}>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 5 / proporcional, color: 'black', cursor: 'default', fontWeight: 600, 
                                        fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                        Correo:
                                    </p>
                                    <input 
                                        style={{width: '100%', height: 50 / proporcional, border: '1px solid black', color: '#212121', fontSize: 18 / proporcional, marginBottom: 20 / proporcional}}
                                        value={correo_cuenta}
                                        onChange={(event) => setCorreoCuenta(event.target.value)}
                                        id='correo_cuenta'
                                        placeholder=''
                                        type='email'
                                        className='form-control'/>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(81, 81, 81)', cursor: 'default', fontWeight: 500, 
                                        fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                        Te enviaremos un código por correo electrónico para que puedas acceder a la plataforma.
                                    </p>
                                    <button className='btn rounded' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, color: boton_continuar ? 'rgb(23, 43, 222)' : 'white', 
                                        background: boton_continuar ? 'white' : 'rgb(23, 43, 222)', marginBottom: 20 / proporcional,
                                        fontWeight: 700, border: '1px solid rgb(23, 43, 222)'}}
                                        onMouseOver={() => setBotonContinuar(true)} onMouseLeave={() => setBotonContinuar(false)}
                                        onClick={() => enviar_correo()}>
                                        CONTINUAR
                                    </button>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(81, 81, 81)', cursor: 'default', fontWeight: 500, 
                                        fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                        Ó
                                    </p>
                                    <button className='btn rounded' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, color: boton_google ? 'white' : '#bdbdbd', 
                                        background: boton_google ? '#bdbdbd' : 'white', marginBottom: 20 / proporcional,
                                        fontWeight: 700, border: '1px solid #bdbdbd'}}
                                        onMouseOver={() => setBotonGoogle(true)} onMouseLeave={() => setBotonGoogle(false)}
                                        onClick={() => ingresar_con_google()}>
                                        Iniciar sesión con Google
                                    </button>
                                    <button className='btn rounded' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, color: boton_facebook ? 'white' : 'rgb(23, 43, 222)', 
                                        background: boton_facebook ? 'rgb(23, 43, 222)' : 'white', marginBottom: 20 / proporcional,
                                        fontWeight: 700, border: '1px solid rgb(23, 43, 222)'}}
                                        onMouseOver={() => setBotonFacebook(true)} onMouseLeave={() => setBotonFacebook(false)}
                                        onClick={() => ingresar_con_facebook()}>
                                        Inciar sesión con Facebook
                                    </button>
                                </div>
                            </div>
                        ) : step_sesion === 2 ? (
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '90%' , height: 'auto'}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                                    <div className='rounded-circle' style={{width: 150 / proporcional, height: 150 / proporcional, background: boton_logo ? 'transparent' : 'white',
                                        border: boton_logo ? '1px solid white' : ''}}
                                        onMouseOver={() => setBotonLogo (true)} onMouseLeave={() => setBotonLogo(false)}
                                        onClick={() => navigate ('/')}>
                                        <p style={{fontSize: 50 / proporcional, lineHeight: `${150 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'pointer', 
                                            fontWeight: 700,  fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                            AGT
                                        </p>
                                    </div>
                                </div>
                                <div className='shadow-lg rounded' style={{width: '100%', height: '100%', padding: 20 / proporcional, background: 'white'}}>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 5 / proporcional, color: 'black', cursor: 'default', fontWeight: 600, 
                                        fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                        Correo:
                                    </p>
                                    <input 
                                        style={{width: '100%', height: 50 / proporcional, border: '1px solid black', color: '#212121', fontSize: 18 / proporcional, marginBottom: 20 / proporcional}}
                                        value={correo_cuenta}
                                        onChange={(event) => setCorreoCuenta(event.target.value)}
                                        id='correo_cuenta'
                                        placeholder=''
                                        type='email'
                                        className='form-control'/>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 5 / proporcional, color: 'black', cursor: 'default', fontWeight: 600, 
                                        fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                        Código de acceso:
                                    </p>
                                    <input 
                                        style={{width: '100%', height: 50 / proporcional, border: '1px solid black', color: '#212121', fontSize: 18 / proporcional, marginBottom: 20 / proporcional}}
                                        value={codigo_acceso}
                                        onChange={(event) => setCodigoAcceso(event.target.value)}
                                        id='codigo_acceso'
                                        placeholder=''
                                        type='default'
                                        className='form-control'/>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(81, 81, 81)', cursor: 'default', fontWeight: 500, 
                                        fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                        Se ha enviad un correo <br/> a "{correo_cuenta}". <br/> Si no encuentra el correo por favor revisar en la bandeja spam o correos no deseados.
                                    </p>
                                    <button className='btn rounded' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, color: boton_continuar ? 'rgb(23, 43, 222)' : 'white', 
                                        background: boton_continuar ? 'white' : 'rgb(23, 43, 222)', marginBottom: 50 / proporcional,
                                        fontWeight: 700, border: '1px solid rgb(23, 43, 222)'}}
                                        onMouseOver={() => setBotonContinuar(true)} onMouseLeave={() => setBotonContinuar(false)}
                                        onClick={() => enviar_correo()}>
                                        CONTINUAR
                                    </button>
                                    <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-center' style={{width: '49%', height: 'auto'}}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(81, 81, 81)', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Roboto, sans-serif', textAlign: 'center', textDecoration: 'underline'}} >
                                                Enviar un nuevo correo
                                            </p>
                                        </div>
                                        <div className='d-flex justify-content-center' style={{width: '2%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(81, 81, 81)', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                                |
                                            </p>
                                        </div>
                                        <div className='d-flex justify-content-center' style={{width: '49%', height: 'auto'}}>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(81, 81, 81)', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Roboto, sans-serif', textAlign: 'center', textDecoration: 'underline'}} 
                                                onClick={() => setStepSesion(1)} >
                                                Cambiar el correo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}