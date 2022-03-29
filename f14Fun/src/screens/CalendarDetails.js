import * as React from 'react';
import { Dimensions, ImageBackground, Linking, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://motorsporttickets.com/blog/wp-content/uploads/2020/09/F1-desktop-80-1-1024x576.jpg" };
const screenSizeHeight = Dimensions.get('window').height
const screenSizeWidth = Dimensions.get('window').width

export default class CalendarDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hasSprint: false
        }
    }

    componentDidMount = () => {
        this.sprintVerify();
    }

    sprintVerify = () => {
        console.log("Estou no sprint verify")
        const {item} = this.props.route.params;
        const keyArray = Object.keys(item);
        keyArray.forEach(key => {
            console.log("Minha chave é: ", key)
            if (key == 'Sprint') {
                this.setState({
                    hasSprint: true
                })
                console.log("Has Sprint: ", this.state.hasSprint);
            }
        })
    }

    render() {
        const { item } = this.props.route.params;
        const textColor = '#AA2222';
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
                    <Text style={styles.bodyStyle}>{`Quali: ${item.Qualifying.date} @ ${item.Qualifying.time} `}</Text>
                    { this.state.hasSprint ?
                        (<Text style={[styles.bodyStyle, {color: textColor}]}>{`Sprint: ${item.Sprint.date} @ ${item.Sprint.time} `}</Text>)
                        :
                        <View/>
                    }
                    { item.ThirdPractice ?
                        (<Text style={styles.bodyStyle}>{`FP3: ${item.ThirdPractice.date} @ ${item.ThirdPractice.time} `}</Text>)
                        :
                        <View/>
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
            borderColor: '#777777',
            borderWidth: 3,
            borderRadius: 16,
            marginVertical: 8,
            // marginHorizontal: 2,
            backgroundColor: 'rgba(255,255,255,0.9)',
            // #FF1801

        },
        headerStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: "center",
            color: 'black',
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