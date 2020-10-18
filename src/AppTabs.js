import React, { useContext } from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Center from './Center'
import Drawer from './Drawer'
import DrawerScreen from './Drawer'

const Tabs = createBottomTabNavigator()

const Search = () => (
  <Center>
    <Text>search</Text>
  </Center>
)

const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Drawer') {
            iconName = 'home'
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'Search') {
            iconName = 'search';
            return <EvilIcons name={iconName} size={size} color={color}  />
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name={'Drawer'} component={DrawerScreen} />
      <Tabs.Screen name={'Search'} component={Search} />
    </Tabs.Navigator>
  )
}

export default AppTabs