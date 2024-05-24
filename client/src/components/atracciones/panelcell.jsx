import React, { useState } from 'react'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import ImageTituloCell from './imagetitulocell.jsx'
import ToursCell from '../begin/tourscell.jsx'

export default function AtraccionesTourPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperiorCell proporcional={proporcional}/>
                </div>
                <ImageTituloCell proporcional={proporcional}/>
            </div>
            <ToursCell proporcional={proporcional}/>
        </div>
    )
}
