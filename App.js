
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import bookTransactionScreen from "./screens/instagramScreen"
import searchScreen from "./screens/facebookScreen"
import {createAppContainer} from 'react-navigation'
import instagramScreen from './screens/instagramScreen';
export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
    <Appcontainer/>      
   </View>
  );
}
}

var switchContainer = createBottomTabNavigator({
  Insta: instagramScreen,
  FB: facebook,
});
const Appcontainer = createAppContainer(switchContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
