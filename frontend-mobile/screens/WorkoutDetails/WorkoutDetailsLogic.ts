import { useNavigation } from '@react-navigation/native';
import { Workout } from '../workouts/WorkoutsLogic';

const useWorkoutDetailsLogic = () => {
  const navigation = useNavigation();
  const workoutDetails: Workout = {
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
  };

  const onStartWorkout = () => {
    navigation.navigate('WorkoutTimer');
  };

  return { workoutDetails, onStartWorkout };
};

export default useWorkoutDetailsLogic;
