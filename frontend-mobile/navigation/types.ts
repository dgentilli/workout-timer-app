import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type ExerciseStackParamList = {
  Exercise: undefined;
  WorkoutDetails: { workoutId: string };
  WorkoutTimer: { workoutId: string };
};

export type BottomTabParamList = {
  Home: undefined;
  Exercise: undefined; // The stack itself doesn't take params
  Settings: undefined;
};

// Helper types for typing tab screens
export type BottomTabScreenPropsType<T extends keyof BottomTabParamList> =
  BottomTabScreenProps<BottomTabParamList, T>;

// Declare global types for React Navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabParamList {}
  }
}
