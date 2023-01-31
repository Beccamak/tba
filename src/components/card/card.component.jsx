import './card.styles.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Card= ({details}) => {
    const {image , name, price, profession} = details;
   
  
    return(
        <Link to="/">
        { <div className="card-container">
       
             <div className='img-container'>
             <div className='overflow-prevent'>
             <img className="card-image" src={image} alt={name} />      
             </div>
             </div>
             <div className='card-details'>
             <div className='sub-details'>
             <p className='card-name'>{name}</p>
             <p className='card-profession'>{profession}</p>
             <p className='card-price'>${price}/hr</p>
             </div>
             <Link to="/" className="card-view">View</Link>
             </div>
            
         </div>}
        </Link>
    )
}

export default Card;