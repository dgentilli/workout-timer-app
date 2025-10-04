import AppAppearanceSheet from '@/components/ui/AppAppearanceSheet';
import { registerSheet } from 'react-native-actions-sheet';

registerSheet('settings-appearance', AppAppearanceSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'settings-appearance': any;
  }
}

export {};
