import * as React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class AnimButtonNavigate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animationType: 'zoomInUp',
        };
    }

    animatedPress = () => {
        this.setState({
            animationType: 'shake',
        })
        const { screen, navigation } = this.props;
        navigation.navigate(screen, { screen: screen });
    }

    render() {
        const { title, screen, navigation } = this.props;
        return (
            <Animatable.View animation={this.state.animationType}>
                <Pressable style={styles.mainTheme} onPress={() => navigation.navigate(screen, { screen: screen })}>
                    <Text style={styles.textButton}>
                        {`${title}`}
                    </Text>
                </Pressable>
            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create(
    {
        mainTheme: {
            height: 50,
            backgroundColor: 'white',
            marginVertical: 8,
            borderRadius: 10,
            borderBottomWidth: 3,
            borderBottomColor: 'gray',
            borderRightWidth: 3,
            borderRightColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
        },
        textButton: {
            textTransform: 'uppercase',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'gray',
        }
    }
)