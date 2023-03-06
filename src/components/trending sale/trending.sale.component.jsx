import './trending.sale.styles.css';
import { useSelector } from 'react-redux';
import { selectFlashSalesProducts} from '../../store/products reducer/products.selector';
import ProductCard from '../productCard/card.component';


const TrendingSale = () => {
    const flashSalesProducts = useSelector(selectFlashSalesProducts);
    return(

        <div className='trending'>
        <div className="products-header-container ">
            <div className='container ph-sub'>
            <span className='secondary-heading'>Trending Sale</span>
            </div>
        </div>

        
        <div className='trending-section container'>
       
        <div  className='trending-products '>
        {
            flashSalesProducts.filter((_, index) => {
                return index < 5
            }).map((product) => {
                return <ProductCard key={product.id} product={product} />
             })
        }
       
   
        </div>
        </div>
        </div>

)
    }

export default TrendingSale;




    
       
 