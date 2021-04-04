import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';

import LocationSearch from '../Screens/LocationSearch';
import BottomSheet from '../Screens/BottomSheet';
import MyMapView from '../Components/MapView';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"BottomSheet"}
                    component={Main}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen 
                    name={"LocationSearch"}
                    component={LocationSearch}
                    options={{
                        title: "Search Your Destination"
                    }}
                />

                <Stack.Screen 
                    name={"MyMapView"}
                    component={MyMapView}
                    options={{
                        headerShown: false,
                    }}
                />  
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;