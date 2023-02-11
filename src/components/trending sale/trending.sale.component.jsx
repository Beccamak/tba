import './trending.sale.styles.css';
import { useSelector } from 'react-redux';
import { selectFlashSalesProducts} from '../../store/products reducer/products.selector';
import ProductsHeader from '../products-header/products.header.component';
import ProductCard from '../productCard/card.component';


const TrendingSale = () => {
    const flashSalesProducts = useSelector(selectFlashSalesProducts);
    return(

        <div className='flash'>
        <ProductsHeader children="Trending Sale" headerType="flashSales" route="flash"/>
        <div className='trending-section'>
       
        <div  className='trending-products'>
        {
            flashSalesProducts.filter((_, index) => {
                return index < 5
            }).map((product) => {
                return <ProductCard key={product.id} product={product}/>
             })
        }
        
   
        </div>
        </div>
        </div>

)
    }

export default TrendingSale;




    
       
 