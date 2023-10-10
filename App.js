import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import RegisterPage from './src/pages/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='RegisterPage' component={RegisterPage}/>
        <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage}/>
        <Stack.Screen name='HomePage' component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}