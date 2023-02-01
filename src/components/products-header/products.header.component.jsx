import './products.header.styles.css';
import {Link} from 'react-router-dom';


const ProductsHeader = ({headerType, children, route, onClickHandler, previewRoute}) => {
    
        const PRODUCT_HEADER_CLASSES = {
        flashSales : "flash_sale_product_header",
        normal: 'normal',
        noLinkHeader: 'noLinkHeader',
        previewHeader: "previewHeader"
    }

    // const {title, additionalInfo} = productTitle;
    return(
        <div className= {`products-header-container ${PRODUCT_HEADER_CLASSES[headerType]}`}>
            <span>{children}</span>
            {headerType !=="noLinkHeader" && headerType !=="previewHeader" && <Link to={`/${route}`} onClick={onClickHandler}>View all</Link>}
            {headerType === "previewHeader" && <Link to={previewRoute}>View All</Link>}
        </div>
    )
}

export default ProductsHeader;