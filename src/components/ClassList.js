import React, { useState } from 'react';
import { Grid, Pagination } from '@mui/material';
import ClassCard from './ClassCard';

const ClassList = ({ classes }) => {
  const [page, setPage] = useState(1);
  const classesPerPage = 9;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedClasses = classes.slice((page - 1) * classesPerPage, page * classesPerPage);

  return (
    <>
      <Grid container spacing={3}>
        {paginatedClasses.map(cls => (
          <Grid item xs={12} sm={6} md={4} key={cls.id}>
            <ClassCard classData={cls} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(classes.length / classesPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};

export default ClassList;