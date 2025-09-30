import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BotomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
