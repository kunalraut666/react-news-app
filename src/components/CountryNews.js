import { useParams, useLocation } from 'react-router-dom';
import News from './News';


const CountryNews = ({ apiKey }) => {
    const { countryName } = useParams();
    const queryParams = new URLSearchParams(useLocation().search);
    const category = queryParams.get('category');
  
    return (
      <News pageSize={6} country={countryName} category={category} apiKey={apiKey} />
    );
  };


  export default CountryNews;