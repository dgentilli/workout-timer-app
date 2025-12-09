import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Workout, WorkoutStatus } from '@/constants/workoutTypes';

interface WorkoutState {
  currentWorkout:
    | {
        workout: Workout;
        status: WorkoutStatus;
        currentExerciseIndex: number;
      }
    | undefined;
  actions: {
    setCurrentWorkout: (
      selectedWorkout: Workout,
      status: WorkoutStatus,
      currentExerciseIndex: number
    ) => void;
    clearCurrentWorkout: () => void;
  };
}

export const useWorkoutStore = create<WorkoutState>()(
  persist(
    devtools(
      (set) => ({
        currentWorkout: undefined,
        actions: {
          setCurrentWorkout: (
            selectedWorkout: Workout,
            status: WorkoutStatus,
            currentExerciseIndex: number
          ) =>
            set(
              () => ({
                currentWorkout: {
                  workout: selectedWorkout,
                  status: status,
                  currentExerciseIndex: currentExerciseIndex,
                },
              }),
              false,
              'setCurrentWorkout'
            ),
          clearCurrentWorkout: () => {
            set(() => ({ currentWorkout: undefined }));
          },
        },
      }),
      { name: 'Workout Store' }
    ),
    {
      name: 'programming-journal',
      partialize: (state) => ({ currentWorkout: state.currentWorkout }),
    }
  )
);

export const useCurrentWorkout = () =>
  useWorkoutStore((state) => state.currentWorkout);
export const useWorkoutActions = () =>
  useWorkoutStore((state) => state.actions);
