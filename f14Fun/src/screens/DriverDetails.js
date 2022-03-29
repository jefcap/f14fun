import * as React from 'react';
import { Dimensions, Image, ImageBackground, Linking, StyleSheet, Text, View } from 'react-native';
import driverThumbIndex from '../assets/images/driverThumbIndex';

const backgroundUri = { uri: "https://www.sportsnet.ca/wp-content/uploads/2022/03/F1-1040x572.jpg" };
const screenSizeHeight = Dimensions.get('window').height
const screenSizeWidth = Dimensions.get('window').width

export default class DriverDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props.route.params;

        return (
            <ImageBackground
                source={backgroundUri}
                resizeMode="cover"
                style={styles.imageBackground}>
                <View style={styles.mainTheme}>

                    <Text style={styles.headerStyle}>{`${item.familyName}, ${item.givenName}`}</Text>
                    <Text style={styles.bodyStyle}>{`# ${item.permanentNumber}`}</Text>
                    <Text style={styles.bodyStyle}>{`Code: ${item.code}`}</Text>
                    <Text style={styles.bodyStyle}>{`Date of Birth: ${item.dateOfBirth}`}</Text>
                    <Text style={styles.bodyStyle}>{`Nationality: ${item.nationality}`}</Text>
                    <Text/>
                    <Text style={styles.bodyStyle}>{`More info:`}</Text>
                    <Text style={styles.urlStyle} onPress={() => Linking.openURL(item.url)}>{`${item.url}`}</Text>
                </View>
                <View style={styles.driverStyle}>
                    <Image  source={driverThumbIndex[item.driverId]} />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create(
    {
        mainTheme: {
            borderColor: '#777777',
            borderWidth: 3,
            borderRadius: 16,
            marginVertical: 8,
            // marginHorizontal: 8,
            backgroundColor: 'rgba(255,255,255,0.8)',
            // #FF1801

        },
        imageBackground: {
            height: screenSizeHeight,
            padding: 32,
        },
        headerStyle: {
            fontSize: 24,
            color: 'black',
            fontWeight: 'bold',
            textAlign: "center",
        },
        bodyStyle: {
            fontSize: 20,
            color: 'black',
            textAlign: 'left',
        },
        urlStyle: {
            fontSize: 16,
            color: 'blue',
            textAlign: "left",
        },
        driverStyle: {
            // borderColor: '#777777',
            // borderWidth: 3,
            alignItems: 'center'
        },
    }
)