import React, { useContext } from 'react'
import { Text, TouchableOpacity, FlatList, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Center from './Center'
import { AuthContext } from './AuthProvider'
import faker from 'faker'

const Stack = createStackNavigator()

const Feed = ({ navigation }) => {
  return (
    <Center>
      <FlatList
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <Button
            title={item}
            onPress={() => navigation.navigate('Product', {
              name: item
            })}
          />
        )}
        keyExtractor={(product, index) => product + index}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  )
}

const Product = ({ route }) => {
  return (
    <Center>
      <Text>{ route.params.name }</Text>
    </Center>
  )
}

const HomeStack = () => {
  const { logout } = useContext(AuthContext)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Feed'}
        component={Feed}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={logout}
              style={{ marginRight: 15 }}
            >
              <Text>logout</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        options={({ route}) => ({
          headerTitle: route.params.name
        })}
        name={'Product'}
        component={Product}
      />
    </Stack.Navigator>
  )
}

export default HomeStack