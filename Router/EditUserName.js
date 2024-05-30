import { View, Text } from 'react-native'
import React from 'react'
import EditUsername from '../screens/EditUsername'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const EditUserName = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="EditUsername"
                component={EditUsername}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default EditUserName