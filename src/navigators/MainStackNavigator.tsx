import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TweetDetaiScreen from '../screens/TweetDetaiScreen';
import { View } from 'react-native';

export type MainStackParamList = {
    HomeScreen: undefined;
    TweetDetaiScreen: { id: number, tweet_text: string  }
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ 
                    title: 'Inicio',
                    headerStyle: {
                        backgroundColor: '#90EE90'
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                    }
                }} 
            />
            <Stack.Screen
                name="TweetDetaiScreen"
                component={TweetDetaiScreen} 
                options={{
                    title: 'Tweet Info',
                    headerStyle: {
                        backgroundColor: '#90EE90'
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                }}
            />
        </Stack.Navigator>
    )

}

export default MainStackNavigator