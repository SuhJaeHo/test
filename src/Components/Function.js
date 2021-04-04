import Geocoder from 'react-native-geocoding';

//지역 검색
export const searchResult = () => {
    this.setState({
        region: {
            latitude: this.props.route.params.lat,
            longitude: this.props.route.params.lng,
            address: this.props.route.params.address,
        },
    });        
}