import { Box, Container, Typography } from "@mui/material";
import useHabitStore from "./store/store";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import { useEffect } from "react";

function App() {
  const { fetchHabits } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <Container>
      <Box>
        <Typography variant="h2" component={"h1"} gutterBottom align="center">
          Habit Tracker
        </Typography>
      </Box>
      <AddHabitForm />
      <HabitList />
    </Container>
  );
}

export default App;
