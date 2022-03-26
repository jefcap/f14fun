import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Calendar'
        }
    }

    goToHome = () => {
        this.props.navigation.navigate('Home', { screen: 'Home' });
        console.warn('Navigate to to home');
    };

    render() {
        return (
            <View>
                <Text>{`Hello from Calendar!!!`}</Text>
                <Button
                    title="Back to Home"
                    onPress={() => this.goToHome()}
                />
            </View>
        );
    }
}
