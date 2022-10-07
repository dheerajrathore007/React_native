import * as React from 'react';
 import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Detail from './pages/Detail';
import Verify from './pages/Verify';
import City from './pages/City.js';


function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  const Stack = createNativeStackNavigator();
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Verify" component={Verify}/>
        <Stack.Screen name="City" component={City}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default App;


