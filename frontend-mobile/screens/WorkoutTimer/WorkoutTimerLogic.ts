import {
  useCurrentWorkout,
  useWorkoutActions,
} from '@/global-state/workoutStore';
import { useSecondsTimer } from '@/hooks/use-seconds-timer';
import { useEffect } from 'react';

const useWorkoutTimerLogic = () => {
  const currentWorkout = useCurrentWorkout();
  const { setCurrentWorkout } = useWorkoutActions();
  //@ts-expect-error fix this later
  const { currentExerciseIndex, status, workout } = currentWorkout;
  const { restInterval, exercises } = workout;
  const exercisesLength = exercises.length;

  const duration =
    status === 'rest'
      ? restInterval
      : exercises[currentExerciseIndex]?.duration || 0;

  const { count, progress } = useSecondsTimer({
    durationInSeconds: duration,
    status: status,
    onComplete: () => {
      if (status === 'rest') {
        setCurrentWorkout(workout, 'active', currentExerciseIndex + 1);
        return;
      }
      if (status === 'active' && currentExerciseIndex === exercisesLength - 1) {
        setCurrentWorkout(workout, 'completed', currentExerciseIndex);
        return;
      }
      if (status === 'active') {
        setCurrentWorkout(workout, 'rest', currentExerciseIndex);
        return;
      }
    },
  });

  useEffect(() => {
    setCurrentWorkout(workout, 'idle', 0);
  }, []);

  const onGoForward = () => {
    if (currentExerciseIndex < exercisesLength - 1) {
      setCurrentWorkout(workout, 'active', currentExerciseIndex + 1);
    }
  };
  const onGoBack = () => {
    if (currentExerciseIndex > 0) {
      setCurrentWorkout(workout, 'active', currentExerciseIndex - 1);
    }
  };

  const togglePlayPause = () => {
    if (status === 'active') {
      setCurrentWorkout(workout, 'paused', currentExerciseIndex);
    } else {
      setCurrentWorkout(workout, 'active', currentExerciseIndex);
    }
  };

  return {
    currentWorkout: workout,
    workoutStatus: status,
    currentExerciseIndex,
    count,
    progress,
    onGoForward,
    onGoBack,
    togglePlayPause,
  };
};

export default useWorkoutTimerLogic;
