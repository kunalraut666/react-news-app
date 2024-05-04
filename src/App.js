import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from './components/CountryNews';
import NewsEverything from './components/NewsEverything';
import { ToastContainer } from 'react-toastify';

const App = () => { 
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
  };

  const apiKeys = [
    "294c290fd34445c6a1f3c2d1d76b297f",
    "94c5159ef36246159704b50e2975ebc5",
    "c1e51f516e10417fb9971ea88f2388b6",
    "52cb6407c534442eba35ec3ef853de10"
  ];
  const pageSize = 6;

  const randomApiKey = Math.floor(Math.random() * 4);

  return (
    <BrowserRouter>
    <ToastContainer />
      <div>
        <Navbar onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={pageSize} country="in" category="general" apiKey={apiKeys[randomApiKey]} searchQuery={searchQuery} />} />
            <Route path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business" apiKey={apiKeys[randomApiKey]} searchQuery={searchQuery} />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" apiKey={apiKeys[randomApiKey]} searchQuery={searchQuery} />} />
            <Route path="/general" element={<News key="general" pageSize={pageSize} country="in" category="general" apiKey={apiKeys[randomApiKey]} searchQuery={searchQuery} />} />
            <Route path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health" apiKey={apiKeys[randomApiKey]} searchQuery={searchQuery} />} />
            <Route path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science" apiKey={apiKeys[randomApiKey]} searchQuery={searchQuery} />} />
            <Route path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" apiKey={apiKeys[randomApiKey]} searchQuery={searchQuery} />} />
            <Route path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology" apiKey={apiKeys[randomApiKey]} searchQuery={searchQuery} />} />
            <Route path="/country/:countryName" element={<CountryNews key="country" apiKey={apiKeys[randomApiKey]} />} />
            <Route path="/search/:searchQuery" element={<NewsEverything key="everything" apiKey={apiKeys[randomApiKey]} />} />
          </Routes>
       
      </div>
    </BrowserRouter>
  );
};

export default App;
