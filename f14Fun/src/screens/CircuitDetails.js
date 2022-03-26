import * as React from 'react';
import { Dimensions, ImageBackground, Linking, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://www.sportsnet.ca/wp-content/uploads/2022/03/F1-1040x572.jpg" };
const screenSizeHeight = Dimensions.get('window').height
const screenSizeWidth = Dimensions.get('window').width

export default class CircuitDetails extends React.Component {
    render() {
        const { item } = this.props.route.params;
        return (
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.imageBackground}>
                <View style={styles.mainTheme}>

                    <Text style={styles.headerStyle}>{`${item.circuitName}`}</Text>
                    <Text style={styles.bodyStyle}>{`City: ${item.Location.locality}`}</Text>
                    <Text style={styles.bodyStyle}>{`Country: ${item.Location.country}`}</Text>
                    <Text style={styles.bodyStyle}>{`More info: `}</Text>
                    <Text style={styles.urlStyle} onPress={() => Linking.openURL(item.url)}>{`${item.url}`}</Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create(
    {
        mainTheme: {
            backgroundColor: 'aquamarine',
            justifyContent: 'center',
            margin: 4,
            borderBottomColor: 'black',
            borderWidth: 2,
        },
        headerStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: "center",
        },
        bodyStyle: {
            fontSize: 16,
            color: 'black',
            textAlign: 'left',
        },
        urlStyle: {
            fontSize: 16,
            color: 'blue',
            textAlign: "center",
        },
        imageBackground: {
            height: screenSizeHeight,
            padding: 32,
        },
    }
)