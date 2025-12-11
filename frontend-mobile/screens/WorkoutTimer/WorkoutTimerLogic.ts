import {
  useCurrentWorkout,
  useWorkoutActions,
} from '@/global-state/workoutStore';

const useWorkoutTimerLogic = () => {
  const currentWorkout = useCurrentWorkout();
  const { setCurrentWorkout } = useWorkoutActions();
  //@ts-expect-error fix this later
  const { currentExerciseIndex, status, workout } = currentWorkout;
  const exercisesLength = workout.exercises.length;
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

  const onStartExercise = () => {
    setCurrentWorkout(workout, 'active', currentExerciseIndex);
  };

  const togglePlayPause = () => {
    console.log('toggle play pause status', status);
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
    onGoForward,
    onGoBack,
    onStartExercise,
    togglePlayPause,
  };
};

export default useWorkoutTimerLogic;
