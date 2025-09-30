import HomeUI from '@/screens/Home/HomeUI';
import SettingsUI from '@/screens/settings/SettingsUI';
import WorkoutsUI from '@/screens/workouts/WorkoutsUI';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeUI} />
      <Tab.Screen name='Exercise' component={WorkoutsUI} />
      <Tab.Screen name='Settings' component={SettingsUI} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
