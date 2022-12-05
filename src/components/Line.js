import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Line = ({style = {}}) => {
  return <View style={[styles.line, style]}></View>;
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#E7E7E7',
    height: 1,
  },
});
