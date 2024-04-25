import React, { useState } from 'react'

export default function ModalSearchTablet({proporcional}) {

    const [search, setSearch] = useState('')
    const [boton_search, setBotonSearch] = useState (false)
    
    return (
        <div className='position-fixed top-0 start-0 vh-100' style={{width: '100%', background: 'rgba(39, 39, 39, 0.6)', zIndex: 9999}}>
            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '80%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                    <div style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white', cursor: 'default', fontWeight: 700, 
                            fontFamily: 'Roboto, sans-serif'}} >
                            Busca entre los mejores tours...
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                        <input 
                            style={{width: '80%', height: 50 / proporcional, fontSize: 18 / proporcional, color: '#212121', background: 'white', fontWeight: 500}}
                            type='default'
                            className='form-control rounded-left'
                            value={search}
                            onChange={(event) => setSearch (event.target.value)}
                            placeholder='Buscar lugar turístico o actividad turística...'
                            id='search'/>
                        <button className='btn rounded-right' style={{width: '20%', height: 50 / proporcional, fontSize: 18 / proporcional, 
                                background: boton_search ? 'transparent' : 'rgb(23, 43, 222)', color: boton_search ? 'rgb(23, 43, 222)' : 'white', boder: '1px solid rgb(23, 43, 222)'}}
                                onMouseOver={() => setBotonSearch(true)} onMouseLeave={() => setBotonSearch(false)}>
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}