import './shop.styles.css';
import { Route, Routes } from 'react-router-dom';
import ProductsPage from '../products page/products.page.component';
import { useSelector } from 'react-redux';
import { selectCurrentCategory, selectCurrentCategoryProducts, selectProducts} from '../../store/products reducer/products.selector';



const Shop = () => {
    const currentCategory = useSelector(selectCurrentCategory);
    const products = useSelector(selectProducts);
    
    return(
        <Routes>
        <Route index element={<ProductsPage  productsDetails={{
            children: currentCategory,
            headerType: "noLinkHeader",
            route: "flash",
            products: products
           
        }}/>}/>
        </Routes>
    )
}

export default Shop;