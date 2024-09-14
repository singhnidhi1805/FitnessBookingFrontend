import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { bookClass } from '../services/api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ open, handleClose, classData }) => {
  const handleBooking = async () => {
    try {
      if (classData && classData._id) {
        await bookClass(classData._id); // Use classData._id here
        handleClose(); // Close modal on success
      } else {
        console.error('Class ID is missing');
      }
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Book {classData.type} Class
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Date: {new Date(classData.date).toLocaleDateString()}
        </Typography>
        <Typography>
          Time: {classData.time}
        </Typography>
        <Button onClick={handleBooking} variant="contained" sx={{ mt: 2 }}>
          Confirm Booking
        </Button>
      </Box>
    </Modal>
  );
};

export default BookingModal;
