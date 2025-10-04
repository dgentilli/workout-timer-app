import { useCallback } from 'react';
import ActionSheetWrapper from './action-sheet-wrapper';
import { SheetManager } from 'react-native-actions-sheet';
import Button from './button';

const UserSettingsSheet = () => {
  const closeSheet = useCallback(() => {
    SheetManager.hide('settings-appearance');
  }, []);

  return (
    <ActionSheetWrapper sheetId={'user-settings'} title='Settings'>
      <Button title='Logout' onPress={closeSheet} />
    </ActionSheetWrapper>
  );
};

export default UserSettingsSheet;
