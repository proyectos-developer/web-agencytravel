import React from 'react'

export default function ToursRealizadosCell({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'black', fontWeight: 600, fontFamily: 'Roboto, sans-serif', 
                    textAlign: 'left', cursor: 'pointer', marginBottom: 0 / proporcional, paddingLeft: 15 / proporcional}}>
                    Tours realizados
                </p>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'rgb(122, 122, 122)', fontWeight: 500, fontFamily: 'Roboto, sans-serif', 
                    textAlign: 'left', cursor: 'pointer', marginBottom: 0 / proporcional}}>
                    No cuenta con tours realizados por el momento
                </p>
            </div>
        </div>
    )
}