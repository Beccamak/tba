import './arrivals.styles.css';
import {useState} from 'react';
import { stacks, stacksIcon} from '../../stacks';
const Arrivals = () => {
    const [techActive, setTechActive] = useState("Frontend")
  
    const onTechStackClickHandler = (event) => {
        setTechActive(event.target.innerText);

    }
    
    return(
        <div className='tech-con'>
        <h3 className='tertiary-heading'>Stacks & Technologies</h3>
        <div className='stacks'>
        {
            stacks.map(stack => {
                console.log(techActive, Object.keys(stack)[0])
               return  <div className={`stack ${techActive === Object.keys(stack)[0]? "tech-active" : ""}`} onClick={onTechStackClickHandler}>{Object.keys(stack)}</div>
            })
        }
        </div>
        <div className='tech-cards'>
        {stacks.filter((stack) =>  Object.keys(stack)[0] === techActive).map((tech) => {
          return tech[Object.keys(tech)].map(technology => {
            return  <div className='tech-box' >
                    {stacksIcon[technology]};
                    <p className='tech-name'>{technology}</p>
                    </div>
           })
        })
    }
           
        </div>
        </div>
    )
}


export default Arrivals;