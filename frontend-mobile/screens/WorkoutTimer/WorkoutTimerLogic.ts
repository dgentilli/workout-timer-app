import {
  useCurrentWorkout,
  useWorkoutActions,
} from '@/global-state/workoutStore';

const useWorkoutTimerLogic = () => {
  // A bunch of stuff we will get from redux
  // use local state or hard code for now just to build the ui
  const currentWorkout = useCurrentWorkout();
  console.log('********** currentWOrktou recd from zustand', currentWorkout);
  const { setCurrentWorkout } = useWorkoutActions();
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

  return {
    currentWorkout: workout,
    workoutStatus: status,
    currentExerciseIndex,
    onGoForward,
    onGoBack,
  };
};

export default useWorkoutTimerLogic;
