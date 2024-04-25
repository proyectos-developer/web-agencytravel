import React, { useState } from 'react'

import icono_descripcion from '../../assets/iconos/icono_descripcion_blue_96.png'
import icono_itinerario from '../../assets/iconos/icono_itinerario_blue_96.png'
import icono_recoger from '../../assets/iconos/icono_recoger_blue_96.png'
import icono_grupo from '../../assets/iconos/icono_grupo_blue_96.png'
import icono_incluye from '../../assets/iconos/icono_incluye_blue_96.png'
import icono_no_incluye from '../../assets/iconos/icono_no_incluye_blue_96.png'
import icono_llevar from '../../assets/iconos/icono_llevar_blue_96.png'
import icono_no_apto from '../../assets/iconos/icono_no_apto_blue_96.png'
import icono_cancelacion from '../../assets/iconos/icono_cancelacion_blue_96.png'
import icono_preguntas from '../../assets/iconos/icono_preguntas_blue_96.png'

import icono_down from '../../assets/iconos/icono_down_blule_96.png'

export default function ExperienciaTablet({proporcional}) {

    const [seleccion_experiencia, setSeleccionExperiencia] = useState ('0')

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'rgb(23, 43, 222)', marginBottom: 20 / proporcional, fontWeight: 500}}>
                    Tu experiencia
                </p>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_descripcion} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                DESCRIPCIÓN
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'descripcion' ? 'descripcion' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'descripcion' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_itinerario} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                ITINERARIO
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'itinerario' ? 'itinerario' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'itinerario' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_recoger} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                PUNTOS DE RECOGIDA
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'recoger' ? 'recoger' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'recoger' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_grupo} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                PRECIOS POR GRUPOS
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'grupo' ? 'grupo' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'grupo' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_incluye} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                INCLUYE
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'incluye' ? 'incluye' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'incluye' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_no_incluye} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                NO INCLUYE
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'no_incluye' ? 'no_incluye' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'no_incluye' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_llevar} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                ¿QUÉ LLEVAR?
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'llevar' ? 'llevar' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'llevar' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_no_apto} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                NO APTO PARA
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'no_apto' ? 'no_apto' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'no_apto' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_cancelacion} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                POLÍTICA DE CANCELACIÓN
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'cancelacion' ? 'cancelacion' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'cancelacion' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto', border: '1px solid #efefef'}}>
                    <div className='d-flex justify-content-between rounded-top' style={{width: '100%', height: 60 / proporcional,  background: '#f8f8f8'}}>
                        <div className='d-flex justify-content-start' style={{width: '80%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_preguntas} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional}}/>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', marginBottom: 0 / proporcional, fontWeight: 500,
                                marginLeft: 15 / proporcional}}>
                                PREGUNTAS FRECUENTES
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 60 / proporcional, padding: 15 / proporcional}}>
                            <img src={icono_down} style={{width: 20 / proporcional, margin: 5 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onClick={() => setSeleccionExperiencia(seleccion_experiencia === '' || seleccion_experiencia !== 'preguntas' ? 'preguntas' : '')}/>
                        </div>
                    </div>
                    {
                        seleccion_experiencia === 'preguntas' ? ( 
                            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className='rouned-pill' style={{width: '100%', height: 2 / proporcional, background: '#efefef'}}/>
        </div>
    )
}