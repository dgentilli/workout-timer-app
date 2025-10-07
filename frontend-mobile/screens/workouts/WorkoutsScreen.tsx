import { memo } from 'react';
import useWorkoutsLogic from './WorkoutsLogic';
import WorkoutsUI from './WorkoutsUI';

const MemoizedWorkoutsUI = memo(WorkoutsUI);

const WorkoutsScreen = () => {
  const { workoutsConfig } = useWorkoutsLogic();

  return <MemoizedWorkoutsUI workoutsConfig={workoutsConfig} />;
};

export default WorkoutsScreen;
