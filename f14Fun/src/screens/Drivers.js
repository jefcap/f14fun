import * as React from 'react';
import { Button, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AnimButtonNavigate from '../components/AnimButtonNavigate';
import DriversFlatlist from '../components/DriversFlatlist';
const screenSizeHeight = Dimensions.get('window').height
const screenSizeWidth = Dimensions.get('window').width

const backgroundUri = { uri: "https://www.sportsnet.ca/wp-content/uploads/2022/03/F1-1040x572.jpg" };
const DRIVERSLIST = [
    {
        driverId: "albon",
        permanentNumber: "23",
        code: "ALB",
        url: "http:\/\/en.wikipedia.org\/wiki\/Alexander_Albon",
        givenName: "Alexander",
        familyName: "Albon",
        dateOfBirth: "1996-03-23",
        nationality: "Thai"
    },
    {
        driverId: "alonso",
        permanentNumber: "14",
        code: "ALO",
        url: "http:\/\/en.wikipedia.org\/wiki\/Fernando_Alonso",
        givenName: "Fernando",
        familyName: "Alonso",
        dateOfBirth: "1981-07-29",
        nationality: "Spanish"
    },
    {
        driverId: "bottas",
        permanentNumber: "77",
        code: "BOT",
        url: "http:\/\/en.wikipedia.org\/wiki\/Valtteri_Bottas",
        givenName: "Valtteri",
        familyName: "Bottas",
        dateOfBirth: "1989-08-28",
        nationality: "Finnish"
    },
    {
        driverId: "gasly",
        permanentNumber: "10",
        code: "GAS",
        url: "http:\/\/en.wikipedia.org\/wiki\/Pierre_Gasly",
        givenName: "Pierre",
        familyName: "Gasly",
        dateOfBirth: "1996-02-07",
        nationality: "French"
    },
    {
        driverId: "hamilton",
        permanentNumber: "44",
        code: "HAM",
        url: "http:\/\/en.wikipedia.org\/wiki\/Lewis_Hamilton",
        givenName: "Lewis",
        familyName: "Hamilton",
        dateOfBirth: "1985-01-07",
        nationality: "British"
    },
    {
        driverId: "hulkenberg",
        permanentNumber: "27",
        code: "HUL",
        url: "http:\/\/en.wikipedia.org\/wiki\/Nico_H%C3%BClkenberg",
        givenName: "Nico",
        familyName: "Hülkenberg",
        dateOfBirth: "1987-08-19",
        nationality: "German"
    },
    {
        driverId: "latifi",
        permanentNumber: "6",
        code: "LAT",
        url: "http:\/\/en.wikipedia.org\/wiki\/Nicholas_Latifi",
        givenName: "Nicholas",
        familyName: "Latifi",
        dateOfBirth: "1995-06-29",
        nationality: "Canadian"
    },
    {
        driverId: "leclerc",
        permanentNumber: "16",
        code: "LEC",
        url: "http:\/\/en.wikipedia.org\/wiki\/Charles_Leclerc",
        givenName: "Charles",
        familyName: "Leclerc",
        dateOfBirth: "1997-10-16",
        nationality: "Monegasque"
    },
    {
        driverId: "kevin_magnussen",
        permanentNumber: "20",
        code: "MAG",
        url: "http:\/\/en.wikipedia.org\/wiki\/Kevin_Magnussen",
        givenName: "Kevin",
        familyName: "Magnussen",
        dateOfBirth: "1992-10-05",
        nationality: "Danish"
    },
    {
        driverId: "norris",
        permanentNumber: "4",
        code: "NOR",
        url: "http:\/\/en.wikipedia.org\/wiki\/Lando_Norris",
        givenName: "Lando",
        familyName: "Norris",
        dateOfBirth: "1999-11-13",
        nationality: "British"
    },
    {
        driverId: "ocon",
        permanentNumber: "31",
        code: "OCO",
        url: "http:\/\/en.wikipedia.org\/wiki\/Esteban_Ocon",
        givenName: "Esteban",
        familyName: "Ocon",
        dateOfBirth: "1996-09-17",
        nationality: "French"
    },
    {
        driverId: "perez",
        permanentNumber: "11",
        code: "PER",
        url: "http:\/\/en.wikipedia.org\/wiki\/Sergio_P%C3%A9rez",
        givenName: "Sergio",
        familyName: "Pérez",
        dateOfBirth: "1990-01-26",
        nationality: "Mexican"
    },
    {
        driverId: "ricciardo",
        permanentNumber: "3",
        code: "RIC",
        url: "http:\/\/en.wikipedia.org\/wiki\/Daniel_Ricciardo",
        givenName: "Daniel",
        familyName: "Ricciardo",
        dateOfBirth: "1989-07-01",
        nationality: "Australian"
    },
    {
        driverId: "russell",
        permanentNumber: "63",
        code: "RUS",
        url: "http:\/\/en.wikipedia.org\/wiki\/George_Russell_%28racing_driver%29",
        givenName: "George",
        familyName: "Russell",
        dateOfBirth: "1998-02-15",
        nationality: "British"
    },
    {
        driverId: "sainz",
        permanentNumber: "55",
        code: "SAI",
        url: "http:\/\/en.wikipedia.org\/wiki\/Carlos_Sainz_Jr.",
        givenName: "Carlos",
        familyName: "Sainz",
        dateOfBirth: "1994-09-01",
        nationality: "Spanish"
    },
    {
        driverId: "mick_schumacher",
        permanentNumber: "47",
        code: "MSC",
        url: "http:\/\/en.wikipedia.org\/wiki\/Mick_Schumacher",
        givenName: "Mick",
        familyName: "Schumacher",
        dateOfBirth: "1999-03-22",
        nationality: "German"
    },
    {
        driverId: "stroll",
        permanentNumber: "18",
        code: "STR",
        url: "http:\/\/en.wikipedia.org\/wiki\/Lance_Stroll",
        givenName: "Lance",
        familyName: "Stroll",
        dateOfBirth: "1998-10-29",
        nationality: "Canadian"
    },
    {
        driverId: "tsunoda",
        permanentNumber: "22",
        code: "TSU",
        url: "http:\/\/en.wikipedia.org\/wiki\/Yuki_Tsunoda",
        givenName: "Yuki",
        familyName: "Tsunoda",
        dateOfBirth: "2000-05-11",
        nationality: "Japanese"
    },
    {
        driverId: "max_verstappen",
        permanentNumber: "33",
        code: "VER",
        url: "http:\/\/en.wikipedia.org\/wiki\/Max_Verstappen",
        givenName: "Max",
        familyName: "Verstappen",
        dateOfBirth: "1997-09-30",
        nationality: "Dutch"
    },
    {
        driverId: "zhou",
        permanentNumber: "24",
        code: "ZHO",
        url: "http:\/\/en.wikipedia.org\/wiki\/Guanyu_Zhou",
        givenName: "Guanyu",
        familyName: "Zhou",
        dateOfBirth: "1999-05-30",
        nationality: "Chinese"
    }
]


export default class Drivers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Drivers'
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
                            <DriversFlatlist DATA={DRIVERSLIST} navigation={this.props.navigation} />
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