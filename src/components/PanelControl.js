import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <p>Elige un de estas opciones</p>

        <nav>
            <ul>
            <li>
                    <NavLink
                    to="/panel/inicio"
                    className={({isActive}) => isActive ? "activado": ""}
                    >Inicio panel</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/panel/crear-articulos"
                    className={({isActive}) => isActive ? "activado": ""}
                    >Crear artículos</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/panel/gestion-usuarios"
                    className={({isActive}) => isActive ? "activado": ""}
                    >Gestión de usuarios</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/panel/acerca-de"
                    className={({isActive}) => isActive ? "activado": ""}
                    >Acerca de</NavLink>
                </li>
            </ul>
        </nav>

        <div>
            {/*Aquí cargo los componentes de las subrutas*/}
            <Outlet />
        </div>
    </div>
  )
}
