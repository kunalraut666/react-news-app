import { useParams} from 'react-router-dom';
import News from './News';


const NewsEverything = ({ apiKey }) => {
    const { searchQuery } = useParams();
    // const category = queryParams.get('category');
  
    return (
      <News pageSize={6} apiKey={apiKey} searchQuery={searchQuery}/>
    );
  };


  export default NewsEverything;