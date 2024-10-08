import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import useHabitStore from "../store/store";
import { CheckCircleOutline, Delete } from "@mui/icons-material";

const HabitList = () => {
  const { habits, removeHabit, toggleHabit } = useHabitStore();

  const today = new Date().toISOString().split("T")[0];

  return (
    <Box>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems={"center"}>
            <Grid xs={12} sm={6}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {habit.frequency}
              </Typography>
            </Grid>
            <Grid xs={12} xm={6}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={<CheckCircleOutline />}
                  color={
                    habit.completedDates.includes(today) ? "success" : "primary"
                  }
                  onClick={() => {
                    toggleHabit(habit.id, today);
                  }}
                >
                  {habit.completedDates.includes(today)
                    ? "Completed"
                    : "Mark Complete"}
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<Delete />}
                  color="error"
                  onClick={() => {
                    removeHabit(habit.id);
                  }}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
