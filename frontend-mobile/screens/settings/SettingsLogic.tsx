// settings/useSettingsLogic.ts
import { ListItemProps } from '@/components/ui/ListItem';
import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { themes } from '@/themes/main';
import { MaterialIcons } from '@expo/vector-icons';
import { SheetManager } from 'react-native-actions-sheet';

export interface SettingsListItem extends ListItemProps {
  id: string;
}

const useSettingsLogic = () => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();
  const iconColor = theme.colors[colorScheme].text.secondary;
  const listConfig: SettingsListItem[] = [
    {
      id: 'user-settings',
      title: 'Dave',
      rightElement: (
        <MaterialIcons name='arrow-right' size={32} color={iconColor} />
      ),
      onPressWrapper: () => {
        SheetManager.show('user-settings');
      },
    },
    {
      id: 'appearance',
      title: 'Appearance',
      rightElement: (
        <MaterialIcons name='arrow-right' size={32} color={iconColor} />
      ),
      onPressWrapper: () => {
        SheetManager.show('settings-appearance');
      },
    },
  ];

  return { listConfig };
};

export default useSettingsLogic;
