import React, { useContext } from 'react'
import { Button, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthContext } from './AuthProvider'
import Center from './Center'

const Stack = createStackNavigator()

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext)
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button title={'log me in'} onPress={login} />
      <Button title={'go to register'} onPress={() => {
        navigation.navigate('Register')
      }} />
    </Center>
  )
}

const Register = ({ navigation }) => (
  <Center>
    <Text>I am a register screen</Text>
    <Button title={'go to login'} onPress={() => {
      navigation.navigate('Login')
    }} />
  </Center>
)

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Register'} component={Register} />
    </Stack.Navigator>
  )
}

export default AuthStack