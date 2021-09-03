import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View,Text, SafeAreaView ,Image,TouchableOpacity} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import otp from './screens/OtpScreen/otp';
import ThankYouScreen from './screens/ThankYouScreen/ThankYouScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import mainscreen from './screens/MainScreen/mainscreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import JeeMain from './screens/JeeMain/JeeMain';
import JeeAdvance from './screens/JeeAdvance/JeeAdvance';
import CSAB from './screens/CSAB/CSAB';
import selection from './screens/SelectionScreen/selection';
import JossaPredictor from './screens/Predictor/Jossa';
import JeeAdvancePredictor from './screens/Predictor/JeeAdvancePredictor';
import CsabPredictor from './screens/Predictor/CsabPredictor';
import Notifications from './screens/Notification/Notification';


const Stack = createStackNavigator();
const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Select"
          component={selection}
          options={{ headerShown: false ,gestureEnabled:false}}
        />
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
        <Stack.Screen
          name="Home"
          component={mainscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JeeMain"
          component={JeeMain}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="JeeAdvance"
          component={JeeAdvance}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="CSAB"
          component={CSAB}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="JossaPredictor"
          component={JossaPredictor}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="JeeAdvancePredictor"
          component={JeeAdvancePredictor}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="CsabPredictor"
          component={CsabPredictor}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;