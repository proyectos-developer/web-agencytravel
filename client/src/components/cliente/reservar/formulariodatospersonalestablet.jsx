import React, { useState } from 'react'

import icono_check_box from '../../../assets/iconos/icono_check_box_black_96.png'
import icono_box from '../../../assets/iconos/icono_box_black_96.png'

import icono_asterisco from '../../../assets/iconos/icono_asterisco_red_96.png'

export default function FormularioDatosPersonalesTablet({proporcional}) {

    const [nombre_completo, setNombreCompleto] = useState('')
    const [email, setEmail] = useState ('')
    const [nro_celular, setNroCelular] = useState('')
    const [pais, setPais] = useState ('')

    const [terminos_condiciones, setTerminosCondiciones] = useState (false)
    const [entero_facebook, setEnteroFacebook] = useState (false)
    const [entero_google, setEnteroGoogle] = useState (false)
    const [entero_instagram, setEnteroInstagram] = useState (false)
    const [entero_tripadvisor, setEnteroTripadvisor] = useState (false)

    return (
        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'left', marginRight: 5 / proporcional}} >
                            Nombre completo
                        </p>
                        <img src={icono_asterisco} style={{width: 12 / proporcional, height: 12 / proporcional}}/>
                    </div>
                    <input 
                        style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', border: '1px solid #212121'}}
                        type='default'
                        className='form-control'
                        change={nombre_completo}
                        onChange={(event) => setNombreCompleto(event.target.value)}
                        placeholder=''
                        id='nombre_completo'/>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'left', marginRight: 5 / proporcional}} >
                            EMAIL
                        </p>
                        <img src={icono_asterisco} style={{width: 12 / proporcional, height: 12 / proporcional}}/>
                    </div>
                    <input 
                        style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', border: '1px solid #212121'}}
                        type='email'
                        className='form-control'
                        change={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder=''
                        id='email'/>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'left', marginRight: 5 / proporcional}} >
                            CELULAR
                        </p>
                        <img src={icono_asterisco} style={{width: 12 / proporcional, height: 12 / proporcional}}/>
                    </div>
                    <input 
                        style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', border: '1px solid #212121'}}
                        type='default'
                        className='form-control'
                        change={nro_celular}
                        onChange={(event) => setNroCelular(event.target.value)}
                        placeholder=''
                        id='nro_celular'/>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left', marginRight: 5 / proporcional}} >
                        PAIS
                    </p>
                    <img src={icono_asterisco} style={{width: 12 / proporcional, height: 12 / proporcional}}/>
                </div>
                <select 
                    style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', border: '1px solid #212121'}}
                    className='form-select'
                    change={pais}
                    onChange={(event) => event.target.value !== '0' ? setPais(event.target.value) : ''}
                    placeholder=''
                    id='pais'>
                    <option value='0'>Seleccionar país</option>
                </select>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={terminos_condiciones ? icono_check_box : icono_box} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional,
                        cursor: 'pointer'}} onClick={() => setTerminosCondiciones(!terminos_condiciones)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left', marginRight: 5 / proporcional}} >
                        He leído y acepto los <span style={{color: 'rgb(23, 43, 222)', fontWeight: 500, textDecoration: 'underline', cursor: 'pointer'}}>Términos y condiciones</span>
                    </p>
                </div>

                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black', fontWeight: 600, 
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                    ¿Cómo se enteró de nosotros
                </p>

                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={entero_facebook ? icono_check_box : icono_box} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional,
                        cursor: 'pointer'}} onClick={() => setEnteroFacebook(!entero_facebook)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left', marginRight: 5 / proporcional}} >
                        Facebook
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={entero_google ? icono_check_box : icono_box} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional,
                        cursor: 'pointer'}} onClick={() => setEnteroGoogle(!entero_google)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left', marginRight: 5 / proporcional}} >
                        Google
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={entero_instagram ? icono_check_box : icono_box} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional,
                        cursor: 'pointer'}} onClick={() => setEnteroInstagram(!entero_instagram)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left', marginRight: 5 / proporcional}} >
                        Instagram
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <img src={entero_tripadvisor ? icono_check_box : icono_box} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional,
                        cursor: 'pointer'}} onClick={() => setEnteroTripadvisor(!entero_tripadvisor)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                        fontFamily: 'Roboto, sans-serif', textAlign: 'left', marginRight: 5 / proporcional}} >
                        Tripadvisor
                    </p>
                </div>
            </div>
        </div>
    )
}