import Button from '../../components/button/button.component';
import './contact-us.styles.css';



const ContactUs = () => {
    return(
        <section>
        <h2 className='contact-us'>Contact Us</h2>
        <div className='container'>
            <h4 className='contact-header'>What can we help you with?</h4>
            <p className='kindly'>Kindly fill up this spaces to let us know what you need our help for and what you want to speak to us about.</p>

            <label className='con-label'>Your Email</label>
            <input className='con-input'  placeholder='Enter your Email Address' type="email" required />
            <label  className='con-label'>What can we help you with?</label>
            <textarea className='text-box' placeholder='Enter your Message...'/>
            <label className='con-label'>Personal Suggestions/Comments</label>
            <textarea  className='text-box' placeholder='Message...'/>
           <div className='submit-btn'>
           
           <Button children="submit" buttonType="filled" />
           </div>
            </div>

        </section>
           )
}


export default ContactUs;