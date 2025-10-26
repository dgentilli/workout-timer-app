import ScreenWrapper from '@/components/ui/screen-wrapper-basic';
import { StyleSheet, Text, View } from 'react-native';
import { Workout } from '../workouts/WorkoutsLogic';
import Spacer from '@/components/ui/Spacer';
import { ColorScheme, Theme, themes } from '@/themes/main';
import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';
import IconButton from '@/components/ui/IconButton';
import { WorkoutStatus } from '@/constants/workout';
import { useSecondsTimer } from '@/hooks/use-seconds-timer';
import { useState } from 'react';

interface WorkoutTimerUIProps {
  currentWorkout: Workout;
  workoutStatus: WorkoutStatus;
  currentExerciseIndex: number;
  onGoBack: () => void;
  onGoForward: () => void;
}

const createStyles = (theme: Theme, colorScheme: ColorScheme) => {
  const { typography } = theme || {};

  return StyleSheet.create({
    exerciseNameText: {
      ...typography.subheading,
      textAlign: 'center',
    },
    iconButtonBar: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 120,
    },
  });
};

const WorkoutTimerUI = ({
  currentExerciseIndex,
  currentWorkout,
  onGoBack,
  onGoForward,
}: WorkoutTimerUIProps) => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colors, spacing } = theme || {};
  const { colorScheme } = useColorScheme();
  const styles = createStyles(theme, colorScheme);
  const [workoutStatus, setWorkoutStatus] = useState<WorkoutStatus>('idle');
  // const workoutStatus = 'active'; // hard code for now
  // @ts-ignore
  const isPaused = workoutStatus !== 'active';
  const { count, progress } = useSecondsTimer({
    durationInSeconds: 30,
    status: workoutStatus,
    onComplete: () => {
      console.log('onComplete runs !!!');
    },
  });

  const currentExerciseName =
    currentWorkout?.exercises[currentExerciseIndex].name || '';

  return (
    <ScreenWrapper title={currentWorkout?.name}>
      <Spacer />
      <View
        style={{
          width: '100%',
          height: 340,
          borderWidth: 1,
          borderColor: 'pink',
        }}
      >
        <Text>{`Count: ${count}`}</Text>
        <Text>{`Progress: ${progress}`}</Text>
      </View>
      <Spacer height={spacing.xl} />
      <Text style={styles.exerciseNameText}>{currentExerciseName}</Text>
      <Spacer />
      <View style={styles.iconButtonBar}>
        <IconButton
          name='skip-previous'
          color={colors[colorScheme]['text']['secondary']}
          size={64}
          onPress={() => console.log('skip previous Pressed!')}
          accessibilityLabel='Back to Previous Exercise'
        />
        <IconButton
          name={isPaused ? 'play-arrow' : 'pause'}
          color={colors[colorScheme]['text']['secondary']}
          size={64}
          onPress={() =>
            setWorkoutStatus((prev) =>
              prev === 'active' ? 'paused' : 'active'
            )
          }
          accessibilityLabel={isPaused ? 'Pause Exercise' : 'Start Exercise'}
        />
        <IconButton
          name='skip-next'
          color={colors[colorScheme]['text']['secondary']}
          size={64}
          onPress={() => console.log('skip-next Pressed!')}
          accessibilityLabel='Skip to Next Exercise'
        />
      </View>
    </ScreenWrapper>
  );
};

export default WorkoutTimerUI;
