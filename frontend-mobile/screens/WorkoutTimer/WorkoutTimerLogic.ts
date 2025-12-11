import {
  useCurrentWorkout,
  useWorkoutActions,
} from '@/global-state/workoutStore';

/**
 * Next steps:
 * - implement the rest interval
 * - need to add a new status
 * - flow should be this
 * ----user starts the workout
 * ----status switches from idle to active
 * ----current exercise finishes
 * ---- status switches from active to rest
 * ---- Rest interval counts down
 * ---- Rest interval finishes and switches from rest to active
 * ---- After rest interval - figure out why the progress is messed up when you pause/play
 *
 */

const useWorkoutTimerLogic = () => {
  const currentWorkout = useCurrentWorkout();
  const { setCurrentWorkout } = useWorkoutActions();
  //@ts-expect-error fix this later
  const { currentExerciseIndex, status, workout } = currentWorkout;
  const exercisesLength = workout.exercises.length;

  const onRest = () => {
    setCurrentWorkout(workout, 'rest', currentExerciseIndex);
  };

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
    onRest,
  };
};

export default useWorkoutTimerLogic;
