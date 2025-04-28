import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly" | "monthly";
    completedDates: string[];
    createdAt: string;
}

interface HabitState {
    habits: Habit[];
}

const initialState: HabitState = {
    habits: [],
}

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action: PayloadAction<{name: string, frequency:"daily" | "weekly" | "monthly"}>) => {
            const newHabit: Habit = {
                id: Date.now().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            };
            state.habits.push(newHabit);
        },
        removeHabit: (state, action) => {
            state.habits = state.habits.filter(habit => habit.id !== action.payload.id);
        },
    },
});

export const { addHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;
