import * as React from 'react';
import { View, Pressable, StyleSheet, Text, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {useNavigation} from '@react-navigation/native';

import MyMapView from '../../Components/MapView';

import styles from './styles';

export default function BottomSheet(props) {

  const navigation = useNavigation();

  const renderContent = () => (  
    <View
      style={{
        flex: 0,
        backgroundColor: '#fff0f5',
        padding: 16,
        height: 450,
      }}
    >
        <Pressable
            style={styles.locationSearchBtn}
            onPress={() => navigation.push('LocationSearch')}
        >
        
            {props.route.params !== undefined ?
                <Text>{props.route.params.address}</Text>
            : null}         
        </Pressable>    
    </View>
  );
 
  return (
    <>
      <MyMapView/>
      <BottomSheet
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        enabledContentTapInteraction={false} //bottom sheet내에서 onPress 활성화
      />
    </>
  );
}