import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const Avatar = ({style = {}, ...props}) => {
  return (
    <View>
      <Image
        style={[styles.avatar, style]}
        source={require('../utils/profile1.jpeg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
  },
});
