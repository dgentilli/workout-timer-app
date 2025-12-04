import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BotomTabNavigator';
import { SheetProvider } from 'react-native-actions-sheet';
import './constants/sheets.tsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ColorSchemeProvider } from './contexts/ColorSchemeContext';

export default function App() {
  return (
    <ColorSchemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <SheetProvider>
            <BottomTabNavigator />
          </SheetProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ColorSchemeProvider>
  );
}
