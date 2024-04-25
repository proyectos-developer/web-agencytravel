import React from 'react'

import MenuSuperior from '../comun/menusuperior.jsx'
import SliderPrincipal from './sliderprincipal.jsx'
import Tours from './tours.jsx'
import Atracciones from './atracciones.jsx'
import Actividades from './actividades.jsx'
import Experiencias from './experiencias.jsx'
import Beneficios from './beneficios.jsx'
import Opiniones from './opiniones.jsx'
import Recomendaciones from './recomendaciones.jsx'
import Blog from './blog.jsx'
import Suscripcion from './suscripcion.jsx'

export default function BeginPanel({proporcional}) {

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
                    <MenuSuperior proporcional={proporcional}/>
                </div>
                <SliderPrincipal proporcional={proporcional}/>
            </div>
            <Tours proporcional={proporcional}/>
            <Atracciones proporcional={proporcional}/>
            <Actividades proporcional={proporcional}/>
            <Experiencias proporcional={proporcional}/> 
            <Beneficios proporcional={proporcional}/> 
            <Opiniones proporcional={proporcional}/>
            <Recomendaciones proporcional={proporcional}/>
            <Blog proporcional={proporcional}/>
            <div className='position-relative' style={{width: '100%', height: 'auto'}}>
                <div className='position-absolute' style={{width: '100%', height: 'auto', top: -185 / proporcional}}>
                    <Suscripcion proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}