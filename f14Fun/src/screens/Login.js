import * as React from 'react';
import { Alert, Button, Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AnimButtonNavigate from '../components/AnimButtonNavigate';
import LoginButton from '../components/LoginButton';

const imageurl = require("../assets/images/background/Logo-F1.jpg");
const screenSizeHeight = Dimensions.get('window').height
const screenSizeWidth = Dimensions.get('window').width

const validEmail = 'f1@f1.com'
const validPwd = 'boxbox'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome!',
            email: '',
            password: '',
            credentialsOK: false
        }
    }

    goToHome = () => {
        this.props.navigation.navigate('Home', { screen: 'Home' });
    };

    // Email validation from: https://www.w3resource.com/javascript/form/email-validation.php
    ValidateEmail = (mail) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(mailformat)) {
            return (true)
        }
        return (false)
    }

    checkCredentials = () => {
        console.log("checkCredentials: state.email", this.state.email)
        console.log("checkCredentials: state.password", this.state.password)

        if (!!!this.state.email) {
            Alert.alert("E-mail is empty")
        }
        else if (!this.ValidateEmail(this.state.email)) {
            Alert.alert("You have entered an invalid email address!")
        }
        else if (!!!this.state.password) {
            Alert.alert("Password is empty")
        }
        else if (this.state.password.length < 4) {
            Alert.alert("Password too short")
        }
        else {

            if (this.state.email === validEmail) {
                if (this.state.password === validPwd) {
                    this.goToHome()
                    this.state.credentialsOK = true
                }
            }

            if (this.state.credentialsOK === false) {
                Alert.alert("E-mail or password incorrect")
            }
        }
    }

    //Save typed e-mail
    saveEmail = (emailInput) => {
        this.state.email = emailInput
        console.log("state.email", this.state.email)
        console.log("state.password", this.state.password)

        // if (!!(this.state.email)){
        //     if (!!(this.state.password)){
        //         console.log("email and pwd OK!!")
        //         this.state.buttonStateDisabled = false
        //         console.log("this.state.buttonStateDisabled", this.state.buttonStateDisabled )
        //     }
        // }

    }

    //Save typed password
    savePassword = (passwordInput) => {
        this.state.password = passwordInput
        console.log("state.email", this.state.email)
        console.log("state.password", this.state.password)

        // if (!!(this.state.email)){
        //     if (!!(this.state.password)){
        //         console.log("email and pwd OK!!")
        //         this.state.buttonStateDisabled = false
        //         console.log("this.state.buttonStateDisabled", this.state.buttonStateDisabled )
        //     }
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={imageurl}
                    resizeMode="center"
                    style={styles.imageBackground}>
                    <View style={styles.mainView}>

                        <View style={styles.titleView}>
                            <Text style={styles.titleText}>{`${this.state.title}`}</Text>
                        </View>

                        <View style={styles.textInputView}>
                            <TextInput
                                style={styles.textInput}
                                keyboardType="email-address"
                                placeholder={'EMAIL'}
                                onChangeText={(emailInput) => {
                                    this.saveEmail(emailInput)
                                }}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder={'PASSWORD'}
                                secureTextEntry={true}
                                onChangeText={(passwordInput) => {
                                    this.savePassword(passwordInput)
                                }}
                            />
                        </View>

                        <View style={styles.buttonView}>
                            <Button
                                title="Login"
                                onPress={() => this.checkCredentials()}
                            // bypass checkCredentials
                            // onPress={() => this.goToHome()}   
                            />
                        </View>
                        {/* TODO: Customize login button (maybe) */}
                        {/* <LoginButton title="Login" screen="Login" navigation={this.props.navigation} /> */}
                        <View style={styles.buttonView}>
                            <Button
                                title="Help"
                                onPress={() => Alert.alert(`E-mail: ${validEmail} \nPassword: ${validPwd}`)}
                            />
                        </View>


                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "space-between",
        },
        mainView: {
            height: '100%',
        },
        titleView: {
            flex: 0.2,
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        titleText: {
            fontSize: 36,
            color: '#FF1801',
            fontWeight: 'bold',
            backgroundColor: 'rgba(255,0,0,0.1)'
        },
        textInputView: {
            flex: 0.7,
        },
        buttonView: {
            padding: 8,
        },
        textInput: {
            borderColor: '#777777',
            borderWidth: 3,
            borderRadius: 16,
            marginVertical: 8,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255,255,255,0.4)',
        },
        imageBackground: {
            padding: 8,
            flex: 1,
        },
    }
)
