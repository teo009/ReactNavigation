import React from 'react'
import { View, Text, Button } from 'react-native';

const TweetDetaiScreen = ({ navigation, route }) => {

    const { itemId, otherParam } = route.params;

    return (
        <View>
            <Text>{itemId} {otherParam}</Text>
            <Text>Hello form Details</Text>
            <Button title="Atras" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default TweetDetaiScreen
