import { View, Text, Platform, StatusBar } from 'react-native'
import React from 'react'
import ValidatePin from '../screens/ValidatePin';
import HomeTabs from '../components/Tabs';
import Diary from '../screens/Diary';
import Edit from '../screens/Edit';
import EditPin from '../screens/EditPin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const HomeRouter = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    marginTop:
                        Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
                },
            }}
        >
            <Stack.Screen
                name="ValidatePin"
                component={ValidatePin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Diary"
                component={Diary}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Edit"
                component={Edit}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EditPin"
                component={EditPin}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default HomeRouter