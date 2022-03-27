import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from './Calendar';
import Circuits from './Circuits';
import Drivers from './Drivers';
import Home from './Home';
import Login from './Login';
import DriverDetails from './DriverDetails';
import CircuitDetails from './CircuitDetails';
import CalendarDetails from './CalendarDetails';

// Reference:
// https://reactnavigation.org/docs/hello-react-navigation/
// https://reactnavigation.org/docs/getting-started/
// Package installed:
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context
// IMPORTANT: remember to restart 'npm start' after installing new libs

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                {/* <Stack.Screen name="Login" component={Login} /> */}
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Drivers" component={Drivers} options={{headerShown: false}} />
                <Stack.Screen name="Circuits" component={Circuits} options={{headerShown: false}} />
                <Stack.Screen name="Calendar" component={Calendar} options={{headerShown: false}} />
                <Stack.Screen name="DriverDetails" component={DriverDetails}/>
                <Stack.Screen name="CircuitDetails" component={CircuitDetails}/>
                <Stack.Screen name="CalendarDetails" component={CalendarDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;