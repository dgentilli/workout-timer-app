import ListItem from '@/components/ui/ListItem';
import ScreenWrapper from '@/components/ui/screen-wrapper-basic';

const SettingsUI = () => {
  return (
    <ScreenWrapper title='Settings'>
      <ListItem title='User: Dave' />
      <ListItem title='Appearance' />
    </ScreenWrapper>
  );
};

export default SettingsUI;
