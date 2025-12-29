import { BUILD_VARIANT } from '@/config/buildVariant';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AuthScreen from '@/screens/Auth/AuthScreen';
import { themes } from '@/themes/main';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = () => {
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
        name='Auth'
        component={AuthScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
