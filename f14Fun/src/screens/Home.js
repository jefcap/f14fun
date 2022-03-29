import * as React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AnimButtonNavigate from '../components/AnimButtonNavigate';

const imageurl = require("../assets/images/background/Logo-F1.jpg");
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Home'
        }
    }

    // goToDrivers = () => {
    //     this.props.navigation.navigate('Drivers', { screen: 'Drivers' });
    // };

    // goToCircuits = () => {
    //     this.props.navigation.navigate('Circuits', { screen: 'Circuits' });
    // };

    // goToCalendar = () => {
    //     this.props.navigation.navigate('Calendar', { screen: 'Calendar' });
    // };

    // goToLogin = () => {
    //     this.props.navigation.navigate('Login', { screen: 'Login' });
    // };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={imageurl}
                    resizeMode="center"
                    style={styles.imageBackground}>
                    <View style={styles.mainView}>
                        {/* <Button
                    title="Go to Drivers"
                    onPress={() => this.goToDrivers()}
                /> */}
                        {/* <Button
                    title="Go to Circuits"
                    onPress={() => this.goToCircuits()}
                /> */}
                        {/* <Button
                    title="Go to Calendar"
                    onPress={() => this.goToCalendar()}
                /> */}
                        {/* <Button
                    title="Logout"
                    onPress={() => this.goToLogin()}
                /> */}
                        <View style={styles.mainButtonsView}>
                            <AnimButtonNavigate title="Go to Drivers" screen="Drivers" navigation={this.props.navigation} />
                            <AnimButtonNavigate title="Go to Circuits" screen="Circuits" navigation={this.props.navigation} />
                            <AnimButtonNavigate title="Go to Calendar" screen="Calendar" navigation={this.props.navigation} />
                        </View>
                        <View style={styles.logoutButtonView}>
                            <AnimButtonNavigate title=" Logout " screen="Login" navigation={this.props.navigation} />
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
        mainButtonsView: {
            flex: 0.7,
        },
        logoutButtonView: {
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
        imageBackground: {
            padding: 8,
            flex: 1,
        },
    }
)
