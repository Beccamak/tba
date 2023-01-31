import { createAction } from "../../utils/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const userSignInUpStart =  () => {
    return createAction(USER_ACTION_TYPES.USER_SIGN_IN_UP_START);
 }
 export const userSignInUpSuccess =  (user) => {
    return createAction(USER_ACTION_TYPES.USER_SIGN_IN_UP_SUCCESS, user);
 }
 export const userSignInUpFailed =  (error) => {
    return createAction(USER_ACTION_TYPES.USER_SIGN_IN_UP_FAILED, error);
 }
 export const setIsAccountOpen = (bool) => {
   return createAction(USER_ACTION_TYPES.SET_IS_ACCOUNT_OPEN, bool);
 }
 
// export const setCurrentUSer = (user) => {
//     return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
// }