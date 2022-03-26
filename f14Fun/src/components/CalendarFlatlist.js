import * as React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default class CalendarFlatlist extends React.Component {

    constructor(props) {
        super(props);
        //Enable logs (log, warn)
        // this.aviso();
    }

    aviso = () => {
        console.log("Carreguei o aviso!")
        // console.warn("Ola Aviso!!")

    }

    goToDetail = (item) => {
        this.props.navigation.navigate('CalendarDetails', { screen: 'CalendarDetails', item: item })
    };

    renderItem = ({ item }) => {
        return (
            <View style={styles.mainTheme}>
                <TouchableOpacity onPress={() => {
                    this.goToDetail(item)
                    this.aviso()
                }}>
                    {/* <Text style={{color: 'red'}}> */}
                    <Text style={styles.textHeader}>
                        {/* {`${item.name}`} */}
                        {`${item.date}`}
                    </Text>
                    <Text style={styles.textDescription}>
                        {`${item.Circuit.circuitName} `}
                    </Text>
                    <Text style={styles.priceDescription}>
                        {`Time: ${item.time}`}
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }

    render() {
        const { DATA } = this.props;
        return (
            <View>
                <FlatList data={DATA} renderItem={item => this.renderItem(item)} />
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        mainTheme: {
            backgroundColor: 'aquamarine',
            height: 90,
            justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: 'darkgray',
            margin: 4,
            borderBottomColor: 'black',
            borderWidth: 2,

        },
        textHeader: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        textDescription: {
            fontSize: 16,
            color: 'black',
            textAlign: "left",
        },
        priceDescription: {
            fontSize: 16,
            color: 'red',
            textAlign: "right",
        },
    }
)
