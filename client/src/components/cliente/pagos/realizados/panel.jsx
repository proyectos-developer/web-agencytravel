import React from 'react'

import MenuClienteLateral from '../../comun/menu.jsx'
import PagosRealizados from './pagosrealizados.jsx'

export default function ClientePagosRealizadosPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '19%', height: 'auto'}}>
                    <MenuClienteLateral proporcional={proporcional}/>
                </div>
                <div style={{width: '2%', height: 'auto'}}>
                    <div style={{width: 4 / proporcional, height: '100%', background: 'rgb(23, 43, 222)'}}/>
                </div>
                <div style={{width: '79%', height: 'auto'}}>
                    <PagosRealizados proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}
