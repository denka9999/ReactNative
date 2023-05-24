import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { excursiones } from './excursiones';
import { comentarios } from './comentarios';
import { cabeceras } from './cabeceras';
import { actividades } from './actividades';
import { favoritos } from './favoritos';
import { sesion } from './sesion';

// esta funcion contiene los reducers, que son los que devuelve un estado que refleja los cambios

export const ConfigureStore = () => {
    const store = configureStore({
        reducer: {
            excursiones: excursiones,
            comentarios: comentarios,
            cabeceras: cabeceras,
            actividades: actividades,
            favoritos:favoritos,
            sesion:sesion
            
        },
        middleware: [thunk],
    });

    return store;
}