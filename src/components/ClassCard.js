import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import BookingModal from './BookingModal';

const ClassCard = ({ classData }) => {
  const [open, setOpen] = useState(false);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" color="primary">
              {classData.type}
            </Typography>
            <Typography color="text.secondary">
              Date: {new Date(classData.date).toLocaleDateString()}
            </Typography>
            <Typography color="text.secondary">
              Time: {classData.time}
            </Typography>
            <Typography color="text.secondary">
              Available Slots: {classData.capacity - classData.bookedUsers.length}
            </Typography>
            <Button onClick={handleOpen} variant="contained" color="secondary" sx={{ mt: 2 }}>
              Book Now
            </Button>
          </CardContent>
        </Card>
      </animated.div>
      <BookingModal open={open} handleClose={handleClose} classData={classData} />
    </>
  );
};

export default ClassCard;
