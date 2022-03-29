import * as React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default class CircuitsFlatlist extends React.Component {

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
        this.props.navigation.navigate('CircuitDetails', { screen: 'CircuitDetails', item: item })
    };

    renderItem = ({ item }) => {
        return (
            <View style={styles.mainTheme}>
                <TouchableOpacity onPress={() => {
                    console.log(item)
                    this.goToDetail(item)
                    this.aviso()
                }}>
                    {/* <Text style={{color: 'red'}}> */}
                    <Text style={styles.textHeader}>
                        {/* {`${item.name}`} */}
                        {`${item.circuitName} `}
                    </Text>
                    <Text style={styles.textDescription}>
                        {`${item.Location.country}`}
                    </Text>
                    <Text style={styles.textGps}>
                        {`GPS: ${item.Location.lat}, ${item.Location.long}`}
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
            borderColor: '#777777',
            borderWidth: 3,
            borderRadius: 16,
            marginVertical: 8,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255,255,255,0.8)',
            // #FF1801

        },
        textHeader: {
            fontSize: 24,
            color: 'black',
            fontWeight: 'bold',
        },
        textDescription: {
            fontSize: 20,
            color: 'black',
            textAlign: "left",
        },
        textGps: {
            fontSize: 20,
            color: 'red',
            textAlign: "right",
            padding: 10
        },
    }
)