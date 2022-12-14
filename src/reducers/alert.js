import { REMOVE_ALERT, SET_ALERT } from "../actions/types";

const initialState = []

export default function(state=initialState,action){
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload];
    
        case REMOVE_ALERT:
            return state.filter(alrt=>alrt.id !== action.payload)
    
        default:
            return state;
    }
}