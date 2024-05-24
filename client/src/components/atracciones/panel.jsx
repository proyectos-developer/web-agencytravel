import React, { useState } from 'react'

import MenuSuperior from '../comun/menusuperior'
import ImageTitulo from './imagetitulo.jsx'
import Tours from '../begin/tours.jsx'

export default function AtraccionesTourPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperior proporcional={proporcional}/>
                </div>
                <ImageTitulo proporcional={proporcional}/>
            </div>
            <Tours proporcional={proporcional}/>
        </div>
    )
}
