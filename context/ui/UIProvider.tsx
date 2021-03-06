import  { FC, useReducer } from 'react'
import { UIContext ,uiReducer } from './';



export interface UIState {
    sidemenuOpen :Boolean
}

const UI_INITIAL_STATE:UIState ={
    sidemenuOpen : false 
}

export const UIProvider:FC = ({children}:any)=> {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu =()=>{
      dispatch({type:`UI - Open Sidebar`})
    }

    const closeSideMenu =(  )=> dispatch({type:`UI - Close Sidebar`})
    

  return (
    <UIContext.Provider
     value={{
      ...state,
      //methods
      openSideMenu,
      closeSideMenu
      }}>
        {children}
    </UIContext.Provider>
  )
}

