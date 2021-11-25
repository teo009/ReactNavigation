import React from 'react'
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigators/MainStackNavigator';

type Props = NativeStackScreenProps<MainStackParamList, 'TweetDetaiScreen'>;

const TweetDetaiScreen = ({ navigation, route }: Props) => {

    const { id, userId, tweet_text, tweet_date } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tweet Info</Text>
            <Text>Texto del Tweet: {tweet_text}</Text>
        </View>
    )
}

export default TweetDetaiScreen
