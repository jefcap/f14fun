import * as React from 'react';
import { Dimensions, ImageBackground, Linking, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://bobslocks.co.uk/wp-content/uploads/2020/10/F1-Track-collection-Image-scaled.jpg" };
const screenSizeHeight = Dimensions.get('window').height
const screenSizeWidth = Dimensions.get('window').width

export default class CircuitDetails extends React.Component {
    // TODO: Open Google Maps with GPS location
    // setMapsUrl = () => {
    //     const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    //     const latLng = `${lat},${lng}`;
    //     const label = 'Custom Label';
    //     const url = Platform.select({
    //         ios: `${scheme}${label}@${latLng}`,
    //         android: `${scheme}${latLng}(${label})`
    //     });
    // };

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
                    <Text style={styles.bodyStyle}>{`GPS position: ${item.Location.lat}, ${item.Location.long}`}</Text>
                    {/* <Text
                        style={styles.bodyStyle}
                        // onPress={() => Linking.openURL(item.url)}>{`GPS position: ${item.Location.lat}, ${item.Location.long}`}
                        onPress={() => Linking.openURL(url)}>{`GPS position: ${item.Location.lat}, ${item.Location.long}`}
                    >
                    </Text> */}
                    <Text />
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
            borderColor: '#777777',
            borderWidth: 3,
            borderRadius: 16,
            marginVertical: 8,
            // marginHorizontal: 8,
            backgroundColor: 'rgba(255,255,255,0.8)',
            // #FF1801

        },
        headerStyle: {
            fontSize: 24,
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
            textAlign: "center",
        },
        imageBackground: {
            height: screenSizeHeight,
            padding: 32,
        },
    }
)