import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigators/MainStackNavigator';
import { FontAwesome } from '@expo/vector-icons'

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
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textoTitle}>Home Screen</Text>

                <View style={styles.addSection}>
                    <Text style={styles.textoAdd}>Add new Tweet</Text>
                    <TouchableOpacity>
                        <FontAwesome
                            name='arrow-circle-right' 
                            size={32}
                            color='green'
                        />
                    </TouchableOpacity>
                </View>

                {
                    tweetData.map(tweet => (
                        <View key={ tweet.id } style={styles.viewContent}>
                            <Text>{tweet.tweet_text}</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('TweetDetaiScreen', {
                                    id: tweet.id,
                                    tweet_text: tweet.tweet_text,
                                })}
                            >
                                <FontAwesome 
                                    name='edit'
                                    size={32}
                                />
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
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
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    textoTitle: {
        fontSize: 40, 
        marginBottom: 30,
        marginTop: 30,
    },
    textoAdd: {
        fontSize: 25, 
        color: 'green'
    },
    addSection: {
        width: '60%',
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})
