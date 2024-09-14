import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({ setFilters }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTypeChange = (event) => {
    setFilters(prev => ({ ...prev, type: event.target.value }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFilters(prev => ({ ...prev, date }));
  };

  return (
    <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Class Type</InputLabel>
        <Select label="Class Type" onChange={handleTypeChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="yoga">Yoga</MenuItem>
          <MenuItem value="gym">Gym</MenuItem>
          <MenuItem value="dance">Dance</MenuItem>
        </Select>
      </FormControl>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="Select a date"
        dateFormat="MM/dd/yyyy"
        customInput={<input style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />}
      />
    </Box>
  );
};

export default Filters;
