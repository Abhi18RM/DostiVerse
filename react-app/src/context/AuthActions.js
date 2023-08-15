import axios from "axios";

export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
});

export const LogOut = () =>({
    type: "LOGOUT"
});

export const Follow = (userID) => ({
    type: "FOLLOW",
    payload: userID
});

export const UnFollow = (userID) => ({
    type: "UNFOLLOW",
    payload: userID
});