import { useState } from 'react';
import { Workout } from '../workouts/WorkoutsLogic';

const useWorkoutTimerLogic = () => {
  // A bunch of stuff we will get from redux
  // use local state or hard code for now just to build the ui
  const currentWorkout: Workout = {
    id: '0',
    name: 'Upper Body Circuit',
    restInterval: 10,
    exercises: [
      { name: 'Push-up', duration: 30 },
      { name: 'Dip', duration: 30 },
      { name: 'Low plank', duration: 30 },
      { name: 'Wide-arm pushup', duration: 30 },
      { name: 'L-sit', duration: 30 },
      { name: 'Hindu push-up', duration: 30 },
    ],
  }; // will come from redux selector
  const workoutStatus: 'idle' | 'active' | 'paused' | 'completed' = 'idle'; // will come from redux selector
  // for setting the index, we'll eventually dispatch a redux action
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const exercisesLength = currentWorkout?.exercises?.length;
  const onGoForward = () => {
    if (currentExerciseIndex < exercisesLength - 1) {
      setCurrentExerciseIndex((prev) => prev + 1);
    }
  };
  const onGoBack = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex((prev) => prev - 1);
    }
  };

  return {
    currentWorkout,
    workoutStatus,
    currentExerciseIndex,
    onGoForward,
    onGoBack,
  };
};

export default useWorkoutTimerLogic;
