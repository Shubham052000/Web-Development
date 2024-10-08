import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export type Habit = {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
};

type HabitState = {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
  removeHabit: (id: string) => void;
  toggleHabit: (id: string, date: string) => void;
  fetchHabits: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
};

const useHabitStore = create<HabitState>()(
  devtools(
    persist(
      (set, get) => {
        return {
          habits: [],
          addHabit: (name, frequency) => {
            set((state) => {
              return {
                habits: [
                  ...state.habits,
                  {
                    id: crypto.randomUUID(),
                    name,
                    frequency,
                    completedDates: [],
                    createdAt: new Date().toISOString(),
                  },
                ],
              };
            });
          },
          removeHabit: (id) =>
            set((state) => ({
              habits: state.habits.filter((habit) => habit.id !== id),
            })),
          toggleHabit: (id, date) =>
            set((state) => ({
              habits: state.habits.map((habit) =>
                habit.id === id
                  ? {
                      ...habit,
                      completedDates: habit.completedDates.includes(date)
                        ? habit.completedDates.filter((d) => d !== date)
                        : [...habit.completedDates, date],
                    }
                  : habit
              ),
            })),
          fetchHabits: async () => {
            set({ isLoading: true });

            if (get().habits.length > 0) {
              set({ isLoading: false });
              return;
            }
            try {
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve("");
                }, 1000)
              );
              set({
                habits: [
                  {
                    id: "1",
                    name: "Exercise",
                    frequency: "daily",
                    completedDates: [],
                    createdAt: "2024-05-01T12:00:00Z",
                  },
                  {
                    id: "2",
                    name: "Read Books",
                    frequency: "daily",
                    completedDates: [],
                    createdAt: "2024-05-01T12:00:00Z",
                  },
                ],
                isLoading: false,
              });
            } catch (err) {
              set({ error: "Failed to fetch habits", isLoading: false });
            }
          },
        };
      },
      { name: "habits-local" }
    )
  )
);

export default useHabitStore;
