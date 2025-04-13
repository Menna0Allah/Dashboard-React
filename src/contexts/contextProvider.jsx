import React, {Children, createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:true });
    }


    return (
        <StateContext.Provider 
            value={{
                // activeMenu: activeMenu,
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);