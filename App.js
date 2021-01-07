import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import Header from './componentes/Header';
import StartGameScreen from './screens/StartGamesScreen';
export default function (){
  return (
  <View style={styles.screen}>
   <Header title={"Guesss Number"}/>
   <StartGameScreen/>

  </View>
    );
  
}
const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
