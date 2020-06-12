import React from 'react';
import {SafeAreaView, View, ViewStyle} from 'react-native';
import {GeneralStyles} from '../styles/GeneralStyles';

type Props = {
  style?: ViewStyle;
};

const ScrollableContent: React.FC<Props> = ({children, style}) => {
  return (
    <SafeAreaView style={GeneralStyles.wrapper}>
      <View style={[style, GeneralStyles.content]}>{children}</View>
    </SafeAreaView>
  );
};

export default ScrollableContent;
