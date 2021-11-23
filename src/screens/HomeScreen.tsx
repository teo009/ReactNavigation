import React, { useState, useEffect } from 'react';
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigators/MainStackNavigator';

type Props = NativeStackScreenProps<MainStackParamList, 'HomeScreen'>;

interface Tweet {
    id: number,
    user_id: number,
    tweet_text: string,
    tweet_date: string,
}

const HomeScreen = ({ navigation }: Props) => {

    const [tweetData, setTweetData] = useState<Tweet[]>([])

    const getTweets = async () => {

        const resp = await fetch('https://hidfzr.deta.dev/')
        const data = await resp.json()
        setTweetData(data.data)

    }

    useEffect(() => {
        getTweets()
    },[])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Home Screen</Text>
            {
                tweetData.map(tweet => (
                    <View key={ tweet.id }>
                        <Text>{tweet.tweet_text}</Text>
                        <Button
                            title="Go to Details"
                            onPress={() => navigation.navigate('TweetDetaiScreen', {
                                id: tweet.id,
                                tweet_text: tweet.tweet_text,
                            })}
                        />
                    </View>
                ))
            }
        </View>
    )
}

export default HomeScreen
