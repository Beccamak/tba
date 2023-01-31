import { createAction } from "../../utils/reducer.utils";
import Axios from 'axios';
import { PRODUCTS_ACTION_TYPES } from "./products.types";


export const fetchProductsStart = () => {
    return createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);
}
export const fetchProductsSuccess = (products) => {
    return createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);
}
export const fetchProductsFailed = (error) => {
    return createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);
}

export const setCurrentCategory = (category) => {
    return createAction(PRODUCTS_ACTION_TYPES.SET_CURRENT_CATEGORY, category)
}
export const setCurrentProduct = (product) => {
    return createAction(PRODUCTS_ACTION_TYPES.SET_CURRENT_PRODUCT, product)
}
export const setSearchString = (searchString) => {
    return createAction(PRODUCTS_ACTION_TYPES.SET_SEARCH_STRING, searchString)
}
export const setIsDropdownOpen = (bool) => {
    return createAction(PRODUCTS_ACTION_TYPES.SET_IS_DROPDOWN_OPEN, bool)
}

export const fetchProductsOnAppLoad = () =>async (dispatch)=> {
    dispatch(fetchProductsStart());
    try {
        const products  = await Axios.get("http://localhost:5000/products/getAllProducts");
        console.log(products);
        dispatch(fetchProductsSuccess(products));
    } catch (error) {
        dispatch(fetchProductsFailed(error));
    }
}