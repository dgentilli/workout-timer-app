import { WorkoutStatus } from '@/constants/workoutTypes';
import { useEffect, useRef, useState } from 'react';

type TimerProps = {
  durationInSeconds: number;
  status: WorkoutStatus;
  onComplete: () => void;
};

const ONE_SECOND_IN_MS = 1000;
const CHECK_INTERVAL_MS = 100;

export const useSecondsTimer = ({
  durationInSeconds,
  status,
  onComplete,
}: TimerProps) => {
  const [count, setCount] = useState(durationInSeconds);
  const [progress, setProgress] = useState(0);

  const startTimeRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const remainingTimeRef = useRef(durationInSeconds * ONE_SECOND_IN_MS);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle status changes and duration changes
  useEffect(() => {
    if (status === 'active' || status === 'rest') {
      // Starting or resuming
      if (
        remainingTimeRef.current === 0 ||
        remainingTimeRef.current > durationInSeconds * ONE_SECOND_IN_MS
      ) {
        remainingTimeRef.current = durationInSeconds * ONE_SECOND_IN_MS; // Reset for new duration
      }
      startTimeRef.current = Date.now();

      const tick = () => {
        if (!startTimeRef.current) return;

        const elapsed = Date.now() - startTimeRef.current;
        const remaining = remainingTimeRef.current - elapsed;

        if (remaining <= 0) {
          setCount(0);
          setProgress(1);
          onComplete();
          // setTimeout(() => setCount(durationInSeconds), 3000);
        } else {
          setCount(Math.ceil(remaining / ONE_SECOND_IN_MS));
          setProgress(elapsed / (durationInSeconds * ONE_SECOND_IN_MS));

          // Schedule next check
          timeoutRef.current = setTimeout(tick, CHECK_INTERVAL_MS);
        }
      };

      tick();
    } else if (status === 'paused') {
      // Store remaining time when pausing
      if (startTimeRef.current) {
        const elapsed = Date.now() - startTimeRef.current;
        remainingTimeRef.current = Math.max(
          0,
          remainingTimeRef.current - elapsed
        );
      }

      // Clear timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    } else if (status === 'idle') {
      // Reset everything
      setCount(durationInSeconds);
      setProgress(0);
      remainingTimeRef.current = durationInSeconds * ONE_SECOND_IN_MS;
      startTimeRef.current = null;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }

    // Cleanup on status change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [status, durationInSeconds, onComplete]);

  return { count, progress };
};
