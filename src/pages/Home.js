import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Fitness Booking
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Book your favorite fitness classes with ease
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/classes" sx={{ mt: 2 }}>
        View Classes
      </Button>
    </Box>
  );
};

export default Home;
