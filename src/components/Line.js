import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Line = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#E7E7E7',
    margin: 16,
    height: 1,
  },
});
