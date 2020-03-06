import React from 'react';
import { View } from 'react-native';

import Counter from '~components/Counter/Container';

const Home = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Counter />
  </View>
);

export default Home;
