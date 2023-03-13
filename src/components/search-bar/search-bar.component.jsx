import './search-bar.styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { setSearchString } from '../../store/products reducer/products.action';
import { useDispatch } from 'react-redux';


const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearchInputChange = (event) => {
    //   setSearchQuery(event.target.value);
       const searchStringValue = event.target.value.toLocaleLowerCase();
        dispatch(setSearchString(searchStringValue));
       navigate("/all-products");
       
     
    };
  
    const handleSearch = (event) => {
      event.preventDefault();
      console.log(`Searching for ${searchQuery}`);
     
    };
  
    return (
      <div className="search-bar">
      <svg xmlns="http://www.w3.org/2000/svg" className="psearch-icon nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
        <input type="text" className='input-search' placeholder="Search products, categories" value={searchQuery} onChange={handleSearchInputChange} />
      </div>
    );
}


export default Searchbar