import AppAppearanceSheet from '@/components/ui/AppAppearanceSheet';
import UserSettingsSheet from '@/components/ui/UserSettingsSheet';
import { registerSheet } from 'react-native-actions-sheet';

registerSheet('settings-appearance', AppAppearanceSheet);
registerSheet('user-settings', UserSettingsSheet);
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'settings-appearance': any;
    'user-settings': any;
  }
}

export {};
