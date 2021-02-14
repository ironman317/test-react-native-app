import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = setState([]);

    
    const searchApi = async ( searchTerm ) => {
            try{
                const response = await yelp.get('/search', {
                    params: {
                        limit: 50, 
                        term, 
                        location: 'san jose'
                    }
                });
                setResults(response.data.businesses);
            } catch (err) {
                setErrorMessage('Something Went Wrong');
                console.log(err);
            }
    } 

    useEffect(()=>{
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};