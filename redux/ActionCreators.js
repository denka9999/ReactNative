import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../comun/comun';

export const fetchComentarios = () => (dispatch) => {
    return fetch(baseUrl + 'comentarios.json')
        .then(response => {
            // console.log(response);
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comentarios => dispatch(addComentarios(comentarios)))
        .catch(error => dispatch(comentariosFailed(error.message)));
};

export const comentariosFailed = (errmess) => ({
    type: ActionTypes.COMENTARIOS_FAILED,
    payload: errmess
});

export const addComentarios = (comentarios) => ({
    type: ActionTypes.ADD_COMENTARIOS,
    payload: comentarios
});

export const fetchExcursiones = () => (dispatch) => {

    // lo que hace esta linea es mandar al estado de excursiones, que se esta cargando, cuando, me llega el return,  proceso
    // los datos si esta bienn bien, luego lo mando a addexcursiones.
    // con el .then lo que hacemos es decirle que hacer con la promesa si se ha resuelto, es decir, esto es algo asincrono

    // RESUMEN: ESTAMOS CREANDO LAS ACCIONES, Y DICIENDO QUE HACE CADA UNA

    dispatch(excursionesLoading());

    return fetch(baseUrl + 'excursiones.json')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(excursiones => dispatch(addExcursiones(excursiones)))
        // esta es la sintaxis para enviar la respuesta
        .catch(error => dispatch(excursionesFailed(error.message)));
};

export const excursionesLoading = () => ({
    type: ActionTypes.EXCURSIONES_LOADING
});

export const excursionesFailed = (errmess) => ({
    type: ActionTypes.EXCURSIONES_FAILED,
    payload: errmess
});

export const addExcursiones = (excursiones) => ({
    type: ActionTypes.ADD_EXCURSIONES,
    payload: excursiones
});

export const fetchCabeceras = () => (dispatch) => {

    dispatch(cabecerasLoading());

    return fetch(baseUrl + 'cabeceras.json')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(cabeceras => dispatch(addCabeceras(cabeceras)))
        .catch(error => dispatch(cabecerasFailed(error.message)));
};

export const cabecerasLoading = () => ({
    type: ActionTypes.CABECERAS_LOADING
});

export const cabecerasFailed = (errmess) => ({
    type: ActionTypes.CABECERAS_FAILED,
    payload: errmess
});

export const addCabeceras = (cabeceras) => ({
    type: ActionTypes.ADD_CABECERAS,
    payload: cabeceras
});

export const fetchActividades = () => (dispatch) => {

    dispatch(actividadesLoading());

    return fetch(baseUrl + 'actividades.json')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(actividades => dispatch(addActividades(actividades)))
        .catch(error => dispatch(actividadesFailed(error.message)));
};

export const actividadesLoading = () => ({
    type: ActionTypes.ACTIVIDADES_LOADING
});

export const actividadesFailed = (errmess) => ({
    type: ActionTypes.ACTIVIDADES_FAILED,
    payload: errmess
});

export const addActividades = (actividades) => ({
    type: ActionTypes.ADD_ACTIVIDADES,
    payload: actividades
});

export const postFavorito = (excursionId) => (dispatch) => {
    setTimeout(() => {
        dispatch(addFavorito(excursionId));
    }, 2000);
};
export const addFavorito = (excursionId) => ({
    type: ActionTypes.ADD_FAVORITO,
    payload: excursionId
});
// esto tengo que añadir
export const postComentario = (excursionId, valoracion, autor, comentario) => (dispatch) => {
    let dia = new Date().toString();
    setTimeout(() => {
        dispatch(addComentario(excursionId, valoracion, autor, comentario, dia));
    }, 2000);
};

export const addComentario = (excursionId, valoracion, autor, comentario, dia) => ({
    type: ActionTypes.ADD_COMENTARIO,
    payload: {
        id: 30,
        excursionId: excursionId,
        valoracion: valoracion,
        comentario: comentario,
        autor: autor,
        dia: dia
    },
});

// añadimos ahora los action creators para login y registro
export const iniciarSesion = (user) => (
    {
        type: ActionTypes.INICIAR_SESION,
        payload: user
    }

);
export const cerrarSesion = () => ({
    type: ActionTypes.CERRAR_SESION
}
);