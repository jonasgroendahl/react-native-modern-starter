import React from 'react';
import {View} from 'react-native';

type Props = {
  variant?: number;
};

const Spacer: React.FC<Props> = ({variant = 1}) => {
  const height = 5 * variant;
  return <View style={{height}} />;
};

export default Spacer;
