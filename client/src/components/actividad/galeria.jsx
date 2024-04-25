import React, { useState } from 'react'

export default function Galeria({proporcional}) {

    const [boton_fotos_extras, setBotonFotosExtras] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '15%', height: 400 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, color: 'rgb(23, 43, 222)', marginBottom: 20 / proporcional, fontWeight: 500}}>
                        Galería
                    </p>
                </div>
                <div className='d-flex justify-content-between' style={{width: '85%', height: 'auto'}}>
                    <div style={{width: '24%', height: 400 / proporcional}}>
                        <div style={{width: '100%', height: '100%', background: '#bdbdbd', border: '1px solid #efefef'}}/>
                    </div>
                    <div style={{width: '24%', height: 400 / proporcional}}>
                        <div style={{width: '100%', height: '100%', background: '#bdbdbd', border: '1px solid #efefef'}}/>
                    </div>
                    <div style={{width: '24%', height: 400 / proporcional}}>
                        <div style={{width: '100%', height: '100%', background: '#bdbdbd', border: '1px solid #efefef'}}/>
                    </div>
                    <div className='position-relative' style={{width: '24%', height: 400 / proporcional, border: '1px solid #efefef'}}>
                        <div style={{width: '100%', height: '100%', background: '#bdbdbd'}}/>
                        <div className='position-absolute' style={{width: '100%', height: 60 / proporcional, top: 320 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                <button className='btn' style={{width: '90%', height: 60 / proporcional, background: boton_fotos_extras ? 'transparent' : 'white', border: '1px solid black', fontSize: 18 / proporcional,
                                    color: 'black', fontWeight: 500}}
                                    onMouseOver={() => setBotonFotosExtras(true)} onMouseLeave={() => setBotonFotosExtras(false)}>
                                    VER 04 FOTOS EXTRAS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}