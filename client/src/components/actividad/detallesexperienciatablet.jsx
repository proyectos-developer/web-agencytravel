import React from 'react'

import icono_clock from '../../assets/iconos/icono_clock_black_96.png'
import icono_comments from '../../assets/iconos/icono_comments_black_96.png'
import icono_check from '../../assets/iconos/icono_check_black_96.png'
import icono_tourista from '../../assets/iconos/icono_tourista_black_96.png'
import icono_transporte from '../../assets/iconos/icono_transporte_black_96.png'
import icono_reloj_arena from '../../assets/iconos/icono_reloj_arena_black_96.png'

export default function DetallesExperienciaTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 280 / proporcional, marginBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'rgb(23, 43, 222)', marginBottom: 20 / proporcional, fontWeight: 500}}>
                    Detalles de la experiencia
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='d-flex' style={{width: '32%', height: 'auto'}}>
                    <img src={icono_clock} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${64 / proporcional}px`, color: '#212121', marginBottom: 0 / proporcional, fontWeight: 600}}>
                        17 horas
                    </p>
                </div>
                <div className='d-flex' style={{width: '32%', height: 'auto'}}>
                    <img src={icono_comments} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${64 / proporcional}px`, color: '#212121', marginBottom: 0 / proporcional, fontWeight: 600}}>
                        Español / Ingles
                    </p>
                </div>
                <div className='d-flex' style={{width: '32%', height: 'auto'}}>
                    <img src={icono_check} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${32 / proporcional}px`, color: '#212121', marginBottom: 0 / proporcional, fontWeight: 600}}>
                        Cancelación Gratuita 24 horas
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '32%', height: 'auto'}}>
                    <img src={icono_reloj_arena} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${64 / proporcional}px`, color: '#212121', marginBottom: 0 / proporcional, fontWeight: 600}}>
                        17 horas
                    </p>
                </div>
                <div className='d-flex' style={{width: '32%', height: 'auto'}}>
                    <img src={icono_tourista} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${32 / proporcional}px`, color: '#212121', marginBottom: 0 / proporcional, fontWeight: 600}}>
                        2 Pasajeros <br/>mínimo
                    </p>
                </div>
                <div className='d-flex' style={{width: '32%', height: 'auto'}}>
                    <img src={icono_transporte} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${32 / proporcional}px`, color: '#212121', marginBottom: 0 / proporcional, fontWeight: 600}}>
                        Salidas <br/>4:00 A.M
                    </p>
                </div>
            </div>
        </div>
    )
}