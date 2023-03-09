import './products.page.styles.css';
import Sidebar from '../../components/sidebar/sidebar.component';
import ProductsCard from '../../components/products card/products.card.component';

const ProductsPage = ({productsDetails}) => {
    const {children, headerType, route, products} = productsDetails;
    return(
        <div>

        <div className='products-page'>
        <div className='sd-cat'>
        <Sidebar  products={products}/>
        </div>

            <ProductsCard children={children} headerType={headerType} route={route} products={products}/>
        </div>
        </div>
    )
}

export default ProductsPage;