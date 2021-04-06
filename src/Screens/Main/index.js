import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import MyMapView from '../../Components/MyMapView';
import LocationSearch from '../LocationSearch';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121, 
                address: 0,
            }
        }
    }

    onMapRegionChange(region) {
        this.setState({ region });
    }

    getCoords = (loc) => {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121, 
            }
        })
    }

    renderContent = () => (  
        <View
          style={{
            flex: 0,
            backgroundColor: '#fff',
            padding: 16,
            height: 450,
          }}
        >
            <LocationSearch notifyChange={(loc) => this.getCoords(loc)}/>             
        </View>
    );

    render() {
        return (
            <View style={{width: '100%', height: '100%'}}>
                <MyMapView
                    region={this.state.region}
                    onRegionChange={(reg) => this.onMapRegionChange(reg)}                    
                />                 
                <BottomSheet
                    renderContent={this.renderContent}
                    snapPoints={[450, 300, 150, 0]}
                    borderRadius={10}
                    enabledContentTapInteraction={false} //bottom sheet내에서 onPress 활성화
                />
            </View>
        )
    }
}