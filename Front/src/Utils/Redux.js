import { legacy_createStore as createStore } from 'redux';

//state
const initialState = {
    users: '',
    isAuthenticated: false,
    token: '',
    error: false

}

//actions creators
export const loginSuccess = (token) => {
    return {
        type: "LOGIN__SUCCESS",
        payload: token,
    };
};

export const loginFailed = () => {
    return {
        type: "LOGIN__FAILED"
    };
};

export const getUserProfile = (user) => {
    return {
        type: "USER__GET__PROFILE",
        payload: user,
    };
}

export const logOut = () => {
    return {
        type: "USER__LOGOUT",
    };
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN__SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
                error: false,
            };
        case "LOGIN__FAILED":
            return {
                ...state,
                isAuthenticated: false,
                error: true
            };

        case "USER__GET__PROFILE":
            return {
                ...state,
                users: action.payload,
            };
        case "USER__LOGOUT":
            return initialState;

        default:
            return state;
    }
}

export const store = createStore(reducer);