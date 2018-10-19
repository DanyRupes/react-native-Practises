import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import firebase  from 'firebase'
import { Header, Spinner, Button } from './src/components/common'
import LoginForm from './src/components/LoginForm'
import Home from './src/components/Home'

export default class App extends Component {

  state = { loggedIn: null}

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBTf4wAHEfPLVLYI4XHzSzWHtjPb-1e_f8",
      authDomain: "testing-a0891.firebaseapp.com",
      databaseURL: "https://testing-a0891.firebaseio.com",
      projectId: "testing-a0891",
      storageBucket: "testing-a0891.appspot.com",
      messagingSenderId: "563836625256"
    });

          firebase.auth().onAuthStateChanged((user)=>{
              if(user)this.setState({ loggedIn : true})
              else this.setState({ loggedIn:false})
          })
  }

  renderPage() {
    switch(this.state.loggedIn) {
      case true : {
        return(
          <View>
          <Home />
        </View>)
      }
      case false: {      
      return(
        <View>
        <Header headerText={"Home"}/>
        <LoginForm />
      </View>)
    }
    default : {
        return(
        <View style={{alignSelf: 'center'}}>
        <Spinner size='large'/>
      </View>)
    }
  }
}
  
  render() {
    const {container, loginTitle} = styles
    return (
      <View style={container}>
        {this.renderPage()}
      </View>
              
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // height: 100,
    // marginTop: 23,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  
  },

  loginTitle: {
    fontSize: 24,
    fontWeight: '700',
    backgroundColor: '#ddd',
    padding:16,
    flex:1,
    textAlign:'center'
  }
});
