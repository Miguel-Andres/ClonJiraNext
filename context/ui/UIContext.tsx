import { createContext, FC } from 'react';


interface ContextProps{
    sidemenuOpen:boolean;

    //METHODS
    openSideMenu :()=> void
    closeSideMenu :()=> void

    
}

export const UIContext = createContext ( {  } as ContextProps)