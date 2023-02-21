import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './contexts/auth';

const Stack = createStackNavigator();
// Criação da stack de navegação e também do Contexto do App;
function App() {
  return (
    <NavigationContainer> 
      <AuthProvider>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;