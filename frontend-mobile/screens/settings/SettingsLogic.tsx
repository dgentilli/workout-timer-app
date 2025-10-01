// settings/useSettingsLogic.ts
import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { themes } from '@/themes/main';
import { MaterialIcons } from '@expo/vector-icons';

export interface SettingsListItem {
  id: string;
  title: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onPressWrapper?: () => void;
  onPressRight?: () => void;
}

const useSettingsLogic = () => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colorScheme } = useColorScheme();
  const iconColor = theme.colors[colorScheme].text.secondary;
  const listConfig: SettingsListItem[] = [
    {
      id: 'test',
      title: 'Dave',
      rightElement: (
        <MaterialIcons name='arrow-right' size={32} color={iconColor} />
      ),
      onPressWrapper: () => {
        console.log('Right Element!');
      },
    },
    {
      id: 'appearance',
      title: 'Appearance',
      rightElement: (
        <MaterialIcons name='arrow-right' size={32} color={iconColor} />
      ),
      onPressWrapper: () => {
        console.log('Change theme!');
      },
    },
  ];

  return { listConfig };
};

export default useSettingsLogic;
