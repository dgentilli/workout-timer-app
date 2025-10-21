// Define params for each screen in the Exercise Stack
export type ExerciseStackParamList = {
  Exercise: undefined; // WorkoutsScreen - no params
  WorkoutDetails: { workoutId: string }; // Assuming you'll pass workout ID
};

// Define params for each tab in the Bottom Tab Navigator
export type BottomTabParamList = {
  Home: undefined;
  Exercise: undefined; // The stack itself doesn't take params
  Settings: undefined;
};

// Declare global types for React Navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabParamList {}
  }
}
