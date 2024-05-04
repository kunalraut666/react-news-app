import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { toast, Bounce} from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const News = ({ country = 'in', pageSize = 5, category = 'general', apiKey, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async (pageNumber) => {
    setLoading(true);
    let url;
    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}&page=${pageNumber}&pageSize=${pageSize}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${pageNumber}&pageSize=${pageSize}`;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
       if (data.code === "rateLimited") {
        // All API keys are exhausted
        toast.error("All API keys are exhausted.", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
          theme: "dark",
          pauseOnFocusLoss: true,
        });
      } else {
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, country, category, searchQuery]); // Add all dependencies that affect fetching


  const handlePreviousClick = () => {
    if (page > 1) {
      fetchNews(page - 1);
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page + 1 <= Math.ceil(totalResults / pageSize)) {
      fetchNews(page + 1);
      setPage(page + 1);
    }
  };

  return (
    <div className='container my-3'>
      <h1 className='text-center' style={{ margin: '40px' }}>
        Bulletin Spot News
      </h1>
      {loading && <Spinner />}
      <div className='row'>
        {!loading &&
          articles.map((article, index) => (
            <div className='col-md-4' key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                imgUrl={article.urlToImage}
                newsUrl={article.url}
                auther={article.author}
                date={article.publishedAt}
                source={article.source.name}
              />
            </div>
          ))}
      </div>
      <div className='container d-flex justify-content-between'>
        <button
          disabled={page <= 1}
          type='button'
          className='btn btn-dark'
          onClick={handlePreviousClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          type='button'
          className='btn btn-dark'
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};

export default React.memo(News);
