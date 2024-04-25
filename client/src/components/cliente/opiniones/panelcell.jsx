import React from 'react'

import MenuClienteLateralCell from '../comun/menucell.jsx'
import MisOpinionesCell from './misopinionescell.jsx'

export default function ClienteMisOpinionesPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <MenuClienteLateralCell proporcional={proporcional}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <MisOpinionesCell proporcional={proporcional}/>
            </div>
        </div>
    )
}
