import * as React from 'react';
import { Dimensions, Image, ImageBackground, Linking, StyleSheet, Text, View } from 'react-native';
import driverThumbIndex from '../assets/images/driverThumbIndex';

const image = { uri: "https://www.sportsnet.ca/wp-content/uploads/2022/03/F1-1040x572.jpg" };
const screenSizeHeight = Dimensions.get('window').height
const screenSizeWidth = Dimensions.get('window').width

export default class DriverDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            driverThumbImage: '',
        }
    }

    componentDidMount = () => {
        this.backgroundChange();
        // this.printLogData();
    };

    getDriverSmallById = (driverId) => {
        // console.log(driverThumbIndex)
        var driver = driverThumbIndex.find(x => x.name == driverId)
        if (driver) {
            // console.log("Driver image selected:", driver.image)
            return driver.image
        }
        // Default driver image
        return driverThumbIndex[0].image
    }

    backgroundChange = () => {
        // TODO: Need to fix this warning on first launch: ERROR  Warning: Failed prop type: Invalid prop `source` supplied to `Image`, expected one of type [number].
        // Image@http://10.0.2.2:8081/index.bundle?platform=android&dev=true&minify=false&app=com.f14fun&modulesOnly=false&runModule=true:74305:56
        const driverId = this.props.route.params.item.driverId
        this.setState({
            driverThumbImage: this.getDriverSmallById(driverId),
        })
        console.log("Driver: ", driverId)
        console.log("driverThumbImage: ", this.state.driverThumbImage)
    }


    render() {
        const { item } = this.props.route.params;
        return (
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.imageBackground}>
                <View style={styles.mainTheme}>

                    <Text style={styles.headerStyle}>{`${item.familyName}, ${item.givenName}`}</Text>
                    <Text style={styles.bodyStyle}>{`# ${item.permanentNumber}`}</Text>
                    <Text style={styles.bodyStyle}>{`Code: ${item.code}`}</Text>
                    <Text style={styles.bodyStyle}>{`Date of Birth: ${item.dateOfBirth}`}</Text>
                    <Text style={styles.bodyStyle}>{`Nationality: ${item.nationality}`}</Text>
                    <Text style={styles.urlStyle} onPress={() => Linking.openURL(item.url)}>{`Books: ${item.url}`}</Text>
                </View>
                <View>
                    <Image source={this.state.driverThumbImage} />
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
            textAlign: "left",
        },
        imageBackground: {
            height: screenSizeHeight,
            padding: 32,
        },
    }
)