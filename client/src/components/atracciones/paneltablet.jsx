import React, { useState } from 'react'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import ImageTituloTablet from './imagetitulotablet.jsx'
import ToursTablet from '../begin/tourstablet.jsx'

export default function AtraccionesTourPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperiorTablet proporcional={proporcional}/>
                </div>
                <ImageTituloTablet proporcional={proporcional}/>
            </div>
            <ToursTablet proporcional={proporcional}/>
        </div>
    )
}
