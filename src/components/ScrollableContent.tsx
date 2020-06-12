import React from 'react';
import {SafeAreaView, ScrollView, ViewStyle} from 'react-native';
import {GeneralStyles} from '../styles/GeneralStyles';

type Props = {
  style?: ViewStyle;
};

const ScrollableContent: React.FC<Props> = ({children, style}) => {
  return (
    <SafeAreaView>
      <ScrollView style={[GeneralStyles.content, style]}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ScrollableContent;
