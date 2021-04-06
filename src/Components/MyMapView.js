import React, {Component} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const MyMapView = (props) => {
    return (
        <MapView 
            style={{width: '100%', height: '100%'}}
            region={props.region}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            onRegionChange={(reg) => props.onRegionChange(reg)}                   
        >
            
            <Marker coordinate={props.region} />
        </MapView>
    );
}

export default MyMapView;

    