import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Button } from './common'
import firebase from 'firebase'

 class Home extends Component {
     render(){
     const { logoutContainer } = styles
    return(
            <View >
                <Header headerText={"Home"}/>
                <View  style={logoutContainer}>
                    <Button 
                    onPress={()=>firebase.auth().signOut()}>
                        LogOut                      
                    </Button>
                </View>

            </View>
        )
    }
 }

const styles =StyleSheet.create({
    logoutContainer:{
        height: 60,
    }
})

export  default Home