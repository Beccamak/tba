import './search-bar.styles.css';
import { useState } from 'react';

const SEARCH_BAR_TYPE = {
    home: "home-sear"
}

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearch = (event) => {
      event.preventDefault();
      console.log(`Searching for ${searchQuery}`);
      // Call your search function here with the searchQuery as parameter
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