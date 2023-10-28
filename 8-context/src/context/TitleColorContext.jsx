import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const TitleColorReducer = (state, action) => {
    switch(action.type){
        case "RED":
            return {...state, color: 'red'}

        case "BLUE":
            return {...state, color: 'blue'}

        default:
            return state
    }
}
