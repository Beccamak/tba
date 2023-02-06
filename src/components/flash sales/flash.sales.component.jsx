import './flash.sales.styles.css';
import ShortDeals from '../short time deals/deals.component';
import { useSelector } from 'react-redux';
import { selectFlashSalesProducts} from '../../store/products reducer/products.selector';
import ProductsHeader from '../products-header/products.header.component';

const FlashSales = () => {
    const flashSalesProducts = useSelector(selectFlashSalesProducts);
  
    return(
        <div className='flash'>
        <ProductsHeader children="Today's promo sale" headerType="flashSales" route="flash"/>
        <ShortDeals  products={flashSalesProducts} />
        </div>

)
}

export default FlashSales;
