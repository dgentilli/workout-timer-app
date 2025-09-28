import { MaterialIcons } from '@expo/vector-icons';

import Button from '@/components/ui/button';
import ScreenWrapper from '@/components/ui/screen-wrapper-basic';
import StatusDisplay from '@/components/ui/status-display';
import { themes } from '@/themes/main';
import { useColorScheme } from '@/hooks/use-color-scheme';

const WorkoutsUI = () => {
  const buildVariant = 'main';
  const theme = themes[buildVariant];
  const { colorScheme } = useColorScheme();

  const { colors } = theme;
  return (
    <ScreenWrapper title='Workouts'>
      <StatusDisplay
        title='Nothing to Display'
        subtitle='Get Started by Creating a Workout'
        button={
          <Button
            title='Create Workout'
            onPress={() => console.log('pressed')}
          />
        }
        icon={
          <MaterialIcons
            name='directions-run'
            size={76}
            color={colors[colorScheme]['accent']}
          />
        }
      />
    </ScreenWrapper>
  );
};

export default WorkoutsUI;
