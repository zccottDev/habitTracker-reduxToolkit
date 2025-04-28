import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store'
import { addHabit } from '../store/habit-Slice'

const AddHabitForm: React.FC = () => {

    const [habitName, setHabitName] = React.useState('')
    const [frequency, setFrequency] = React.useState<"daily" | "weekly" | "monthly">('daily')

    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (habitName.trim()) {
            dispatch(addHabit({ name: habitName, frequency }))
            setHabitName('')
            setFrequency('daily')
        }
    }
  return <form onSubmit={handleSubmit}>
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    }}>
        <TextField
            label="Habit Name"
            variant="outlined"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            fullWidth
        />
        <FormControl fullWidth>
            <InputLabel>
                Frequency
            </InputLabel>
            <Select value={frequency} onChange={(e) => setFrequency(e.target.value as "daily" | "weekly" | "monthly")}>
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
            </Select>
        </FormControl>
        <Button type='submit' variant="contained" color="primary">
            Add Habit
        </Button>
    </Box>
  </form>
}

export default AddHabitForm
