import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    // user: {
    //     _id: "64aac4fa4ca7ede82c0d77fd",
    //     username: "Prani",
    //     email: "prani@gmail.com",
    //     password: "$2b$10$U9j5LeXid1cVKGn05iKd2ODoWHSnfHKVPbHkDqPB4kTXUtBlTodXG",
    //     profilePicture: "",
    //     coverPicture: "",
    //     followers: [],
    //     following: [],
    //     isAdmin: false,
    // },
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user]);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};