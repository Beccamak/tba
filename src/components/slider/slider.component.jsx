import './slider.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Hed from '../../assets/images/hed.jpg';


const Slider = ({sliderType}) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const imgs = [
            Hed,
            Hed,
            Hed,
            Hed,
            Hed

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
 
const nextSlide = () => {
    if(slideIndex !== imgs.length){
            setSlideIndex(slideIndex + 1);
    }else if(slideIndex === imgs.length){
            setSlideIndex(1);
    }

};
const prevSlide = () => {
    if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
    }else if (slideIndex === 1){
            setSlideIndex(imgs.length)
    }
};
const clickDot = (index) => {
    setSlideIndex(index)
}
    return(
        <div className={`carousel-slider ${sliderType}`}>
          
                {
                        imgs.map((img, index) =>{
                                return <div className={` ${slideIndex === index + 1 ? "slide active-slide" : "slide"}`}>
                                <div className='banner-img'>
                                <img  className='slide-img' src={img} />
                               
                                </div>
                                </div>
                        } )
                }
               
                <FontAwesomeIcon icon={faAngleLeft} className="btn-slide prev"  onClick={prevSlide}/>
                <FontAwesomeIcon icon={faAngleRight} className="btn-slide next" onClick={nextSlide} />

               
                <div className='dots-container'>
                {
                        Array.from({length: 5}).map((item, index) => (
                         <div className={slideIndex === index+1 ? "dot active" : "dot"} onClick={() => clickDot(index + 1)}></div>
                        ))
                }
                </div>
           </div> 
    )
}


 export default Slider;     
// {
//                         imgs.map((img, index) =>{
//                                 return <div style={{backgroundImage:`url('${img}')`}}   className={` ${slideIndex === index + 1 ? "slide active-slide" : "slide"}`}>
//                                 <div className='banner-img'>
                               
                                
                                
//                                 </div>
//                                 </div>
//                         } )
//                 }