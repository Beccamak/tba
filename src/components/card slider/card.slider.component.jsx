import './card.slider.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Card from '../card/card.component';
import Beauty from "../../assets/images/cloth.png";


const professionals =  [{"name": "REbecca", profession: "teacher", price: 345, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 345, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 345, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 645, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 345, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 345, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 345, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 345, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 345, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 345, image:Beauty},
{"name": "REbecca", profession: "teacher", price: 885, image:Beauty}]
const CardSlider = () => {
    const professionalsSlideRef= useRef();
    const onScrollLeft = () => {
        const containerWidth =  professionalsSlideRef.current.getBoundingClientRect().width;
         professionalsSlideRef.current.scrollLeft -= containerWidth;
    }
    const onScrollRight = () => {
        const containerWidth =  professionalsSlideRef.current.getBoundingClientRect().width;
         professionalsSlideRef.current.scrollLeft += containerWidth;
    }

    
    return(
        <section className='slider-card-section'>
        <h2 className='secondary-heading'>Top Professionals</h2>
        <div  ref={ professionalsSlideRef} className='professionals-container'>
        {
            professionals.filter((_, index) => {
                return index < 15
            }).map((professional) => {
                return <Card key={professional.id} details={professional}/>
             })
        }
        
        <FontAwesomeIcon icon={faAngleLeft} className="btn-slide left" onClick={onScrollLeft} />
        <FontAwesomeIcon icon={faAngleRight} className="btn-slide right" onClick={onScrollRight}/>
        </div>
       
        </section>
    )
}

export default CardSlider;