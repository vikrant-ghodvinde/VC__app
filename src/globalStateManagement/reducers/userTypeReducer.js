import { SET_USER_TYPE_FAIL, SET_USER_TYPE_REQUEST, SET_USER_TYPE_SUCCESS } from "globalStateManagement/constants/userType"

export const setUserTypeReducer = (state={typeOfUser:""},{type,payload}) => {
	switch (type) {
		case SET_USER_TYPE_REQUEST: return { typeOfUser: {},isloading:true}
		case SET_USER_TYPE_SUCCESS : return{typeOfUser:payload,isloading:false}
		case SET_USER_TYPE_FAIL : return{typeOfUserError:payload,isloading:false}
		default:
			return state
	}
}