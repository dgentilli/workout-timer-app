export type Exercise = {
  name: string;
  duration: number;
};

export type Workout = {
  id: string;
  name: string;
  restInterval: number;
  exercises: Exercise[];
};

export type WorkoutStatus = 'idle' | 'active' | 'paused' | 'completed';
