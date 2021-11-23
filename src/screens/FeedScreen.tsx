import React from 'react';
import { View, Text, Button } from "react-native";


const FeedScreen = ({ navigation, route }) => {

  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>{itemId} {otherParam}</Text> 

      <Button title="Atras" onPress={() => navigation.goBack()} />

    </View>
  );
}

export default FeedScreen