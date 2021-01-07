
import React from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import Card from '../componentes/Card';
import Colors from '../constants/Color';
const StartGameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title} >Start a New Game</Text>
           <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                   <View style={styles.buttonn}> 
                   <Button title="Reset" onPress={() =>{}} color={Colors.accent}/>
                   </View>
                   <View style={styles.buttonn}> 
                    <Button title="Confirm" onPress={() =>{}} color={Colors.primary}/>
                    </View>
                </View>
                </Card>
        </View>
    );
};

const styles = StyleSheet.create({
     screen:{
         flex:1,
         padding:10,
         alignItems:'center'
     },
     title:{
        fontSize:20,
        marginVertical:10,
        
     },
     inputContainer:{
         width:300,
         maxWidth:'80%',
         alignItems:'center',
       
     },
     buttonContainer:{
         flexDirection:'row',
         width:'100%',
         justifyContent:'space-between',
         paddingHorizontal:15
     },
     buttonn:{
         width:100
     }
});

export default StartGameScreen;