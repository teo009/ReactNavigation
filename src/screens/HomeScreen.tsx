import React, { useState, useEffect } from 'react';
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

    const [tweetData, setTweetData] = useState([])

    const getTweets = async () => {
        const resp = await fetch('https://hidfzr.deta.dev/')
        const data = await resp.json()
        setTweetData(data.data)
    }

    useEffect(() => {
        getTweets()
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Home Screen</Text>
            {
                tweetData.map(tweet => (
                    <Text key={tweet.id}>{tweet.tweet_text}</Text>
                ))
            }
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('TweetDetailScreen', {
                    itemId: 89,
                    otherParam: 'Hello there',
                })}
            />
        </View>
    )
}

export default HomeScreen
