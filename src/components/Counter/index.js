import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from 'react-native';

const Counter = ({ count, incrementCount, decrementCount }) => (
  <>
    <Text>{count}</Text>
    <Button title="+" onPress={() => incrementCount()} />
    <Button title="-" onPress={() => decrementCount()} />
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
};


export default Counter;
