import { memo } from 'react';
import useWorkoutDetailsLogic from './WorkoutDetailsLogic';
import WorkoutDetialsUI from './WorkoutDetailsUI';

const MemoizedWorkoutDetailssUI = memo(WorkoutDetialsUI);

const WorkoutDetailsScreen = () => {
  const { workoutDetails } = useWorkoutDetailsLogic();

  return <MemoizedWorkoutDetailssUI workoutDetails={workoutDetails} />;
};

export default WorkoutDetailsScreen;
