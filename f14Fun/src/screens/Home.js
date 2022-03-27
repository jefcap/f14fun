import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Home'
        }
    }

    goToDrivers = () => {
        this.props.navigation.navigate('Drivers', { screen: 'Drivers' });
    };

    goToCircuits = () => {
        this.props.navigation.navigate('Circuits', { screen: 'Circuits' });
    };

    goToCalendar = () => {
        this.props.navigation.navigate('Calendar', { screen: 'Calendar' });
    };

    goToLogin = () => {
        this.props.navigation.navigate('Login', { screen: 'Login' });
    };

    render() {
        return (
            <View>
                <Text>{`Hello from Home!!!`}</Text>
                <Button
                    title="Go to Drivers"
                    onPress={() => this.goToDrivers()}
                />
                <Button
                    title="Go to Circuits"
                    onPress={() => this.goToCircuits()}
                />
                <Button
                    title="Go to Calendar"
                    onPress={() => this.goToCalendar()}
                />
                <Button
                    title="Logout"
                    onPress={() => this.goToLogin()}
                />
            </View>
        );
    }
}
