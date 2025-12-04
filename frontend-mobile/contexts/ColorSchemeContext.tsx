// context/ColorSchemeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const COLOR_SCHEME_KEY = 'user_color_scheme';

export type ColorSchemePreference = 'light' | 'dark' | 'system';
export type ResolvedColorScheme = 'light' | 'dark';

interface ColorSchemeContextType {
  colorScheme: ResolvedColorScheme;
  preference: ColorSchemePreference;
  setPreference: (preference: ColorSchemePreference) => Promise<void>;
  isLoading: boolean;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(
  undefined
);

interface ColorSchemeProviderProps {
  children: ReactNode;
}

export const ColorSchemeProvider = ({ children }: ColorSchemeProviderProps) => {
  const systemColorScheme = useSystemColorScheme();
  const [preference, setPreferenceState] =
    useState<ColorSchemePreference>('system');
  const [isLoading, setIsLoading] = useState(true);

  // Load saved preference on mount
  useEffect(() => {
    const loadPreference = async () => {
      try {
        const saved = await AsyncStorage.getItem(COLOR_SCHEME_KEY);
        if (saved && ['light', 'dark', 'system'].includes(saved)) {
          setPreferenceState(saved as ColorSchemePreference);
        }
      } catch (error) {
        console.error('Failed to load color scheme preference:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPreference();
  }, []);

  // Resolve preference to actual color scheme
  const colorScheme: ResolvedColorScheme =
    preference === 'system' ? systemColorScheme || 'light' : preference;

  // Update preference and persist
  const setPreference = async (newPreference: ColorSchemePreference) => {
    try {
      setPreferenceState(newPreference);
      await AsyncStorage.setItem(COLOR_SCHEME_KEY, newPreference);
    } catch (error) {
      console.error('Failed to save color scheme preference:', error);
    }
  };

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, preference, setPreference, isLoading }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

// Hook for components to use
export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext);
  if (context === undefined) {
    throw new Error('useColorScheme must be used within ColorSchemeProvider');
  }
  return context;
};
