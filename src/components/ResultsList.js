import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {

    if(!results.length){
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList horizontal={true}
                      data={results}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(result) => result.id}
                      renderItem={( {item }) =>{
                          return (
                              <TouchableOpacity onPress={() => navigation.navigate('Result', { id: item.id })}>
                                    <ResultsDetail result={item}></ResultsDetail>
                              </TouchableOpacity>
                          );
                      }}>
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10     
    }, 
    title: {
        marginLeft: 10,
        fontSize: 18, 
        fontWeight: 5, 
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);