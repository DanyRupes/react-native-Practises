import React from 'react';
import { AppRegistery,StyleSheet,View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// const handMade = () => (<Text>Hello World</Text>);

// AppRegistery.registerComponent('HandMade', ()=> handMade);

export default class HandMade extends React.Component {
    render(){
        console.log("Hello Debugger")
        return(
            <View style={styles.container}>
                <View style={styles.appBar}></View>
                    <Header headerText={'Homepage'}/>
                    <AlbumList />
            </View>
            );
    }
}
 
const styles = StyleSheet.create({
  container: {
      flex:1, //filling entire screen
      backgroundColor: '#fff', 
  },
  appBar:{
      paddingBottom: 21,
      backgroundColor: '#fff'
  },
  bodyContainer:{
 
  },
});














// import React from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { AppLoading, Asset, Font, Icon } from 'expo';
// import AppNavigator from './navigation/AppNavigator';

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false,
//   };

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <View style={styles.container}>
//           {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//           <AppNavigator />
//         </View>
//       );
//     }
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([
//       Asset.loadAsync([
//         require('./assets/images/robot-dev.png'),
//         require('./assets/images/robot-prod.png'),
//       ]),
//       Font.loadAsync({
//         // This is the font that we are using for our tab bar
//         ...Icon.Ionicons.font,
//         // We include SpaceMono because we use it in HomeScreen.js. Feel free
//         // to remove this if you are not using it in your app
//         'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//       }),
//     ]);
//   };

//   _handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
// }


