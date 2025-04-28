
import { Container, Typography } from '@mui/material'
import './App.css'
import AddHabitForm from './components/add-habit-form'

function App() {

  return (
    <div>
    <Container maxWidth="md">
      <Typography component="h1" variant="h2" align="center">
        Habit Tracker
      </Typography>
      <AddHabitForm />
    </Container>
    </div>
  )
}

export default App
