const initData = {
    isAuth: false,
    accessToken: "",
    refreshToken: ""
}

export const authReducer = (currentState=initData, action) => {

    //return the updated state
    if(action.type === "SET_AUTH"){
        return {
            ...action.payload
        }
    }
    return currentState;
}