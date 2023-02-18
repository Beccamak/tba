import './description.styles.css';



const Description = ({description, specifications, features}) => {
    return(
        <div className='details-itm active-box'>
       <p>{description}</p>
       <br />
       <br />
       <p>Specifications</p>
       <ul>
       {
           specifications.map((specification, index) => {
           return <li key={index}>{specification}</li>
        })
    }
    </ul>
       <br />
       <br />
       <p>Features</p>
       <ul>
       {
           features.map((feature, index) => {
           return <li key={index}>{feature}</li>
        })
    }
    </ul>
       </div>
    )
}



export default Description;