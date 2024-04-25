import React, { useState } from 'react'

export default function Suscripcion({proporcional}) {

    const [suscripcion, setSuscripcion] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingRight: 20 / proporcional, paddingLeft: 20 / proporcional}}>
            <div style={{width: '100%', height: 'auto', background: '#3cb371', paddingBottom: 50 / proporcional, paddingTop: 50 / proporcional, borderRadius: 32 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'white', cursor: 'default', fontWeight: 700, 
                        fontFamily: 'Roboto, sans-serif'}} >
                        Obtén ofertas especiales de AGENCIA
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', cursor: 'default', fontWeight: 500, 
                        fontFamily: 'Roboto, sans-serif'}} >
                        Regístrate o suscribete y obten los mejores preicos en tu correo
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' sytle={{width: '100%', height: 50 / proporcional}}>
                        <input 
                            className='form-control'
                            type='email'
                            style={{width: '80%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#efefef', background: 'white', borderTopLeftRadius: 8 / proporcional,
                                    borderBottomLeftRadius: 8 / proporcional, borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                            value={suscripcion}
                            onChange={(event) => setSuscripcion(event.target.value)}
                            id='suscripcion'
                            placeholder='Ingrese su correo'/>
                        <button className='btn' style={{width: 150 / proporcional, height: 50 / proporcional, background: 'black', fontSize: 18 / proporcional, color: 'white',
                            borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 8 / proporcional, borderTopRightRadius:  8 / proporcional}}>
                            SUSCRIBIRSE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
