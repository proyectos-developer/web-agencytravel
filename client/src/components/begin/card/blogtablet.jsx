import React, { useState } from 'react'

export default function BlogTablet({proporcional}) {

    const [boton_mas, setBotonMas] = useState (false)

    return (
        <div className='shadow rounded' style={{width: '90%', height: 300 / proporcional, background: '#bdbdbd'}}>
            <div className='position-relative' style={{width: '100%', height: '100%'}}>
                <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 20 / proporcional, top: '25%'}}>
                    <p style={{fontSize: 20 / proporcional, fontWeight: 600, color: 'white', marginBottom: 20 / proporcional, lineHeight: `${24 / proporcional}px`}}>
                        Descrubre los Tesoros Escondidos de Paras: los sitios <br/>Más visitados
                    </p>
                    <p style={{fontSize: 20 / proporcional, fontWeight: 600, color: 'white', marginBottom: 20 / proporcional, lineHeight: `${24 / proporcional}px`}}>
                        ¿Te has preguntado alguna vez qué maravillas naturales te esperan en Paracas?...
                    </p>
                    <button className='btn' style={{width: '20%', background: boton_mas ? 'transparent' : 'rgb(23, 43, 222)', border: '1px solid rgb(23, 43, 222)',
                        fontSize: 18 / proporcional, height: 50 / proporcional, fontWeight: 500, color: boton_mas ? 'rgb(23, 43, 222)' : 'white'}}
                        onMouseOver={() => setBotonMas(true)} onMouseLeave={() => setBotonMas(false)}>
                        Leer más
                    </button>
                </div>
            </div>
        </div>
    )
}