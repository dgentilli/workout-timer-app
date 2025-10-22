import { memo } from 'react';
import WorkoutTimerUI from './WorkoutTimerUI';
import useWorkoutTimerLogic from './WorkoutTimerLogic';

const MemoizedWorkoutTimerUI = memo(WorkoutTimerUI);

const WorkoutTimerScreen = () => {
  const {} = useWorkoutTimerLogic();

  return <MemoizedWorkoutTimerUI />;
};

export default WorkoutTimerScreen;
