import { View, Text } from 'react-native'
import React from 'react'
import CreatePin from '../screens/CreatePin'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const CreatePinRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CreatePin"
                component={CreatePin}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default CreatePinRouter