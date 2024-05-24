import React from 'react'

import imagen_reserva from '../../../assets/images/home_reservar_991.png'

export default function ImageTituloTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 700 / proporcional}}>
            <div style={{width: '100%', height: '100%', backgroundImage: `url(${imagen_reserva})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-relative' style={{width: '100%', height: '100%'}}>
                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                    <p style={{fontSize: 60 / proporcional, lineHeight: `${80 / proporcional}px`, color: 'white', marginBottom: 0, fontWeight: 700, textAlign: 'center'}}>
                        FINALIZA TU RESERVA
                    </p></div>
                </div>
            </div>
        </div>
    )
}