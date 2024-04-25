import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Reservacion({proporcional}) {

    const navigate = useNavigate()

    const {data_page_reserva} = useSelector(({data_actions}) => data_actions)

    const [nro_adultos, setNroAdultos] = useState(0)
    const [nro_ninios, setNroNinios] = useState(0)
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [direccion_recojo, setDireccionRecojo] = useState('')
    const [requisitos_especiales, setRequisitosEspeciales] = useState('')

    const [cantidad_deposito, setCantidadDeposito] = useState ('')

    const [boton_reservar_ahora, setBotonReservarAhora] = useState (false)

    useEffect(() => {
        setNroAdultos(data_page_reserva.nro_adultos)
        setNroNinios(data_page_reserva.nro_ninios)
        setFecha(data_page_reserva.fecha)
        setHora(data_page_reserva.hora)
        setDireccionRecojo(data_page_reserva.direccion)
        setRequisitosEspeciales(data_page_reserva.requisitos)
    }, [data_page_reserva])

    const reservar_ahora = () => {
        navigate ('/cliente/acceder')
    }

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='shadow-lg rounded' style={{width: '100%', height: 'auto'}}>
                <div className='rounded-top' style={{width:'100%', height: 10 / proporcional, background: 'rgb(23, 43, 222)'}}/>
                <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                    {
                        nro_adultos !== 0 ? (
                            <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 600, 
                                    fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                    x {nro_adultos} (Adulto(s))
                                </p>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 600, 
                                    fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                    Day Trip: Huacachina, Islas Ballestas con Buggy y Sandboard desde Lima 2024
                                </p>
                            </div>
                        ) : null
                    }
                    {
                        nro_ninios !== 0 ? (
                            <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 600, 
                                    fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                    x {nro_ninios} (Niño(s))
                                </p>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 600, 
                                    fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                    Day Trip: Huacachina, Islas Ballestas con Buggy y Sandboard desde Lima 2024
                                </p>
                            </div>
                        ) : null
                    }
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                Descuento
                            </p>
                        </div>
                        <div style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                60.00 US $
                            </p>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                SubToal (1 tour)
                            </p>
                        </div>
                        <div style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                90.00 US $
                            </p>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                            Cantidad de deposito
                        </p>
                        <select
                            className='form-select'
                            style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#212121', fontWeight: 500}}
                            id='cantidad_deposito'
                            value={cantidad_deposito}
                            onChange={(event) => setCantidadDeposito(event.target.value)}>
                            <option value='0'>Seleccionar</option>
                            <option value='100%'>100%</option>
                        </select>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                Total (1 tour)
                            </p>
                        </div>
                        <div style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left'}} >
                                Gratis
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                        <button className='btn rounded-pill' style={{width: '100%', height: 50 / proporcional, fontSize: 20 / proporcional, color: boton_reservar_ahora ? 'rgb(23, 43, 222)' : 'white', 
                            background: boton_reservar_ahora ? 'white' : 'rgb(23, 43, 222)', border: '1px solid rgb(23, 43, 222)'}}
                            onMouseOver={() => setBotonReservarAhora(true)} onMouseLeave={() => setBotonReservarAhora(false)}
                            onClick={() => reservar_ahora()}>
                            RESERVAR AHORA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}