import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';
import WorkoutDetailsScreen from '@/screens/WorkoutDetails/WorkoutDetailsScreen';
import WorkoutsScreen from '@/screens/workouts/WorkoutsScreen';
import WorkoutTimerScreen from '@/screens/WorkoutTimer/WorkoutTimer';
import { themes } from '@/themes/main';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ExerciseStack = () => {
  const theme = themes[BUILD_VARIANT as keyof typeof themes];
  const { colors } = theme || {};
  const { colorScheme } = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors[colorScheme]['background'],
        },
        headerTitleStyle: { color: colors[colorScheme]['text']['primary'] },
        headerTintColor: colors[colorScheme]['text']['primary'],
      }}
    >
      <Stack.Screen
        name='Exercise'
        component={WorkoutsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='WorkoutDetails' component={WorkoutDetailsScreen} />
      <Stack.Screen name='WorkoutTimer' component={WorkoutTimerScreen} />
    </Stack.Navigator>
  );
};

export default ExerciseStack;
