import React from 'react';
import { StatusBar, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import Home from '../screens/Home';
import Map from '../screens/Map';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const Routes = () => (
    <>
        <StatusBar barStyle='dark-content' />
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        header: () => null,
                    }} />
                <Stack.Screen
                    name="Map"
                    component={Map}
                    options={({ navigation, route }) => ({
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => navigation.goBack()}>
                                <Text style={{ fontSize: 16, color: '#FFF' }}>HOME</Text>
                            </TouchableOpacity>
                        ),
                        headerTitle: () => <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 15, color: '#FFF' }}>{route.params.category}</Text>,
                        headerStyle: {
                            backgroundColor: '#6C63FF'
                        }
                    })}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={({ navigation, route }) => ({
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => navigation.goBack()}>
                                <Text style={{ fontSize: 16, color: '#FFF' }}>MAPA</Text>
                            </TouchableOpacity>
                        ),
                        headerTitle: () => <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 15, color: '#FFF' }}>{route.params.place.nomeFantasia}</Text>,
                        headerStyle: {
                            backgroundColor: '#6C63FF'
                        }
                    })} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
)

export default Routes;