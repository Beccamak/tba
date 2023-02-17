import './home.styles.css';
import Header from '../../components/header/header.component';
import FlashSales from '../../components/flash sales/flash.sales.component'
import TopCategories from '../../components/top categories/top.categories.component';
import TopBrands from '../../components/card slider/card.slider.component';
import Arrivals from '../../components/arrivals/arrivals.component.jsx';
import {motion} from "framer-motion";
import MainDisplay from "../../components/main display/main.display.component.jsx"
import MidSection from '../../components/mid-section/mid.section.component';
import TrendingSale from '../../components/trending sale/trending.sale.component';
import LittleAbout from '../../components/little about/about.component';
import { useLocation } from 'react-router';

const Home = () => {
  const location = useLocation();
  console.log("location", location);
    return(
         <motion.div initial={{width: 0}} animate={{width: "100%"}} transition={{duration: 0.9}} exit={{width: window.innerWidth}}>    
         <MainDisplay />
         <MidSection />
         <TrendingSale />
         <FlashSales />
         <TopCategories />
         <LittleAbout />
         
           </motion.div>
           )
        }
        
        
        export default Home;
        
        // <Header />
          // <OutstandingSales />
// <FlashSales />
        //   <TopBrands />
        //   <Arrivals />