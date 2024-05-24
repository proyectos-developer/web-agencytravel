import React, { useState } from 'react'

export default function ResumenReservasTablet({proporcional}) {

    const [cantidad_deposito, setCantidadDeposito] = useState('')

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='shadow-lg rounded' style={{width: '100%', height: 'auto'}}>
                <div className='rounded-top' style={{width:'100%', height: 10 / proporcional, background: 'rgb(23, 43, 222)'}}/>
                <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div style={{width: 150 / proporcional, height: 100 / proporcional, marginRight: 10 / proporcional}}>
                            <div style={{width: '100%', height: '100%', border: '1px solid #bdbdbd', background: '#efefef', borderRadius: 8 / proporcional}}/>
                        </div>
                        <div style={{width: 'auto', height: 100 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', fontWeight: 600, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                                Tour al Valle Sagrado + <br/>Chinchero (Servicio Privado)
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', fontWeight: 500, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                                2024-04-29, 9:00 AM
                            </p>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 700, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                            1 adulto
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                                Español / Inglés
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                                208.00 US$
                            </p>
                        </div>
                    </div>
                    <div className='rounded-pill' style={{width:'100%', height: 2 / proporcional, background: 'rgb(23, 43, 222)', marginBottom: 20 / proporcional}}/>
                    <div style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 600, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                            Cantidad de depóisto
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <select 
                            className='form-control'
                            id='cantidad_deposito'
                            value={cantidad_deposito}
                            onChange={(event) => event.target.value !== '0' ? setCantidadDeposito(event.target.value) : null}
                            style={{width: '100%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#212121', fontWeight: 500}}>
                            <option value='0'>Seleccionar cantidad depósito</option>
                        </select>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                                Total a pagar:
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', fontWeight: 700, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                                208.00 US$
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}