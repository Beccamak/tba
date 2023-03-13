import './flash.sales.styles.css';
import ShortDeals from '../short time deals/deals.component';
import { useSelector } from 'react-redux';
import { selectFlashSalesProducts} from '../../store/products reducer/products.selector';
import { Link } from 'react-router-dom';
import Timer from "../timer/timer.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const FlashSales = () => {
    const flashSalesProducts = useSelector(selectFlashSalesProducts);
  
    return(
        <div className='flash'>
        <div className= {`products-header-container`}>
        <div className='container ph-sub'>
        <div className='sp-timer'>
        <span>Promo Sale</span>
        <Timer />
        </div>
        <div className='see-more'>
        <Link to="/flash">See More</Link>
        <FontAwesomeIcon  icon={faAngleRight} />
        </div>
        </div>
        
    </div>
        <ShortDeals  products={flashSalesProducts} />
        </div>

)
}

export default FlashSales;
