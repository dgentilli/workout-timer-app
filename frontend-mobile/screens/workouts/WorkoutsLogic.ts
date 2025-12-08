import { Workout } from '@/constants/workoutTypes';

const useWorkoutsLogic = () => {
  const workoutsConfig: Workout[] = [
    {
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
    },
  ];

  return {
    workoutsConfig,
  };
};

export default useWorkoutsLogic;
