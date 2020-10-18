import React, { useContext } from 'react'
import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Center from './Center'
import HomeStack from './HomeStack'

const Drawer = createDrawerNavigator()

const Profile = () => (
  <Center>
    <Text>Profile</Text>
  </Center>
)

const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRoute={'Home'}>
      <Drawer.Screen name={'Home'} component={HomeStack} />
      <Drawer.Screen name={'Profile'} component={Profile} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen