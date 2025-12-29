import BottomTabNavigator from './BotomTabNavigator';
import AuthStack from './AuthStack';
const IS_LOGGED_IN = false;

const Navigation = () => {
  return IS_LOGGED_IN ? <BottomTabNavigator /> : <AuthStack />;
};

export default Navigation;
