//import cuid from 'cuid';

export default function manageRestaurants(state = {
    restuarnts: []
}, action) {
    switch(action.type){
        case 'ADD_RESTUARANTS':
            return {...state, restuarants: [...state.restuarants]}

        default:
            return state;
    }
}
