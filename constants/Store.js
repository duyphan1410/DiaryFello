import { createContext, useContext, useMemo, useReducer } from "react";

const Mycontext = createContext({});
Mycontext.displayName = "Mycontext";

const stateLogin = "USER_LOGIN";
const stateLogOut = "USER_LOOUT"

const reducer = (state, action) => {
    switch (action.type) {
        case stateLogin:
            return { ...state, userLogin: action.value }
        case stateLogOut:
            return { ...state, userLogin: null }
        default:
            throw new Error("Action not found");
    }
}

const MyContextControllerProvider = ({ children }) => {
    const initalState = {
        userLogin: null
    }
    const [controller, dispatch] = useReducer(reducer, initalState);
    const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
    return (
        <Mycontext.Provider value={value}>
            {children}
        </Mycontext.Provider>
    )
}

const useMyContextController = () => {
    const context = useContext(Mycontext);
    if (context == null)
        return new Error("useMycontextController must inside in MyContextControllerProvider")
    return context
}

export {
    MyContextControllerProvider,
    useMyContextController,
    reducer,
    stateLogin,
    stateLogOut,
    Mycontext
}