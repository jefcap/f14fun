import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default class Circuits extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Circuits'
        }
    }

    goToHome = () => {
        this.props.navigation.navigate('Home', { screen: 'Home' });
        console.warn('Navigate to to home');
    };

    render() {
        return (
            <View>
                <Text>{`Hello from Circuits!!!`}</Text>
                <Button
                    title="Back to Home"
                    onPress={() => this.goToHome()}
                />
            </View>
        );
    }
}
