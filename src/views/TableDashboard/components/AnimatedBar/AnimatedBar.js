import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import AnimatedBarChart from './AnimatedBarChart';
import { range } from 'd3-array';

import './chart-styles.css'

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const AnimatedBar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const generateData = (value, length = 10) =>
    range(length).map((item, index) => ({
      index: index,
      date: index,
      value: value === null || value === undefined ?
        Math.random() * 100 : value
    }))

  // const [data, setData] = useState(generateData());
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);

  const changeData = () => {
    // setData(generateData(null, Math.floor(Math.random() * 10 + 1)));
    setData(generateData())
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="AnimatedBar"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <span className='label'>Animated Bar SVG (React Spring)</span>
          <div>
            <button onClick={changeData}>Transform</button>
          </div>
          <AnimatedBarChart
            data={data}
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

AnimatedBar.propTypes = {
  className: PropTypes.string
};

export default AnimatedBar;
