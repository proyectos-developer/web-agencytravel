import React, { useState } from 'react'

import icono_asterisco from '../../../assets/iconos/icono_asterisco_red_96.png'

export default function MisDatosCell({proporcional}) {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [nro_celular, setNroCelular] = useState('')
    const [pais, setPais] = useState('')

    const [boton_actualizar, setBotonActualizar] = useState (false)

    const actualizar_datos = () => {
        
    }
    
    return (
        <div style={{width: '90%', height: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: 'rgb(122, 122, 122)', fontWeight: 500, fontFamily: 'Roboto, sans-serif', 
                        textAlign: 'left', cursor: 'default', marginRight: 5 / proporcional, marginBottom: 0}}>
                        Nombres
                    </p>
                    <img src={icono_asterisco} style={{width: 12 / proporcional, height: 12 / proporcional}}/>
                </div>
                <input
                    type='default'
                    className='form-control'
                    style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#212121', fontWeight: 500}}
                    placeholder=''
                    value={nombres}
                    onChange={(event) => setNombres(event.target.value)}
                    id='nombres'/>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: 'rgb(122, 122, 122)', fontWeight: 500, fontFamily: 'Roboto, sans-serif', 
                        textAlign: 'left', cursor: 'default', marginRight: 5 / proporcional, marginBottom: 0}}>
                        Apellidos
                    </p>
                </div>
                <input
                    type='default'
                    className='form-control'
                    style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#212121', fontWeight: 500}}
                    placeholder=''
                    value={apellidos}
                    onChange={(event) => setApellidos(event.target.value)}
                    id='apellidos'/>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: 'rgb(122, 122, 122)', fontWeight: 500, fontFamily: 'Roboto, sans-serif', 
                        textAlign: 'left', cursor: 'default', marginRight: 5 / proporcional, marginBottom: 0}}>
                        Correo
                    </p>
                </div>
                <input
                    type='email'
                    className='form-control'
                    style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#212121', fontWeight: 500}}
                    placeholder=''
                    value={correo}
                    onChange={(event) => setCorreo(event.target.value)}
                    id='correo'/>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: 'rgb(122, 122, 122)', fontWeight: 500, fontFamily: 'Roboto, sans-serif', 
                        textAlign: 'left', cursor: 'default', marginRight: 5 / proporcional, marginBottom: 0}}>
                        Nro celular
                    </p>
                </div>
                <input
                    type='number'
                    className='form-control'
                    style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#212121', fontWeight: 500}}
                    placeholder=''
                    value={nro_celular}
                    onChange={(event) => setNroCelular(event.target.value)}
                    id='nro_celular'/>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, color: 'rgb(122, 122, 122)', fontWeight: 500, fontFamily: 'Roboto, sans-serif', 
                        textAlign: 'left', cursor: 'default', marginRight: 5 / proporcional, marginBottom: 0}}>
                        País
                    </p>
                </div>
                <select
                    className='form-control'
                    style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#212121', fontWeight: 500}}
                    value={pais}
                    onChange={(event) => event.target.value !== '0' ? setPais(event.target.value) : ''}
                    id='pais'>
                    <option value='0'>Seleccionar país</option>
                </select>
            </div>
            <button className='btn rounded' 
                style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, fontWeight: 600, color: boton_actualizar ? 'rgb(23, 43, 222)' : 'white', 
                        border: '1px solid rgb(23, 43, 222)', background: boton_actualizar ? 'white' : 'rgb(23, 43, 222)'}}
                    onMouseOver={() => setBotonActualizar(true)} onMouseLeave={() => setBotonActualizar(false)}
                    onClick={() => actualizar_datos()}>
                    ACTUALIZAR MIS DATOS
            </button>
        </div>
    )
}