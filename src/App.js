//import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import FlashsalesCategory from "./routes/flashSales.category/flashSales.category.component";
import ShopTopCategories from "./routes/shop-top-categories/shop.top.categories.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useContext } from "react";
import {
  fetchCategoriesOnAppLoad,
  setCategories,
} from "./store/categoriesReducer/categories.action";
import ProductPage from "./routes/product page/product.page.component";
import { DisplayDetails } from "./contexts/display.details.context";
import Checkout from "./routes/checkout/checkout.component";
import { selectIsLoading } from "./store/categoriesReducer/categories.selector";
import Spinner from "./components/spinner/spinner.component";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ShopTopBrands from "./routes/shop-top-brands/shop.top.brands.component";
import Shop from "./routes/shop/shop.component";
import AllProducts from "./routes/all products/all.products.component";
import { addCollectionAndDocuments } from "./utils/firebase";
import CATEGORIES from "./categories";
import { fetchProductsOnAppLoad } from "./store/products reducer/products.action";
import CartDropdown from "./components/cart dropdown/cart.dropdown.component";
import AccountDropdown from "./components/account dropdown/account.dropdown.component";
import SignUp from "./routes/sign up/sign.up.route";
import SignIn from "./routes/sign in/sign.in.route";
import AboutUs from "./routes/about us/about-us.component.jsx";
import ContactUs from "./routes/contact-us/contact-us.component";
const App = () => {
  const dispatch = useDispatch();
  const { currentProduct } = useContext(DisplayDetails);
  const isLoading = useSelector(selectIsLoading);
  const location = useLocation();

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", CATEGORIES)   
  // }, []);

  useEffect(() => {
    dispatch(fetchCategoriesOnAppLoad());
  }, []);
  useEffect(() => {
    dispatch(fetchProductsOnAppLoad());
  }, []);

  return isLoading ? (
    <Spinner spinner="big"/>
  ) : (
    <div>
      <AnimatePresence>
        <Routes location={location} >
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/flash" element={<FlashsalesCategory />} />
            <Route path="/shop-tc/*" element={<ShopTopCategories />} />
            <Route path="/shop-tb/*" element={<ShopTopBrands />} />
            {currentProduct && (
              <Route
                path="/product"
                element={<ProductPage product={currentProduct} />}
              />
            )}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<CartDropdown/>} />
            <Route path="/account" element={<AccountDropdown/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};
export default App;
// <div  className="container">

// </div>
//         <svg className="hi" viewBox="0 0 1440 320">
//     <path fill="#fff" fill-opacity="25" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
// </svg>
