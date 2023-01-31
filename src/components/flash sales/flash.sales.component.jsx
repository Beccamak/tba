import './flash.sales.styles.css';
import Planning from "../../assets/images/banner-img-1.png";
import Design from "../../assets/images/banner-img-2.png";
import Development from "../../assets/images/banner-img-3.png";
import Production from "../../assets/images/banner-img-3.png";


const FlashSales = () => {
    
  
    return(
   <section className='container'>

   <div className='grid grid--2-cols'>
   {/* Dev process 1*/}
   <div className='abt-us-txt-box'>
   <p className='abt-us-number'>Lorem Ipsum Welcome</p>
   <h3 className='tertiary-heading'>Planning</h3>
   <p className='abt-us-description'>We will schedule meetings, and there will be a lot of filtering to obtain specific details and know what information will be valuable to the users. At this stage, we will be drawing conclusions on the website's content and functionality.</p>
   
   </div>
  <div className='abt-us-img-box'>
  <img className='abt-us-img' src={Planning} alt='planning stage'/>
  </div>

   {/* Dev process 2*/}
  <div className='abt-us-img-box'>
  <img className='abt-us-img' src={Design} alt='planning stage'/>
  </div>

  <div className='abt-us-txt-box'>
  <p className='abt-us-number'>Lorem Ipsum Welcome</p>
  <h3 className='tertiary-heading'>Design</h3>
  <p className='abt-us-description'>We will present two design options for you to select from. Then we'll make as many modifications as we need to before we get to the final programmed version.</p>
  
  </div>

   {/* Dev process 3*/}
   <div className='abt-us-txt-box'>
   <p className='abt-us-number'>Lorem Ipsum Welcome</p>
   <h3 className='tertiary-heading'>Development</h3>
   <p className='abt-us-description'>The agreed design, features, and functionalities will be coded during the Website Development stage..</p>
   
   </div>
  <div className='abt-us-img-box'>
  <img className='abt-us-img' src={Development} alt='planning stage'/>
  </div>

    {/* Dev process 2*/}
    <div className='abt-us-img-box'>
    <img className='abt-us-img' src={Production} alt='planning stage'/>
    </div>

    <div className='abt-us-txt-box'>
    <p className='abt-us-number'>Lorem Ipsum Welcome</p>
    <h3 className='tertiary-heading'>Production</h3>
    <p className='abt-us-description'>We will host the website once it has been designed and thoroughly tested, and continuous maintenance will be performed.
    Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper.
    </p>
    
    </div>
   
   </div>
   </section>
   

)
}

export default FlashSales;


