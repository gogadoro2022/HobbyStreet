import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar} from '../components/Avatar';
import {fontWeights} from '../utils/sizes';

export const Profile = () => {
  [username, setUsername] = useState('USER_NAME');

  return (
    <View style={styles.container}>
      <Avatar />
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    paddingLeft: 8,
    fontSize: 14,
    alignContent: 'center',
    fontWeight: fontWeights.lg,
  },
});
