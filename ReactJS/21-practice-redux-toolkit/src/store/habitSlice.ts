import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Habit = {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
};

type HabitState = {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
};

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};

export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
  //Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const mockHabits: Habit[] = [
    {
      id: "1",
      name: "Exercise",
      frequency: "daily",
      completedDates: ["2023-05-01", "2023-05-02", "2023-05-03"],
      createdAt: "2023-05-01T10:00:00Z",
    },
    {
      id: "2",
      name: "Read",
      frequency: "daily",
      completedDates: [],
      createdAt: "2023-05-01T10:00:00Z",
    },
  ];

  return mockHabits;
});

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (
      state,
      action: PayloadAction<{ name: string; frequency: "daily" | "weekly" }>
    ) => {
      const newHabit: Habit = {
        id: crypto.randomUUID(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };

      state.habits.push(newHabit);
    },
    toggleHabit: (
      state,
      action: PayloadAction<{ id: string; date: string }>
    ) => {
      const habit = state.habits.find(
        (habit) => habit.id === action.payload.id
      );

      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);
        if (index > -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },
    removeHabit: (state, action: PayloadAction<{ id: string }>) => {
      state.habits.splice(
        state.habits.findIndex((habit) => habit.id === action.payload.id),
        1
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabits.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.habits = action.payload;
      })
      .addCase(fetchHabits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch habits";
      });
  },
});

export const { addHabit, toggleHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;
