import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const Avatar = () => {
  return (
    <View>
      <Image style={styles.avatar} source={require('../utils/profile1.jpeg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
});
