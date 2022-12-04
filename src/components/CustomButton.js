import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export const CustomButton = ({style = {}, textStyle = {}, title, ...props}) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    justifyContent: 'center',
  },
});
