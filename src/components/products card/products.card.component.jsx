import './products.card.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import ProductCard from '../productCard/card.component';

const ProductsCard = ({children,
    headerType,
    route,
    products}) => {
    //   console.log(products.data.products);
    return(
        <div className='sales-section'>
        <ProductsHeader children={children} headerType={headerType} route={route}/>
        <div className='sales-products'>
        {
            products.map((product) => {
                return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
        
        </div>

    )
}


export default ProductsCard;
{/*products.filter((product) => product.price >=min && product.price <= max)*/}






