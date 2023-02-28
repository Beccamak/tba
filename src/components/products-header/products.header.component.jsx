import './products.header.styles.css';
import {Link} from 'react-router-dom';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductsHeader = ({headerType, children, route, onClickHandler, previewRoute}) => {


    return(
        <div className= {`products-header-container ${headerType==="pageHeader" ? "pd-reduce" : ""}` }>
            <span className='secondary-heading'>{children}</span>
            {headerType === "normal" && ""}
            {headerType === "linkHeader"? <Link className='secondary-heading see-more' to={`${route}`} >See More
            
            <FontAwesomeIcon size='1x' icon={faAngleRight} />
            </Link>: ""}
            
        </div>
    )
}

export default ProductsHeader;  