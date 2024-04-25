import React, { useState } from 'react'

import icono_delete from '../../assets/iconos/icono_borrar_red_96.png'
import icono_asterisco_black from '../../assets/iconos/icono_asterisco_black_96.png'
import icono_asterisco_red from '../../assets/iconos/icono_asterisco_red_96.png'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { set_data_page_reserva } from '../../redux/actions/data'

export default function FormularioReservaTablet({proporcional}) {

    const dispatch = useDispatch()

    const [nro_adultos, setNroAdultos] = useState(0)
    const [nro_ninios, setNroNinios] = useState(0)
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [direccion_recojo, setDireccionRecojo] = useState('')
    const [requisitos_especiales, setRequisitosEspeciales] = useState('')

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='shadow rounded' style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='rounded' style={{width: 250 / proporcional, height: 150 / proporcional, border: '1px solid #bdbdbd', marginRight: 20 / proporcional}}>
                        <div className='rounded' style={{width: '100%', height: '100%', background: '#efefef'}}/>
                    </div>
                    <div className='' style={{width: 'auto', height: 'auto'}}>
                        <div className='d-flex justify-content-between' style={{width: 'auto'}}>
                            <div className='d-flex justify-content-start' style={{width: 'auto', height: 'auto'}}>
                                <div style={{width: 'auto', height: 'auto'}}>
                                    <p style={{fontSize: 22 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black', cursor: 'default', fontWeight: 600, 
                                        fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                        Day trip: Huacachina, Islas Ballestas con Butty y Sandboard desde Lima 2024
                                    </p>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                                        <img src={icono_asterisco_black} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                            fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                            Duración: 17 Horas
                                        </p>
                                    </div>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                                        <img src={icono_asterisco_black} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                            fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                            Comprar: 18 hrs. antes.
                                        </p>
                                    </div>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                                        <img src={icono_asterisco_black} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                            fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                            Idioma: Español / Inglés.
                                        </p>
                                    </div>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                                        <img src={icono_asterisco_black} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                            fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                            Pasajero mínimo: 2 Pasajeros.
                                        </p>
                                    </div>
                                    <div className='d-flex' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                                        <img src={icono_asterisco_black} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 3 / proporcional, marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                            fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                            Salidas: 4:00 a.m.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: 'auto', height: 'auto'}}>
                                <div style={{width: 'auto', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: 'auto', height: 'auto'}}>
                                        <img src={icono_delete} style={{width: 48 / proporcional, height: 48 / proporcional, marginBottom: 20 / proporcional}}/>
                                    </div>
                                    <div style={{width: 'auto', height: 'auto'}}>
                                        <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 700, 
                                            fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                                            180.00<br/>US $
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='' style={{width: '24%', height: 'auto'}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 600}}>
                                    NRO DE ADULTOS
                                </p>
                                <img src={icono_asterisco_red} style={{width: 10 / proporcional, height: 10 / proporcional, marginLeft: 5 / proporcional}}/>
                            </div>
                            <input  
                                className='form-control'
                                type='number'
                                style={{width: '100%', height: 40 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', fontWeight: 500}}
                                value={nro_adultos}
                                onChange={(event) => {dispatch(set_data_page_reserva({nro_adultos: event.target.value, nro_ninios: nro_ninios, fecha: fecha, hora: hora,
                                        direccion: direccion_recojo, requisitos: requisitos_especiales})); setNroAdultos(event.target.value)}}
                                id='nro_adultos'
                                placeholder='0'/>
                        </div>
                    </div>
                    <div className='' style={{width: '24%', height: 'auto'}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 600}}>
                                    NRO DE NIñOS
                                </p>
                                <img src={icono_asterisco_red} style={{width: 10 / proporcional, height: 10 / proporcional, marginLeft: 5 / proporcional}}/>
                            </div>
                            <input  
                                className='form-control'
                                type='number'
                                style={{width: '100%', height: 40 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', fontWeight: 500}}
                                value={nro_ninios}
                                onChange={(event) => {dispatch(set_data_page_reserva({nro_adultos: nro_adultos, nro_ninios: event.target.value, fecha: fecha, hora: hora,
                                    direccion: direccion_recojo, requisitos: requisitos_especiales})); setNroNinios(event.target.value)}}
                                id='nro_ninios'
                                placeholder='0'/>
                        </div>
                    </div>
                    <div className='' style={{width: '24%', height: 'auto'}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 600}}>
                                    FECHA
                                </p>
                                <img src={icono_asterisco_red} style={{width: 10 / proporcional, height: 10 / proporcional, marginLeft: 5 / proporcional}}/>
                            </div>
                            <input  
                                className='form-control'
                                type='date'
                                style={{width: '100%', height: 40 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', fontWeight: 500}}
                                value={fecha}
                                onChange={(event) => {dispatch(set_data_page_reserva({nro_adultos: nro_adultos, nro_ninios: nro_ninios, fecha: event.target.value, hora: hora,
                                    direccion: direccion_recojo, requisitos: requisitos_especiales})); setFecha(event.target.value)}}
                                id='nro_adultos'
                                placeholder='0'/>
                        </div>
                    </div>
                    <div className='' style={{width: '24%', height: 'auto'}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 600}}>
                                    HORA
                                </p>
                                <img src={icono_asterisco_red} style={{width: 10 / proporcional, height: 10 / proporcional, marginLeft: 5 / proporcional}}/>
                            </div>
                            <select  
                                className='form-select'
                                style={{width: '100%', height: 40 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', fontWeight: 500}}
                                value={hora}
                                onChange={(event) => {event.target.value !== '0' ? dispatch(set_data_page_reserva({nro_adultos: nro_adultos, nro_ninios: nro_ninios, fecha: fecha, hora: event.target.value,
                                    direccion: direccion_recojo, requisitos: requisitos_especiales})) : null; (event.target.value !== '0' ? setHora(event.target.value) : null)}}
                                id='hora'>
                                <option value='0'>Seleccione un horario</option>
                                <option value='4:00 AM'>4:00 AM</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 600}}>
                                HOTEL - DIRECCIÓN DE RECOJO
                            </p>
                            <img src={icono_asterisco_red} style={{width: 10 / proporcional, height: 10 / proporcional, marginLeft: 5 / proporcional}}/>
                        </div>
                        <textarea  
                            className='form-control'
                            type='default'
                            rows={3}
                            style={{width: '100%', height: 75 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', fontWeight: 500}}
                            value={direccion_recojo}
                            onChange={(event) => {dispatch(set_data_page_reserva({nro_adultos: nro_adultos, nro_ninios: nro_ninios, fecha: fecha, hora: hora,
                                    direccion: event.target.value, requisitos: requisitos_especiales})); setDireccionRecojo(event.target.value)}}
                            id='direccion_recojo'
                            placeholder=''/>
                    </div>
                </div>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 5 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 600}}>
                                REQUISITOS ESPECIALES Y OTRA INFORMACIÓN RELEVANTE
                            </p>
                        </div>
                        <textarea  
                            className='form-control'
                            type='default'
                            rows={3}
                            style={{width: '100%', height: 75 / proporcional, fontSize: 18 / proporcional, color: '#bdbdbd', fontWeight: 500}}
                            value={requisitos_especiales}
                            onChange={(event) => {dispatch(set_data_page_reserva({nro_adultos: nro_adultos, nro_ninios: nro_ninios, fecha: fecha, hora: hora,
                                direccion: direccion_recojo, requisitos: event.target.value}));setRequisitosEspeciales(event.target.value)}}
                            id='requisitos_especiales'
                            placeholder=''/>
                    </div>
                </div>
                <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: 'rgb(23, 43, 222)'}}/>
            </div>
        </div>
    )
}