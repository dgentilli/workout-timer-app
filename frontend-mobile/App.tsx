import { NavigationContainer } from '@react-navigation/native';
import { SheetProvider } from 'react-native-actions-sheet';
import './constants/sheets.tsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ColorSchemeProvider } from './contexts/ColorSchemeContext';
import Navigation from './navigation/index';

export default function App() {
  return (
    <ColorSchemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <SheetProvider>
            <Navigation />
          </SheetProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ColorSchemeProvider>
  );
}
