import { memo } from 'react';
import WorkoutTimerUI from './WorkoutTimerUI';
import useWorkoutTimerLogic from './WorkoutTimerLogic';

const MemoizedWorkoutTimerUI = memo(WorkoutTimerUI);

const WorkoutTimerScreen = () => {
  const {
    currentWorkout,
    workoutStatus,
    currentExerciseIndex,
    count,
    progress,
    onGoBack,
    onGoForward,
    togglePlayPause,
  } = useWorkoutTimerLogic();

  return (
    <MemoizedWorkoutTimerUI
      currentExerciseIndex={currentExerciseIndex}
      currentWorkout={currentWorkout}
      workoutStatus={workoutStatus}
      onGoBack={onGoBack}
      onGoForward={onGoForward}
      togglePlayPause={togglePlayPause}
      count={count}
      progress={progress}
    />
  );
};

export default WorkoutTimerScreen;
