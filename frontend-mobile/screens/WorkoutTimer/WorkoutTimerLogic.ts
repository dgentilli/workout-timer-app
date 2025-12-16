import {
  useCurrentWorkout,
  useWorkoutActions,
} from '@/global-state/workoutStore';
import { useSecondsTimer } from '@/hooks/use-seconds-timer';

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
  const { restInterval, exercises } = workout;
  const exercisesLength = exercises.length;
  // console.log('FROM ZUSTAND: currentWorkout from logic file', currentWorkout);
  const { count, progress } = useSecondsTimer({
    durationInSeconds:
      status === 'rest'
        ? restInterval
        : exercises[currentExerciseIndex]?.duration,
    status: status,
    onComplete: () => {
      console.log('on complete runs ...');
    },
  });

  const onRest = () => {
    console.log('onRest runs....');
    setCurrentWorkout(workout, 'rest', currentExerciseIndex);
  };

  const onGoForward = () => {
    console.log('onGoForward runs....');

    if (currentExerciseIndex < exercisesLength - 1) {
      setCurrentWorkout(workout, 'active', currentExerciseIndex + 1);
    }
  };
  const onGoBack = () => {
    console.log('onGoBack runs..');
    if (currentExerciseIndex > 0) {
      setCurrentWorkout(workout, 'active', currentExerciseIndex - 1);
    }
  };

  const onStartWorkout = () => {
    setCurrentWorkout(workout, 'idle', currentExerciseIndex);
  };

  const onStartExercise = () => {
    console.log('onStartExercise runs..');

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
    count,
    progress,
    onGoForward,
    onGoBack,
    onStartExercise,
    togglePlayPause,
    onRest,
    onStartWorkout,
  };
};

export default useWorkoutTimerLogic;
