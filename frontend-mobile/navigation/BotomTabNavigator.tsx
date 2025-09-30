import { useColorScheme } from '@/hooks/use-color-scheme';
import HomeUI from '@/screens/Home/HomeUI';
import SettingsUI from '@/screens/settings/SettingsUI';
import WorkoutsUI from '@/screens/workouts/WorkoutsUI';
import { themes } from '@/themes/main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text.primary,
      }}
    >
      <Tab.Screen name='Home' component={HomeUI} />
      <Tab.Screen name='Exercise' component={WorkoutsUI} />
      <Tab.Screen name='Settings' component={SettingsUI} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
