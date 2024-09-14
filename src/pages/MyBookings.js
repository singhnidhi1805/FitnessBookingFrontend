import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { fetchMyBookings, cancelBooking } from '../services/api';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const fetchedBookings = await fetchMyBookings();
        setBookings(fetchedBookings);
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
      }
    };
    loadBookings();
  }, []);

  const handleCancel = async (classId) => {
    try {
      await cancelBooking(classId);
      setBookings(bookings.filter(booking => booking._id !== classId)); // Filter by _id or correct field
    } catch (error) {
      console.error('Cancel booking failed:', error);
    }
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        My Bookings
      </Typography>
      <List>
        {bookings.map((booking) => (
          <ListItem key={booking._id}> {/* Use _id or correct field */}
            <ListItemText
              primary={`${booking.type} - ${new Date(booking.date).toLocaleDateString()} ${booking.time}`}
            />
            <Button onClick={() => handleCancel(booking._id)} color="secondary">
              Cancel
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MyBookings;
