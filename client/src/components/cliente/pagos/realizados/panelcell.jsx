import React from 'react'

import MenuClienteLateralCell from '../../comun/menucell.jsx'
import PagosRealizadosCell from './pagosrealizadoscell.jsx'

export default function ClientePagosPendientesPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <MenuClienteLateralCell proporcional={proporcional}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <PagosRealizadosCell proporcional={proporcional}/>
            </div>
        </div>
    )
}
