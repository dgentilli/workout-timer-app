import { memo } from 'react';
import WorkoutTimerUI from './WorkoutTimerUI';
import useWorkoutTimerLogic from './WorkoutTimerLogic';

const MemoizedWorkoutTimerUI = memo(WorkoutTimerUI);

const WorkoutTimerScreen = () => {
  const {
    currentWorkout,
    workoutStatus,
    currentExerciseIndex,
    onGoBack,
    onGoForward,
  } = useWorkoutTimerLogic();

  return (
    <MemoizedWorkoutTimerUI
      currentExerciseIndex={currentExerciseIndex}
      currentWorkout={currentWorkout}
      workoutStatus={workoutStatus}
      onGoBack={onGoBack}
      onGoForward={onGoForward}
    />
  );
};

export default WorkoutTimerScreen;
