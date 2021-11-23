import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import HomeScreen from '../screens/HomeScreen';
import TweetDetaiScreen from '../screens/TweetDetaiScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Inicio' }} />
            <Stack.Screen
                name="TweetDetailScreen"
                component={TweetDetaiScreen} />
        </Stack.Navigator>
    )

}

export default MainStackNavigator