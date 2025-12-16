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
    onStartExercise,
    togglePlayPause,
    onRest,
    onStartWorkout,
  } = useWorkoutTimerLogic();

  return (
    <MemoizedWorkoutTimerUI
      currentExerciseIndex={currentExerciseIndex}
      currentWorkout={currentWorkout}
      workoutStatus={workoutStatus}
      onGoBack={onGoBack}
      onGoForward={onGoForward}
      onStartExercise={onStartExercise}
      togglePlayPause={togglePlayPause}
      onRest={onRest}
      count={count}
      progress={progress}
      onStartWorkout={onStartWorkout}
    />
  );
};

export default WorkoutTimerScreen;
