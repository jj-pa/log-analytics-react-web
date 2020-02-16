import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { range } from 'd3-array';

import {
  LatestSales,
  UsersByDevice,
  AnimatedBar
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const TableDashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <AnimatedBar
            width={600}
            height={400}
            top={20}
            bottom={30}
            left={0}
            right={0}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TableDashboard;
