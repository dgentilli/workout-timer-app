import ScreenWrapper from '@/components/ui/screen-wrapper-basic';
import { StyleSheet, Text, View } from 'react-native';
import { Workout, WorkoutStatus } from '@/constants/workoutTypes';
import Spacer from '@/components/ui/Spacer';
import { ColorScheme, Theme, themes } from '@/themes/main';
import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useSecondsTimer } from '@/hooks/use-seconds-timer';
import { useEffect } from 'react';
import PlayerControlBar from '@/components/ui/PlayerControlBar';
import CircularProgress from '@/components/ui/ProgressCircular';
interface WorkoutTimerUIProps {
  currentWorkout: Workout;
  workoutStatus: WorkoutStatus;
  currentExerciseIndex: number;
  onGoBack: () => void;
  onGoForward: () => void;
  onStartExercise: () => void;
  togglePlayPause: () => void;
  onRest: () => void;
}

const createStyles = (theme: Theme, colorScheme: ColorScheme) => {
  const { typography, colors } = theme || {};

  return StyleSheet.create({
    exerciseNameText: {
      ...typography.heading,
      color: colors[colorScheme]['text']['primary'],
      textAlign: 'center',
    },
    timerText: {
      ...typography.subheading,
      color: colors[colorScheme]['text']['secondary'],
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
  workoutStatus,
  onGoBack,
  onGoForward,
  onStartExercise,
  togglePlayPause,
  onRest,
}: WorkoutTimerUIProps) => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { restInterval, exercises } = currentWorkout;
  const { spacing } = theme || {};
  const { colorScheme } = useColorScheme();
  const styles = createStyles(theme, colorScheme);
  // @ts-ignore
  const { count, progress } = useSecondsTimer({
    durationInSeconds:
      workoutStatus === 'rest'
        ? restInterval
        : exercises[currentExerciseIndex]?.duration,
    status: workoutStatus,
    onComplete: () => {
      console.log('onComplete runs !!!');
    },
  });

  const getScreenTitle = () => {
    if (workoutStatus === 'rest') return 'Rest';

    return exercises[currentExerciseIndex]?.name || '';
  };

  useEffect(() => {
    if (count !== 0) return;

    if (workoutStatus === 'active') {
      return onRest();
    }

    if (workoutStatus === 'rest') {
      return onGoForward();
    }

    if (workoutStatus === 'idle') {
      return onStartExercise();
    }
  }, [count, workoutStatus, onGoForward, onStartExercise, onRest]);

  return (
    <ScreenWrapper title={getScreenTitle()}>
      <Spacer />
      <View
        style={{
          width: '100%',
          height: 340,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress count={count} progress={progress} />
      </View>
      <Spacer height={spacing.xl} />
      <Text style={styles.exerciseNameText}>{getScreenTitle()}</Text>
      <Spacer />
      <PlayerControlBar
        status={workoutStatus}
        togglePlayPause={togglePlayPause}
        onGoForward={onGoForward}
        onGoBack={onGoBack}
      />
    </ScreenWrapper>
  );
};

export default WorkoutTimerUI;
