import WorkoutDetailsScreen from '@/screens/WorkoutDetails/WorkoutDetailsScreen';
import WorkoutsScreen from '@/screens/workouts/WorkoutsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ExerciseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Exercise'
        component={WorkoutsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='WorkoutDetails' component={WorkoutDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ExerciseStack;
