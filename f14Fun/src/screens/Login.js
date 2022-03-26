import * as React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Login'
        }
    }

    goToHome = () => {
        this.props.navigation.navigate('Home', { screen: 'Home' });
        console.warn('Navigate to to home');
    };

    render() {
        return (
            <View>
                <Text>{`Hello from Login!!!`}</Text>
                {/* <TouchableOpacity onPress={() => this.goToHome()}>
                    <Text>{`GO TO HOME`}</Text>
                </TouchableOpacity> */}
                <Button
                    title="Go to Home"
                    onPress={() => this.goToHome()}
                />
            </View>
        );
    }
}
