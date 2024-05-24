import React, {useEffect} from 'react'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {set_authenticated} from '../../redux/actions/data.js'

import MenuSuperior from '../comun/menusuperior.jsx'
import Footer from '../comun/footer.jsx'
import ModalCargando from '../modal/cargando.jsx'
import ModalSearch from '../modal/search.jsx'

export default function GlobalPanel ({proporcional}){
    
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {screen_search} = useSelector(({data_actions}) => data_actions)

    useEffect(() => {
        if (window.localStorage.getItem('session_id')){
            dispatch (set_authenticated (true))
        }
    }, [])

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            {
                location.pathname.split ('/')[1] === '' || location.pathname.split('/')[3] !== undefined || 
                    (location.pathname.split('/')[1] && (location.pathname.split('/')[2] === 'acceder' || location.pathname.split('/')[2] === 'reservar'))? (
                    null
                ) : (
                    <MenuSuperior proporcional={proporcional}/>
                )
            }
            <Outlet/>
            {
                location.pathname.split ('/')[1] && location.pathname.split ('/')[2] === 'acceder' ? (
                    null
                ) : (
                    <Footer proporcional={proporcional}/>
                )
            }
            {
                screen_search ? (
                    <ModalSearch proporcional={proporcional}/>
                ) : null
            }
            <ModalCargando proporcional={proporcional} loading={false}/>
        </div>
    )
}