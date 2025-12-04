import { useCallback } from 'react';
import ActionSheetWrapper from './action-sheet-wrapper';
import ListItem from './ListItem';
import { SheetManager } from 'react-native-actions-sheet';
import {
  ColorSchemePreference,
  useColorScheme,
} from '@/contexts/ColorSchemeContext';

const AppAppearanceSheet = () => {
  const { preference, setPreference } = useColorScheme();

  const closeSheet = useCallback(
    (colorSchemePreference: ColorSchemePreference) => {
      SheetManager.hide('settings-appearance');
      setPreference(colorSchemePreference);
    },
    [setPreference]
  );

  return (
    <ActionSheetWrapper sheetId={'settings-appearance'} title='App Appearance'>
      <ListItem title='Light' onPressWrapper={() => closeSheet('light')} />
      <ListItem title='Dark' onPressWrapper={() => closeSheet('dark')} />
      <ListItem title='System' onPressWrapper={() => closeSheet('system')} />
    </ActionSheetWrapper>
  );
};

export default AppAppearanceSheet;
