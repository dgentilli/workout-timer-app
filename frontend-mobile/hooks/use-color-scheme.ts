import { useState, useEffect } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ColorScheme = 'light' | 'dark'; // Add more as needed

const COLOR_SCHEME_KEY = 'user_color_scheme';

export const useColorScheme = () => {
  const systemColorScheme = useSystemColorScheme();
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>('light');
  const [isLoading, setIsLoading] = useState(true);

  // Load saved preference or use system default
  useEffect(() => {
    const loadColorScheme = async () => {
      try {
        const saved = await AsyncStorage.getItem(COLOR_SCHEME_KEY);
        if (saved && ['light', 'dark'].includes(saved)) {
          setColorSchemeState(saved as ColorScheme);
        } else {
          // Use system preference if no saved preference
          setColorSchemeState(systemColorScheme === 'dark' ? 'dark' : 'light');
        }
      } catch (error) {
        console.error('Failed to load color scheme:', error);
        setColorSchemeState(systemColorScheme === 'dark' ? 'dark' : 'light');
      } finally {
        setIsLoading(false);
      }
    };

    loadColorScheme();
  }, [systemColorScheme]);

  // Setter that persists to storage
  const setColorScheme = async (newColorScheme: ColorScheme) => {
    try {
      setColorSchemeState(newColorScheme);
      await AsyncStorage.setItem(COLOR_SCHEME_KEY, newColorScheme);
    } catch (error) {
      console.error('Failed to save color scheme:', error);
    }
  };

  return {
    colorScheme,
    setColorScheme,
    isLoading,
  };
};
