import { memo } from 'react';
import useWorkoutDetailsLogic from './WorkoutDetailsLogic';
import WorkoutDetialsUI from './WorkoutDetailsUI';

const MemoizedWorkoutDetailssUI = memo(WorkoutDetialsUI);

const WorkoutDetailsScreen = () => {
  const { workoutDetails, onStartWorkout } = useWorkoutDetailsLogic();

  return (
    <MemoizedWorkoutDetailssUI
      workoutDetails={workoutDetails}
      onStartWorkout={onStartWorkout}
    />
  );
};

export default WorkoutDetailsScreen;
