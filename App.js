import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import otp from './screens/OtpScreen/otp';
import ThankYouScreen from './screens/ThankYouScreen/ThankYouScreen';
import RegistrationScreen from './screens/RegistrationScreen';

const Stack = createStackNavigator();
const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Thank"
          component={ThankYouScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;