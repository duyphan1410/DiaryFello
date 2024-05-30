import { View, Text } from 'react-native'
import React from 'react'
import Controller from './screens/Controller'

import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import EditUsername from './screens/EditUsername'

const App = () => {
  return (
    <Controller />
    // <PaperProvider>
    //   <EditUsername />
    // </PaperProvider>
  )
}

export default App