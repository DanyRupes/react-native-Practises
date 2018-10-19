import React, {Component} from 'react'
import { Text } from 'react-native';
import {Button,Card, CardSection, Input, Spinner} from './common'
import firebase from 'firebase';
 
class login extends Component {

    state = { email: '', password:'', error: '', loading: false};


    onButtonPressed() {
        const {email, password } = this.state

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            this.onLoginSuccess.bind(this)
             )
        .catch((err) => {
                console.log("Creating Account ")
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onSignupSuccess.bind(this))
                .catch(this.onLoginFailed.bind(this));
        });
    }

        onLoginSuccess() {
            this.setState({email: '',
            password: '',
            loading: false,
            error: ''})
        }

        onSignupSuccess() {
            this.setState({email: '',
            password: '',
            loading: false,
            error: ''})
        }
        onLoginFailed(){
            this.setState({email: '',
            password: '',
            loading: false,
            error: 'Authendication Failed'})
        }
    renderButton() {
            if(this.state.loading) {
                return <Spinner size='small' />
            }
            return(
                <Button onPress={()=>{
                    this.setState({loading: true, error: ''})
                    this.onButtonPressed()
                }}>
                    Login                      
                </Button>
            )
    }

    render(){
        return (
            <Card>
                <CardSection >
                    <Input 
                        textContentType="emailAddress"
                        placeholder="Enter Email"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}>
                    </Input>
                    </CardSection>
                <CardSection >
                    <Input 
                        textContentType="password"
                        placeholder="Enter password"
                        secureTextEntry
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}>
                    </Input>             
                </CardSection>
                <Text  style={styles.errorTextStyle}>
                    {this.state.error}
                 </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}


const styles = {
    errorTextStyle :{
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    },

}
export default login;