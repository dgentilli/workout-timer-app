import { StyleSheet, View } from 'react-native';
import IconButton from './IconButton';
import { themes } from '@/themes/main';
import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { WorkoutStatus } from '@/constants/workout';

interface PlayerControlBarProps {
  status: WorkoutStatus;
  togglePlayPause: () => void;
}

const createStyles = () => {
  return StyleSheet.create({
    iconButtonBar: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 120,
    },
  });
};

const PlayerControlBar = ({
  status,
  togglePlayPause,
}: PlayerControlBarProps) => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colors } = theme || {};
  const { colorScheme } = useColorScheme();
  const isActive = status === 'active';

  const styles = createStyles();
  return (
    <View style={styles.iconButtonBar}>
      <IconButton
        name='skip-previous'
        color={colors[colorScheme]['text']['secondary']}
        size={64}
        onPress={() => console.log('skip previous Pressed!')}
        accessibilityLabel='Back to Previous Exercise'
      />
      <IconButton
        name={isActive ? 'pause' : 'play-arrow'}
        color={colors[colorScheme]['text']['secondary']}
        size={64}
        onPress={togglePlayPause}
        accessibilityLabel={isActive ? 'Pause Exercise' : 'Start Exercise'}
      />
      <IconButton
        name='skip-next'
        color={colors[colorScheme]['text']['secondary']}
        size={64}
        onPress={() => console.log('skip-next Pressed!')}
        accessibilityLabel='Skip to Next Exercise'
      />
    </View>
  );
};

export default PlayerControlBar;
