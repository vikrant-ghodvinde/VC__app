import { SET_USER_TYPE_FAIL, SET_USER_TYPE_REQUEST, SET_USER_TYPE_SUCCESS } from "globalStateManagement/constants/userType";

export const setUserType= (type) => async(dispatch,getState) => {
    try {
        dispatch({ type:SET_USER_TYPE_REQUEST})
        dispatch({ type: SET_USER_TYPE_SUCCESS, payload: type})
        localStorage.setItem("userType",JSON.stringify(type))
    } catch (error) {
     dispatch({ type:SET_USER_TYPE_FAIL,payload:error.response.data.message})
    }
 } 