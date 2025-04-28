import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const AddHabitForm: React.FC = () => {

    const [habitName, setHabitName] = React.useState('')
    const [frequency, setFrequency] = React.useState<"daily" | "weekly" | "monthly">('daily')
  return <form>
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
