import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import ClassList from '../components/ClassList';
import Filters from '../components/Filters';
import { fetchClasses } from '../services/api';


const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [filters, setFilters] = useState({
    type: '',
    date: null,
  });

  useEffect(() => {
    const loadClasses = async () => {
      const fetchedClasses = await fetchClasses();
      setClasses(fetchedClasses);
      setFilteredClasses(fetchedClasses);
    };
    loadClasses();
  }, []);

  useEffect(() => {
    const filtered = classes.filter(cls => 
      (!filters.type || cls.type === filters.type) &&
      (!filters.date || new Date(cls.date).toDateString() === filters.date.toDateString())
    );
    setFilteredClasses(filtered);
  }, [filters, classes]);

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Available Classes
      </Typography>
      <Filters setFilters={setFilters} />
      <ClassList classes={filteredClasses} />
      
    </>
  );
};

export default Classes;