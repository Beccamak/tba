import { useSelector } from "react-redux";
import { createSelector } from "reselect";

export const selectProductReducer = (state) => state.products;

export const selectProducts = createSelector(
  [selectProductReducer],
  // (productsReducerSlice) => productsReducerSlice.products.data.products
  (productsReducerSlice) => productsReducerSlice.products
);
export const selectIsDropdownOpen = createSelector(
  [selectProductReducer],
  (productReducerSlice) => productReducerSlice.isDropdownOpen
);

export const selectFlashSalesProducts = createSelector(
  [selectProducts],
  (products) =>
    products.filter((product) => {
      return product.flashSale === true;
    })
);

export const selectTopBrandsProducts = createSelector(
  [selectProducts],
  (products) =>
    products.filter((product) => {
      return product.topBrand === true;
    })
);

export const selectTopCategoriesProducts = createSelector(
  [selectProducts],
  (products) =>
    products.filter((product) => {
      return product.topCategory === true;
    })
);

export const selectTopCategories = createSelector(
  [selectTopCategoriesProducts],
  (products) =>
    products.reduce((acc, product, index) => {
      if (acc && !acc.includes(product.mainCategory)) {
        acc[index] = product.mainCategory;
      }
      return acc;
    }, [])
);
export const selectTopBrands = createSelector(
  [selectTopBrandsProducts],
  (products) =>
    products.reduce((acc, product, index) => {
      if (acc && !acc.includes(product.brandName)) {
        acc[index] = product.brandName;
      }
      return acc;
    }, [])
);
export const selectCurrentCategory = createSelector(
  [selectProductReducer],
  (productReducerSlice) => productReducerSlice.currentCategory
);
export const selectCurrentCategoryProducts = createSelector(
  [selectCurrentCategory, selectProducts],
  (currentCategory, products) => 
   products.filter((product) => {
  return product.category === currentCategory;
  })
);

export const selectSearchString = createSelector(
  [selectProductReducer],
  (productReducerSlice) => productReducerSlice.searchString
);
