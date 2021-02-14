import React from 'react';
import {View, TextInput, StyleSheet} from 'react-navtive';
import { Feather } from '@expo/vector-icons';


const SearchScreen = ({term, onTermChange, onTermSubmit}) =>{
    return (
    <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} size={40} name="search"/>
        <TextInput style={styles.inputStyle}
                   autoCapitalize="none"
                   autoCorrect="false" 
                   placeholder="Search"
                   value={term}
                   onChangeText={onTermChange} 
                   onEndEditing={onTermSubmit}
                   />
    </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        marginTop: 10, 
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row', 
        marginBottom: 5
    }, 
    inputStyle: {
        borderColor: 'black', 
        borderWidth: 1, 
        fontSize: 18, 
        flex: 1
    }, 
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center', 
        marginHorizontal: 15
    }
});

export default SearchScreen;