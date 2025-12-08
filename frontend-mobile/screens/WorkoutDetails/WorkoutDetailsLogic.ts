import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ExerciseStackParamList } from '@/navigation/types';
import { Workout } from '@/constants/workoutTypes';

type WorkoutDetailsNavigationProp = StackNavigationProp<
  ExerciseStackParamList,
  'WorkoutDetails'
>;

const useWorkoutDetailsLogic = () => {
  const navigation = useNavigation<WorkoutDetailsNavigationProp>();

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
    navigation.navigate('WorkoutTimer', { workoutId: '0' });
  };

  return { workoutDetails, onStartWorkout };
};

export default useWorkoutDetailsLogic;
