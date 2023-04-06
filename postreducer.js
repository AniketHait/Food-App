
import { SEARCH_FOOD, FETCH_FOOD } from "../action/types";

const initialState = {
    foods: [],
    food: {}
};

export default function(state = initialState, action) {

    switch(action.type) {
        case FETCH_FOOD:
            
            return {
                ...state,
                foods: action.payload
            }
        case SEARCH_FOOD:
            
            return {
                ...state,
                food: action.payload
            }
        default:
         return state; 
    }
}