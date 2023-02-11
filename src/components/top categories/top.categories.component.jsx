import './top.categories.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import Beauty from "../../assets/images/beauty.png";
import Fashion from "../../assets/images/cloth.png";
import Phone from "../../assets/images/laptop.png";
import Watch from "../../assets/images/watch.png";
import Shoe from "../../assets/images/shoe.png";
import { useState } from 'react';


const TopCategories = () => {
   const [showTopCategory, setShowTopCategory] = useState("");
   const onEnterTopCategory = () => setShowTopCategory(true);
   const onLeaveTopCategory = () => setShowTopCategory(false);
    return(
        <div className='top-categories'>
        <ProductsHeader children="Top Categories" />

        <div className='top-categories-container'>
            <div className='top-category' onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Beauty} alt='Beauty Category'/>
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Health and Beauty</p>
            console.log(showTopCategory);
            </div>
            <div className='top-category'  onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Fashion} alt='Fashion Category' />
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Fashion</p>
            </div>
            <div className='top-category'  onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Phone} alt='Phones & Tablets Category' />
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Phones &  Tablets</p>
            
            </div>
            <div className='top-category'  onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Watch} alt='Wrist watches' />
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Wrist Watches</p>     
            </div>
            <div className='top-category'  onMouseEnter={onEnterTopCategory} onMouseLeave={onLeaveTopCategory}>
            <img className='cat-pic' src={Shoe}  alt='Shoes' />
            <p className={`cat-text ${showTopCategory? 'transform':'none'}`} style={{transition: "all 1s linear"}} >Heels</p>     
            </div>
        </div>
        </div>
        
    )

}


export default TopCategories;