import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
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
        <View style={styles.container}>
            <Text style={styles.texto}>Home Screen</Text>
            {
                tweetData.map(tweet => (
                    <View key={ tweet.id } style={styles.viewContent}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    viewContent: {
        width: '90%',
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    texto: {
        fontSize: 40, 
        marginBottom: 50
    }
})
