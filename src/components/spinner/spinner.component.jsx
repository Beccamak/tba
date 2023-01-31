import './spinner.styles.css';

const spinnerStyle = {
  big: "big",
  small: "small"
}
const Spinner = ({spinner}) => {
    return (
      spinnerStyle[spinner] === "big"? 
      <div className="loading">
      <div className="loading-spinner"></div>
    </div>
    :
     <div className="small-loading">
    <div className="small-loading-spinner"></div>
  </div>
      
        
    )
}


export default Spinner;