import './top.categories.styles.css';
import ProductsHeader from '../products-header/products.header.component';
import Wrist from "../../assets/images/wrist.png";
import Clothes from "../../assets/images/clothes.png";
import Shampoo from "../../assets/images/shampoo.png";
import Gloss from "../../assets/images/gloss.png";
import Gown from "../../assets/images/gown.png";
import Nails from "../../assets/images/nails.png";
import Facial from "../../assets/images/facial.png";
import Cream from "../../assets/images/cream.png"; 
import { useState } from 'react';
import { useNavigate } from 'react-router';


const TopCategories = () => {
  const navigate = useNavigate();
  const onTopCategoryHandler = (category) => {
    navigate(`/${category}`)
  }
    return(
        <div className='top-categories'>
        <ProductsHeader children='Hot Collections' headerType="linkHeader" route="/shop-tc"/>

        <div className='top-categories-container container'>
            <div className='top-category'>
            <div className='cat-pic-con' onClick={() => {onTopCategoryHandler("Lip gloss")}} >
            <div className='pic-con'>
            <img className='cat-pic'  src={Cream} alt='Beauty Category'/>
            </div>
            </div>
            <p className={`cat-text`}  onClick={() => {onTopCategoryHandler("Lip gloss")}} style={{transition: "all 1s linear"}} >Body cream</p>
            </div>
            <div className='top-category' >
            <div className='cat-pic-con' onClick={() => {onTopCategoryHandler("Lip gloss")}}>
            <div className='pic-con'>
            <img className='cat-pic'  src={Clothes} alt='Fashion Category' />
            </div>
            </div>
            <p className={`cat-text`} style={{transition: "all 1s linear"}} >Men</p>
            </div>
            <div className='top-category' >
            <div className='cat-pic-con' onClick={() => {onTopCategoryHandler("Lip gloss")}}>
            <div className='pic-con'>
            <img className='cat-pic'  src={Nails} alt='Phones & Tablets Category' />
            </div>
            </div>
            <p className={`cat-text`} style={{transition: "all 1s linear"}} >Nail</p>
            
            </div>
            <div className='top-category' >
              <div className='cat-pic-con' onClick={() => {onTopCategoryHandler("Lip gloss")}}>
            <div className='pic-con'>
            <img className='cat-pic'  src={Wrist} alt='Wrist watches' />
            </div>
            </div>
            <p className={`cat-text`} style={{transition: "all 1s linear"}} >Watch</p>     
            </div>
            <div className='top-category' >
              <div className='cat-pic-con' onClick={() => {onTopCategoryHandler("Lip gloss")}}>
            <div className='pic-con'>
            <img className='cat-pic'  src={Shampoo}  alt='Shoes' />
            </div>
            </div>
            <p className={`cat-text`} style={{transition: "all 1s linear"}} >Shoe</p>     
            </div>
            <div className='top-category' >
              <div className='cat-pic-con' onClick={() => {onTopCategoryHandler("Lip gloss")}}>
            <div className='pic-con'>
            <img className='cat-pic'  src={Gloss}  alt='Shoes' />
            </div>
            </div>
            <p className={`cat-text`} style={{transition: "all 1s linear"}} >Heels</p>     
            </div>
            <div className='top-category' >
              <div className='cat-pic-con' onClick={() => {onTopCategoryHandler("Lip gloss")}}>
            <div className='pic-con'>
            <img className='cat-pic'  src={Facial}  alt='Shoes' />
            </div>
            </div>
            <p className={`cat-text`} style={{transition: "all 1s linear"}} >Cream</p>     
            </div>
            <div className='top-category' >
              <div className='cat-pic-con' onClick={() => {onTopCategoryHandler("Lip gloss")}}>
            <div className='pic-con'>
            <img className='cat-pic'  src={Gown}  alt='Shoes' />
            </div>
            </div>
            <p className={`cat-text`} style={{transition: "all 1s linear"}} >Soap</p>     
            </div>
        </div>
        </div>
        
    )

}


export default TopCategories;