import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Workout, WorkoutStatus } from '@/constants/workoutTypes';

interface WorkoutState extends Workout {
  status: WorkoutStatus;
}
