import React, { useState } from 'react'
import { set_open_menu_lateral_carrito } from '../../redux/actions/data'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function MenuLateralCarritoTablet({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [boton_carrito, setBotonCarrito] = useState(false)
    const [boton_continuar, setBotonContinuar] = useState(false)

    return (
        <div className='position-fixed top-0 start-0 vh-100' style={{width: '100%', background: 'rgb(39, 39, 39, 0.6)'}}>
            <div className='position-absolute top-0 end-0 vh-100' style={{width: '60%', background: 'white', padding: 30 / proporcional}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, color: 'rgb(39, 39, 39)', marginBottom: 20 / proporcional, fontWeight: 600}}>
                        Se agregó al carrito
                    </p>
                </div>
                <div style={{width: '100%', height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginBottom: 20 / proporcional}}/>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 250 / proporcional, marginBottom: 20 / proporcional}}>
                        <div style={{width: '60%', height: 250 / proporcional, background: '#efefef', border: '1px solid #bdbdbd', borderRadius: 8 / proporcional}}/>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'rgb(39, 39, 39)', marginBottom: 20 / proporcional, fontWeight: 500}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <button className='btn rounded-pill' style={{width: '80%', height: 80 / proporcional, background: boton_carrito ? 'transparent' : 'rgb(23, 43, 222)', 
                        color: boton_carrito ? 'rgb(23, 43, 222)' : 'white', fontSize: 20 / proporcional, marginBottom: 20 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600}}
                        onMouseOver={() => setBotonCarrito(true)} onMouseLeave={() => setBotonCarrito(false)}
                        onClick={() => {dispatch (set_open_menu_lateral_carrito(false)); navigate ('/tour/actividad/reservar')}}>
                        VER CARRITO Y <br/>FINALIZAR PAGO
                    </button>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <button className='btn rounded-pill' style={{width: '80%', height: 80 / proporcional, background: boton_continuar ? 'rgb(23, 43, 222)' : 'transparent', 
                        color: boton_continuar ? 'white' : 'rgb(23, 43, 222)', fontSize: 20 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600}}
                        onMouseOver={() => setBotonContinuar(true)} onMouseLeave={() => setBotonContinuar(false)}
                        onClick={() => {dispatch (set_open_menu_lateral_carrito(false)); navigate ('/')}}>
                        CONTINUAR EXPLORANDO <br/>OTROS TOURS
                    </button>
                </div>
            </div>
        </div>
    )
}