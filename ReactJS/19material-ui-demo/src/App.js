import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              hendrerit odio et ligula congue fringilla. Mauris ut nunc commodo,
              egestas nulla sed, congue purus. Aliquam vestibulum, mi sed mollis
              vestibulum, magna dolor congue velit, vel pulvinar metus tortor
              sed augue. Duis eleifend diam eget ipsum malesuada varius.
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
