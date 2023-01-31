import './header.styles.scss';
import { useState, useEffect } from 'react';
import Beauty from "../../assets/images/beautty.png";
import Fashion from "../../assets/images/fashion.png";
import Hair from "../../assets/images/hair.png";


const Header = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const imgs = [
           Beauty,
           Fashion,
           Hair

    ]
const text =[
        {one : ["Engage the top sought-after experts","Guide your project from start to finish"]},
        {one : ["Bring on a seasoned professional"," to elevate your project's outcome"]},
        {one : ["Find Jobs, Gigs","Discover opportunities on this platform"]},
        {one : ["Join a team to work with","Be a part of their project"]},
      
]
 useEffect(() => {
    const intervalId = setInterval(() => {
        if(slideIndex !== imgs.length){
                setSlideIndex(slideIndex + 1);
        }else if(slideIndex === imgs.length){
                setSlideIndex(1);
        }
       else if(slideIndex !== 1){
                setSlideIndex(slideIndex - 1);
        }else if (slideIndex === 1){
                setSlideIndex(imgs.length)
        }
        
    }, 5000);
    return () => clearInterval(intervalId);
  }, [slideIndex]);
 

    return(
        <div className='header'>
        <div className="carousel-slider">
                {
                        imgs.map((img, index) =>{
                               
                                return <div className={` ${slideIndex === index + 1 ? "slide active-slide" : "slide"}`} key={index}>
                               
                                <div className='header-left'>
                               
                                <img src={img} alt="" className='header-img' />
                                </div>
                                <div className='header-right'>
                                <p className='main-txt'>{ Object.values(text[index])[0][0]}</p>
                                <p className='header-name'>{ Object.values(text[index])[0][1]}</p>
                                <p className='sub-txt'>{ Object.values(text[index])[0][1]}</p>
                                <button className="header-btn">Shop Now</button>
                                </div>
                                </div>
                               
                        } )
                }
                
                
                </div> 
        </div>

                )
        }
        


export default Header;
        // <button className='btn-work'>work</button>
        // <button className='btn-hire'>hire</button>