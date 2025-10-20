import { useColorScheme } from '@/hooks/use-color-scheme';
import HomeUI from '@/screens/Home/HomeUI';
import SettingsScreen from '@/screens/settings/SettingsScreen';
import WorkoutDetailsScreen from '@/screens/WorkoutDetails/WorkoutDetailsScreen';
import WorkoutsScreen from '@/screens/workouts/WorkoutsScreen';
import { themes } from '@/themes/main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExerciseStack from './ExerciseStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colorScheme } = useColorScheme();
  const colors = themes.main.colors[colorScheme];

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.surface },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.secondary,
        headerShown: false,
      }}
    >
      <Tab.Screen name='Home' component={HomeUI} />
      <Tab.Screen name='Exercise' component={ExerciseStack} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
