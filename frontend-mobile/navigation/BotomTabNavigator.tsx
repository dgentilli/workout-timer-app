import { useColorScheme } from '@/hooks/use-color-scheme';
import HomeUI from '@/screens/Home/HomeUI';
import SettingsScreen from '@/screens/settings/SettingsScreen';
import { themes } from '@/themes/main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExerciseStack from './ExerciseStack';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';
import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator();

const routesWithHiddenBottomTab = ['WorkoutDetails'];

const getBottomTabDisplay = (
  route: RouteProp<BottomTabParamList, 'Exercise'>
) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  if (routesWithHiddenBottomTab.includes(routeName)) {
    return { tabBarStyle: { display: 'none' } };
  }
};

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
      <Tab.Screen
        name='Exercise'
        component={ExerciseStack}
        // @ts-expect-error fix this later
        options={({ route }) => getBottomTabDisplay(route)}
      />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
