import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { range } from 'd3-array';

import {
  LatestSales,
  UsersByDevice,
  BarChart,
  Bar,
  AnimatedBar
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const TableDashboard = () => {
  const classes = useStyles();

  const generateData = (value, length = 10) =>
    range(length).map((item, index) => ({
      index: index,
      date: index,
      value: value === null || value === undefined ?
        Math.random() * 100 : value
    }))

  const [data, setData] = useState(generateData());
  const changeData = () => {
    // setData(generateData(null, Math.floor(Math.random() * 10 + 1)));
    setData(generateData())
  }

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
          <BarChart data={[5,10,1,3]} size={[500, 500]} />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <span className='label'>Bar SVG</span>
          <Bar
            data={data}
            width={600}
            height={400}
            top={20}
            bottom={30}
            left={0}
            right={0}
          />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <button onClick={changeData}>Transform</button>
          <span className='label'>Animated Bar SVG (React Spring)</span>
          <AnimatedBar
            data={data}
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
