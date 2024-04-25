import React, { useState } from 'react'

import MenuSuperior from '../../comun/menusuperior'
import ImageTitulo from './imagetitulo.jsx'

import FormularioDatosPersonales from './formulariodatospersonales.jsx'
import ResumenReservas from './resumenreservas.jsx'

export default function ClienteReservarPanel({proporcional}) {

    const [paso_reservas, setPasoReservas] = useState (1)

    const [boton_pagar, setBotonPagar] = useState(false)

    const realizar_pago = () => {
        setPasoReservas(2)
    }
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperior proporcional={proporcional}/>
                </div>
                <ImageTitulo proporcional={proporcional}/>
            </div>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional,
                            paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
                <div className='position-relative' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className='rounded-pill' style={{width: '20%', height: 60 / proporcional, background: 'rgb(23, 43, 222)', cursor: 'pointer'}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', fontWeight: 500, 
                            fontFamily: 'Roboto, sans-serif', textAlign: 'center'}} >
                            1. Datos personales
                        </p>
                    </div>
                    <div className='position-absolute' style={{width: '12%', height: 60 / proporcional, left: '17%', top: 0}}>
                        <div className='rounded-pill' style={{width: '100%', height: 60 / proporcional, background: 'rgba(23, 43, 222, 0.4)', cursor: 'pointer'}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', fontWeight: 500, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'center', paddingLeft: 40 / proporcional}} >
                                2. Pago
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div style={{width: '64%', height: 'auto'}}>
                        {
                            paso_reservas === 1 ? (
                                <div style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black', fontWeight: 600, 
                                            fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                                            Ingresa tus datos personales
                                        </p>
                                    </div>
                                    <FormularioDatosPersonales proporcional={proporcional}/>
                                    <button className='btn rounded-pill' style={{width: '40%', height: 60 / proporcional, fontSize: 20 / proporcional, color: boton_pagar ? 'rgb(23, 43, 222)' : 'white',
                                        background: boton_pagar ? 'white' : 'rgb(23, 43, 222)', border: '1px solid rgb(23, 43, 222)', fontWeight: 600}}
                                            onMouseOver={() => setBotonPagar(true)} onMouseLeave={() => setBotonPagar(false)}
                                            onClick={() => realizar_pago()}>
                                        PROCEDER CON EL PAGO
                                    </button>  
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: '34%', height: 'auto'}}>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black', fontWeight: 600, 
                                fontFamily: 'Roboto, sans-serif', textAlign: 'left', cursor: 'default'}} >
                                Resumen de reservas
                            </p>
                        </div>
                        <ResumenReservas proporcional={proporcional}/>
                    </div>
                </div>
            </div>
        </div>
    )
}