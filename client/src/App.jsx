import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import BeginPanel from './components/begin/panel.jsx'
import BeginPanelTablet from './components/begin/paneltablet.jsx'
import BeginPanelCell from './components/begin/panelcell.jsx'

import ActividadPanel from './components/actividad/panel.jsx'
import ActividadPanelTablet from './components/actividad/paneltablet.jsx'
import ActividadPanelCell from './components/actividad/panelcell.jsx'

import ReservarTourPanel from './components/reservar/panel.jsx'
import ReservarTourPanelTablet from './components/reservar/paneltablet.jsx'
import ReservarTourPanelCell from './components/reservar/panelcell.jsx'

import ClienteAccesoPanel from './components/cliente/acceso/panel.jsx'
import ClienteAccesoPanelTablet from './components/cliente/acceso/paneltablet.jsx'
import ClienteAccesoPanelCell from './components/cliente/acceso/panelcell.jsx'

import ClienteReservarPanel from './components/cliente/reservar/panel.jsx'
import ClienteReservarPanelTablet from './components/cliente/reservar/paneltablet.jsx'
import ClienteReservarPanelCell from './components/cliente/reservar/panelcell.jsx'

import ClienteMisDatosPanel from './components/cliente/misdatos/panel.jsx'
import ClienteMisDatosPanelTablet from './components/cliente/misdatos/paneltablet.jsx'
import ClienteMisDatosPanelCell from './components/cliente/misdatos/panelcell.jsx'

import ClienteMisReservasPanel from './components/cliente/misreservas/panel.jsx'
import ClienteMisReservasPanelTablet from './components/cliente/misreservas/paneltablet.jsx'
import ClienteMisReservasPanelCell from './components/cliente/misreservas/panelcell.jsx'

import ClienteToursRealizadosPanel from './components/cliente/tours/panel.jsx'
import ClienteToursRealizadosPanelTablet from './components/cliente/tours/paneltablet.jsx'
import ClienteToursRealizadosPanelCell from './components/cliente/tours/panelcell.jsx'

import ClientePagosPendientesPanel from './components/cliente/pagos/pendientes/panel.jsx'
import ClientePagosPendientesPanelTablet from './components/cliente/pagos/pendientes/paneltablet.jsx'
import ClientePagosPendientesPanelCell from './components/cliente/pagos/pendientes/panelcell.jsx'

import ClientePagosRealizadosPanel from './components/cliente/pagos/realizados/panel.jsx'
import ClientePagosRealizadosPanelTablet from './components/cliente/pagos/realizados/paneltablet.jsx'
import ClientePagosRealizadosPanelCell from './components/cliente/pagos/realizados/panelcell.jsx'

import ClienteMisOpinionesPanel from './components/cliente/opiniones/panel.jsx'
import ClienteMisOpinionesPanelTablet from './components/cliente/opiniones/paneltablet.jsx'
import ClienteMisOpinionesPanelCell from './components/cliente/opiniones/panelcell.jsx'

export default function App() {

    const [width, setWidth] = useState(window.outerWidth)

    useEffect(() => {
        window.addEventListener('resize', handle_resize)

        return () => {
            window.removeEventListener('resize', handle_resize)
        }
    }, [])

    const handle_resize = () => {
        setWidth(window.outerWidth)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={width < 500 ? <GlobalPanelCell proporcional={499 / width}/> :
                                         width < 991 ? <GlobalPanelTablet proporcional={991 / width}/> :
                                                       <GlobalPanel proporcional={1920 / width}/>}>

                    <Route path='/' element={width < 500 ? <BeginPanelCell proporcional={499 / width}/> :
                                             width < 991 ? <BeginPanelTablet proporcional={991 / width}/> :
                                                           <BeginPanel proporcional={1920 / width}/>}/>

                    <Route path='tour/:actividad' element={width < 500 ? <ActividadPanelCell proporcional={499 / width}/> :
                                                           width < 991 ? <ActividadPanelTablet proporcional={991 / width}/> :
                                                                         <ActividadPanel proporcional={1920 / width}/>}/>

                    <Route path='tour/actividad/reservar' element={width < 500 ? <ReservarTourPanelCell proporcional={499 / width}/> :
                                                                   width < 991 ? <ReservarTourPanelTablet proporcional={991 / width}/> :
                                                                                 <ReservarTourPanel proporcional={1920 / width}/>}/>

                    <Route path='cliente/acceder' element={width < 500 ? <ClienteAccesoPanelCell proporcional={499 / width}/> :
                                                           width < 991 ? <ClienteAccesoPanelTablet proporcional={991 / width}/> :
                                                                         <ClienteAccesoPanel proporcional={1920 / width}/>}/>

                    <Route path='cliente/reservar' element={width < 500 ? <ClienteReservarPanelCell proporcional={499 / width}/> :
                                                            width < 991 ? <ClienteReservarPanelTablet proporcional={991 / width}/> :
                                                                          <ClienteReservarPanel proporcional={1920 / width}/>}/>

                    <Route path='cliente/mis-datos' element={width < 500 ? <ClienteMisDatosPanelCell proporcional={499 / width}/> :
                                                             width < 991 ? <ClienteMisDatosPanelTablet proporcional={991 / width}/> :
                                                                           <ClienteMisDatosPanel proporcional={1920 / width}/>}/>

                    <Route path='cliente/mis-reservas' element={width < 500 ? <ClienteMisReservasPanelCell proporcional={499 / width}/> :
                                                                width < 991 ? <ClienteMisReservasPanelTablet proporcional={991 / width}/> :
                                                                              <ClienteMisReservasPanel proporcional={1920 / width}/>}/>

                    <Route path='cliente/tours-realizados' element={width < 500 ? <ClienteToursRealizadosPanelCell proporcional={499 / width}/> :
                                                                    width < 991 ? <ClienteToursRealizadosPanelTablet proporcional={991 / width}/> :
                                                                                  <ClienteToursRealizadosPanel proporcional={1920 / width}/>}/>

                    <Route path='cliente/pagos-pendientes' element={width < 500 ? <ClientePagosPendientesPanelCell proporcional={499 / width}/> :
                                                                    width < 991 ? <ClientePagosPendientesPanelTablet proporcional={991 / width}/> :
                                                                                  <ClientePagosPendientesPanel proporcional={1920 / width}/>}/>

                    <Route path='cliente/pagos-realizados' element={width < 500 ? <ClientePagosRealizadosPanelCell proporcional={499 / width}/> :
                                                                    width < 991 ? <ClientePagosRealizadosPanelTablet proporcional={991 / width}/> :
                                                                                  <ClientePagosRealizadosPanel proporcional={1920 / width}/>}/>

                    <Route path='cliente/mis-opiniones' element={width < 500 ? <ClienteMisOpinionesPanelCell proporcional={499 / width}/> :
                                                                 width < 991 ? <ClienteMisOpinionesPanelTablet proporcional={991 / width}/> :
                                                                               <ClienteMisOpinionesPanel proporcional={1920 / width}/>}/>
                                        
                </Route>


            </Routes>
        </BrowserRouter>
    )
}

