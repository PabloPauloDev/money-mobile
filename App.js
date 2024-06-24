import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/screens/home/home.jsx';
import CadDespesa from './src/screens/cad-desp/cad-desp.jsx'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='CadDespesa' component={CadDespesa} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}