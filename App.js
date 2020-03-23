import React from 'react';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Principal from './screen/Principal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Datos from './screen/Datos';


/*function loginView({ navigation }) {
  return (
    <Login></Login>
  );
}

function registroView() {
  return (
      <Registro></Registro>
  );
}*/

const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name='Datos' component={Datos} />
        <Stack.Screen name='Principal' component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
