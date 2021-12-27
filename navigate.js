import React from 'react';
import StartPage from './screensAuth/StartPage';
import LogIn from './screensAuth/LogIn';
import SignUp from './screensAuth/SignUp';
import SignUpNext from './screensAuth/SignUpNext';
// import PersonalArea from './screens/PersonalArea';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Start"
                    component={StartPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="LogIn"
                    component={LogIn}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SignUpNext"
                    component={SignUpNext}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

