import ListItem from '@/components/ui/ListItem';
import ScreenWrapper from '@/components/ui/screen-wrapper-basic';
import { FlatList } from 'react-native';
import { SettingsListItem } from './SettingsLogic';
interface SettingsUIProps {
  listConfig: SettingsListItem[];
}

const SettingsUI = ({ listConfig }: SettingsUIProps) => {
  return (
    <ScreenWrapper title='Settings'>
      <FlatList
        data={listConfig}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem {...item} />}
      />
    </ScreenWrapper>
  );
};

export default SettingsUI;
