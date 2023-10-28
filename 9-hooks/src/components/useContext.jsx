import { createContext } from "react";
import { useContext } from "react";

export const SomeContext = createContext()

export function SomeProvider({value, children}){
    return <SomeContext.Provider value={value}>{children}</SomeContext.Provider>
}

export function useSomeContext(){
    return useContext(SomeContext)
}
