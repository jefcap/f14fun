import * as React from 'react';
import { Dimensions, ImageBackground, Linking, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://www.sportsnet.ca/wp-content/uploads/2022/03/F1-1040x572.jpg" };
const screenSizeHeight = Dimensions.get('window').height
const screenSizeWidth = Dimensions.get('window').width

export default class CalendarDetails extends React.Component {
    render() {
        const { item } = this.props.route.params;
        return (
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.imageBackground}>
                <View style={styles.mainTheme}>
                    <Text style={styles.headerStyle}>{`${item.date}`}</Text>
                    <Text style={styles.bodyStyle}>{`Race time: ${item.time}\n`}</Text>
                    <Text style={styles.bodyStyle}>{`${item.raceName}`}</Text>
                    <Text style={styles.bodyStyle}>{`Circuit: ${item.Circuit.circuitName}`}</Text>
                    <Text style={styles.bodyStyle}>{`Country: ${item.Circuit.Location.country}`}</Text>
                    <Text style={styles.bodyStyle}>{`Round: ${item.round}`}</Text>
                    <Text style={styles.bodyStyle}>{`More info: `}</Text>
                    <Text style={styles.urlStyle} onPress={() => Linking.openURL(item.url)}>{`${item.url}\n`}</Text>
                    {/* There are races that have sprint, and others have ThirdPractice.*/}
                    {item.Sprint ?
                        (<Text style={styles.bodyStyle}>{`Sprint: ${item.Sprint.date} @ ${item.Sprint.time} `}</Text>) :
                        <View />
                    }
                    <Text style={styles.bodyStyle}>{`Quali: ${item.Qualifying.date} @ ${item.Qualifying.time} `}</Text>
                    {item.ThirdPractice ?
                        (<Text style={styles.bodyStyle}>{`FP3: ${item.ThirdPractice.date} @ ${item.ThirdPractice.time} `}</Text>) :
                        <View />
                    }
                    <Text style={styles.bodyStyle}>{`FP2: ${item.SecondPractice.date} @ ${item.SecondPractice.time} `}</Text>
                    <Text style={styles.bodyStyle}>{`FP1: ${item.FirstPractice.date} @ ${item.FirstPractice.time} `}</Text>
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