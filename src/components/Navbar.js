import React, {useState} from 'react';
import "./my-custom.css";
import { Link } from 'react-router-dom';
import logo from "../assets/img/red_globe.gif"

const Navbar = ({ onSearch }) => {

  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');

  const countryCodes = {
    "united arab emirates": "ae",
    "argentina": "ar",
    "austria": "at",
    "australia": "au",
    "belgium": "be",
    "bulgaria": "bg",
    "brazil": "br",
    "canada": "ca",
    "switzerland": "ch",
    "china": "cn",
    "colombia": "co",
    "cuba": "cu",
    "czech republic": "cz",
    "germany": "de",
    "egypt": "eg",
    "france": "fr",
    "united kingdom": "gb",
    "greece": "gr",
    "hong kong": "hk",
    "hungary": "hu",
    "indonesia": "id",
    "ireland": "ie",
    "israel": "il",
    "india": "in",
    "italy": "it",
    "japan": "jp",
    "south korea": "kr",
    "lithuania": "lt",
    "latvia": "lv",
    "morocco": "ma",
    "mexico": "mx",
    "malaysia": "my",
    "nigeria": "ng",
    "netherlands": "nl",
    "norway": "no",
    "new zealand": "nz",
    "philippines": "ph",
    "poland": "pl",
    "portugal": "pt",
    "romania": "ro",
    "serbia": "rs",
    "russia": "ru",
    "saudi arabia": "sa",
    "sweden": "se",
    "singapore": "sg",
    "slovenia": "si",
    "slovakia": "sk",
    "thailand": "th",
    "turkey": "tr",
    "taiwan": "tw",
    "ukraine": "ua",
    "united states": "us",
    "venezuela": "ve",
    "south africa": "za",
  };


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchedQuery = searchValue.toLowerCase();
    let searchUrl;
      if (searchedQuery in countryCodes) {
        const countryCode = countryCodes[searchedQuery];
        searchUrl = `/country/${countryCode}?category=${selectedCategory}`;
      } else {
        searchUrl = `/search/${searchedQuery}`;
      }
    
    window.location.href = searchUrl;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <img src={logo} alt="Logo" className="me-2" style={{ width: '50px', borderRadius: '50%' }}/>
          <Link className="navbar-brand" to="/">
            Bulletin Spot
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
                <li className="nav-item dropdown" >
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    
                  >
                    Category
                  </Link>
                  <ul className="dropdown-menu bg-dark">
                    <li>
                      <Link className="dropdown-item text-white mydropdown-item" onClick={() => handleCategoryChange('business')} to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white mydropdown-item" onClick={() => handleCategoryChange('entertainment')} to="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white mydropdown-item" onClick={() => handleCategoryChange('general')} to="/general">
                        General
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white mydropdown-item" onClick={() => handleCategoryChange('health')} to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white mydropdown-item" onClick={() => handleCategoryChange('science')} to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white mydropdown-item" onClick={() => handleCategoryChange('sports')} to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white mydropdown-item" onClick={() => handleCategoryChange('technology')} to="/technology">
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search anything!"
                aria-label="Search"
                onChange={(event) => {setSearchValue(event.target.value)}}
              />
              <button className="btn btn-outline-success" type="submit" >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
