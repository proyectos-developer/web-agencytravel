import React, { useState } from 'react'

export default function FotosActividadTablet({proporcional}) {

    const [boton_fotos_extras, setBotonFotosExtras] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '32%', height: 400 / proporcional, border: '1px solid #efefef'}}>
                    <div style={{width: '100%', height: '100%', background: '#bdbdbd'}}/>
                </div>
                <div style={{width: '32%', height: 400 / proporcional, border: '1px solid #efefef'}}>
                    <div style={{width: '100%', height: '100%', background: '#bdbdbd'}}/>
                </div>
                <div className='position-relative' style={{width: '32%', height: 400 / proporcional, border: '1px solid #efefef'}}>
                    <div style={{width: '100%', height: '100%', background: '#bdbdbd'}}/>
                    <div className='position-absolute' style={{width: '100%', height: 60 / proporcional, top: 320 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                            <button className='btn' style={{width: '90%', height: 60 / proporcional, background: boton_fotos_extras ? 'transparent' : 'white', border: '1px solid black', fontSize: 18 / proporcional,
                                color: 'black', fontWeight: 500}}
                                onMouseOver={() => setBotonFotosExtras(true)} onMouseLeave={() => setBotonFotosExtras(false)}>
                                5 FOTOS EXTRAS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}