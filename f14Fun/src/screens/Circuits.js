import * as React from 'react';
import { Button, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AnimButtonNavigate from '../components/AnimButtonNavigate';
import CircuitsFlatlist from '../components/CircuitsFlatlist';

const backgroundUri = { uri: "https://bobslocks.co.uk/wp-content/uploads/2020/10/F1-Track-collection-Image-scaled.jpg" };
const screenSizeHeight = Dimensions.get('window').height
const screenSizeWidth = Dimensions.get('window').width
const CIRCUITLIST = [
    {
        circuitId: "albert_park",
        url: "http:\/\/en.wikipedia.org\/wiki\/Melbourne_Grand_Prix_Circuit",
        circuitName: "Albert Park Grand Prix Circuit",
        Location: {
            lat: "-37.8497",
            long: "144.968",
            locality: "Melbourne",
            country: "Australia"
        }
    },
    {
        circuitId: "americas",
        url: "http:\/\/en.wikipedia.org\/wiki\/Circuit_of_the_Americas",
        circuitName: "Circuit of the Americas",
        Location: {
            lat: "30.1328",
            long: "-97.6411",
            locality: "Austin",
            country: "USA"
        }
    },
    {
        circuitId: "bahrain",
        url: "http:\/\/en.wikipedia.org\/wiki\/Bahrain_International_Circuit",
        circuitName: "Bahrain International Circuit",
        Location: {
            lat: "26.0325",
            long: "50.5106",
            locality: "Sakhir",
            country: "Bahrain"
        }
    },
    {
        circuitId: "BAK",
        url: "http:\/\/en.wikipedia.org\/wiki\/Baku_City_Circuit",
        circuitName: "Baku City Circuit",
        Location: {
            lat: "40.3725",
            long: "49.8533",
            locality: "Baku",
            country: "Azerbaijan"
        }
    },
    {
        circuitId: "catalunya",
        url: "http:\/\/en.wikipedia.org\/wiki\/Circuit_de_Barcelona-Catalunya",
        circuitName: "Circuit de Barcelona-Catalunya",
        Location: {
            lat: "41.57",
            long: "2.26111",
            locality: "Montmeló",
            country: "Spain"
        }
    },
    {
        circuitId: "hungaroring",
        url: "http:\/\/en.wikipedia.org\/wiki\/Hungaroring",
        circuitName: "Hungaroring",
        Location: {
            lat: "47.5789",
            long: "19.2486",
            locality: "Budapest",
            country: "Hungary"
        }
    },
    {
        circuitId: "imola",
        url: "http:\/\/en.wikipedia.org\/wiki\/Autodromo_Enzo_e_Dino_Ferrari",
        circuitName: "Autodromo Enzo e Dino Ferrari",
        Location: {
            lat: "44.3439",
            long: "11.7167",
            locality: "Imola",
            country: "Italy"
        }
    },
    {
        circuitId: "interlagos",
        url: "http:\/\/en.wikipedia.org\/wiki\/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace",
        circuitName: "Autódromo José Carlos Pace",
        Location: {
            lat: "-23.7036",
            long: "-46.6997",
            locality: "São Paulo",
            country: "Brazil"
        }
    },
    {
        circuitId: "jeddah",
        url: "http:\/\/en.wikipedia.org\/wiki\/Jeddah_Street_Circuit",
        circuitName: "Jeddah Corniche Circuit",
        Location: {
            lat: "21.6319",
            long: "39.1044",
            locality: "Jeddah",
            country: "Saudi Arabia"
        }
    },
    {
        circuitId: "marina_bay",
        url: "http:\/\/en.wikipedia.org\/wiki\/Marina_Bay_Street_Circuit",
        circuitName: "Marina Bay Street Circuit",
        Location: {
            lat: "1.2914",
            long: "103.864",
            locality: "Marina Bay",
            country: "Singapore"
        }
    },
    {
        circuitId: "miami",
        url: "http:\/\/en.wikipedia.org\/wiki\/Miami_International_Autodrome",
        circuitName: "Miami International Autodrome",
        Location: {
            lat: "25.9581",
            long: "-80.2389",
            locality: "Miami",
            country: "United States"
        }
    },
    {
        circuitId: "monaco",
        url: "http:\/\/en.wikipedia.org\/wiki\/Circuit_de_Monaco",
        circuitName: "Circuit de Monaco",
        Location: {
            lat: "43.7347",
            long: "7.42056",
            locality: "Monte-Carlo",
            country: "Monaco"
        }
    },
    {
        circuitId: "monza",
        url: "http:\/\/en.wikipedia.org\/wiki\/Autodromo_Nazionale_Monza",
        circuitName: "Autodromo Nazionale di Monza",
        Location: {
            lat: "45.6156",
            long: "9.28111",
            locality: "Monza",
            country: "Italy"
        }
    },
    {
        circuitId: "red_bull_ring",
        url: "http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Ring",
        circuitName: "Red Bull Ring",
        Location: {
            lat: "47.2197",
            long: "14.7647",
            locality: "Spielberg",
            country: "Austria"
        }
    },
    {
        circuitId: "ricard",
        url: "http:\/\/en.wikipedia.org\/wiki\/Paul_Ricard_Circuit",
        circuitName: "Circuit Paul Ricard",
        Location: {
            lat: "43.2506",
            long: "5.79167",
            locality: "Le Castellet",
            country: "France"
        }
    },
    {
        circuitId: "rodriguez",
        url: "http:\/\/en.wikipedia.org\/wiki\/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez",
        circuitName: "Autódromo Hermanos Rodríguez",
        Location: {
            lat: "19.4042",
            long: "-99.0907",
            locality: "Mexico City",
            country: "Mexico"
        }
    },
    {
        circuitId: "silverstone",
        url: "http:\/\/en.wikipedia.org\/wiki\/Silverstone_Circuit",
        circuitName: "Silverstone Circuit",
        Location: {
            lat: "52.0786",
            long: "-1.01694",
            locality: "Silverstone",
            country: "UK"
        }
    },
    {
        circuitId: "spa",
        url: "http:\/\/en.wikipedia.org\/wiki\/Circuit_de_Spa-Francorchamps",
        circuitName: "Circuit de Spa-Francorchamps",
        Location: {
            lat: "50.4372",
            long: "5.97139",
            locality: "Spa",
            country: "Belgium"
        }
    },
    {
        circuitId: "suzuka",
        url: "http:\/\/en.wikipedia.org\/wiki\/Suzuka_Circuit",
        circuitName: "Suzuka Circuit",
        Location: {
            lat: "34.8431",
            long: "136.541",
            locality: "Suzuka",
            country: "Japan"
        }
    },
    {
        circuitId: "villeneuve",
        url: "http:\/\/en.wikipedia.org\/wiki\/Circuit_Gilles_Villeneuve",
        circuitName: "Circuit Gilles Villeneuve",
        Location: {
            lat: "45.5",
            long: "-73.5228",
            locality: "Montreal",
            country: "Canada"
        }
    },
    {
        circuitId: "yas_marina",
        url: "http:\/\/en.wikipedia.org\/wiki\/Yas_Marina_Circuit",
        circuitName: "Yas Marina Circuit",
        Location: {
            lat: "24.4672",
            long: "54.6031",
            locality: "Abu Dhabi",
            country: "UAE"
        }
    },
    {
        circuitId: "zandvoort",
        url: "http:\/\/en.wikipedia.org\/wiki\/Circuit_Zandvoort",
        circuitName: "Circuit Park Zandvoort",
        Location: {
            lat: "52.3888",
            long: "4.54092",
            locality: "Zandvoort",
            country: "Netherlands"
        }
    }
]


export default class Circuits extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Circuits'
        }
    }

    // goToHome = () => {
    //     this.props.navigation.navigate('Home', { screen: 'Home' });
    // };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={backgroundUri}
                    resizeMode="cover"
                    style={styles.imageBackground}>
                    <View style={styles.mainView}>
                        <View style={styles.titleView}>
                            {/* <Button
                                title="Back to Home"
                                onPress={() => this.goToHome()}
                            /> */}
                            <AnimButtonNavigate title=" Back to Home " screen="Home" navigation={this.props.navigation} />
                        </View>
                        <View style={styles.textInputView}>
                            <CircuitsFlatlist DATA={CIRCUITLIST} navigation={this.props.navigation} />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "space-between",
        },
        mainView: {
            height: '100%',
        },
        titleView: {
            flex: 0.1,
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        textInputView: {
            flex: 0.8,
        },
        imageBackground: {
            height: screenSizeHeight,
            // width: screenSizeWidth,
            padding: 16,
        },
    }
)
