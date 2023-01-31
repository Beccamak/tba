import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer], (userReducerSlice) => userReducerSlice.currentUser 
)

export const selectActionIsLoading = createSelector(
    [selectUserReducer], (userReducerSlice) => userReducerSlice.actionIsLoading
)

export const selectIsAccountOpen = createSelector(
    [selectUserReducer], (userReducerSlice) => userReducerSlice.isAccountOpen
)
