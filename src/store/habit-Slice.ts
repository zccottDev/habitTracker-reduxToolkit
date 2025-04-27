import { createSlice } from "@reduxjs/toolkit";

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
        addHabit: (state, action) => {
            state.habits.push(action.payload);
        },
        removeHabit: (state, action) => {
            state.habits = state.habits.filter(habit => habit.id !== action.payload.id);
        },
    },
});

export const { addHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;
