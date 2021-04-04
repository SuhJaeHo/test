import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';

const LocationSearch = (props) => {
    
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    navigation.push('Main', {lat: details.geometry.location.lat, lng: details.geometry.location.lng, address: data.description})
                }}
                query={{
                    key: 'AIzaSyBMk4s9KTSOS2IICXgJ8jQQAeITjx8f3fE',
                    language: 'ko',
                }}
            />
        </View>
    )
}

export default LocationSearch;