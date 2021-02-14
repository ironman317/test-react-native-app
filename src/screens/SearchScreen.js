import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-navtive';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <View style={{ flex: 1 }}>
            {'Something Went Wrong' ? <Text>{errorMessage}</Text> : null }
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}>
            </SearchBar>
            <ScrollView>
                    <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
                    <ResultsList title="Hello" results={filterResultsByPrice('$$')}/>
                    <ResultsList title="Goodbye" results={filterResultsByPrice('$$$')}/>
            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen; 