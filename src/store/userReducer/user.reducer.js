import { USER_ACTION_TYPES } from "./user.types";




export const USER_INITIAL_STATE = {
    currentUser: null,
    actionIsLoading: false,
    error: null,
    isAccountOpen: false
}




export const userReducer = (state = USER_INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type){ 
        case USER_ACTION_TYPES. USER_SIGN_IN_UP_START:
            return {...state, actionIsLoading:true}
        case USER_ACTION_TYPES.USER_SIGN_IN_UP_SUCCESS:
            return {...state, currentUser:payload, actionIsLoading:true}
        case USER_ACTION_TYPES.USER_SIGN_IN_UP_FAILED:
            return {...state, error:payload, actionIsLoading:false}
        case USER_ACTION_TYPES.SET_IS_ACCOUNT_OPEN:
            return {... state, isAccountOpen:payload }
        default:
            return state
    }
}