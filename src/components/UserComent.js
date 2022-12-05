import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors} from '../utils/colors';
import {fontWeights} from '../utils/sizes';
import {Avatar} from './Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';

export const UserComent = ({item}) => {
  const {username, content} = item;
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar style={{width: 32, height: 32}} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
      <Icon style={{marginRight: 3}} name="ellipsis-v" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 8,
  },
  username: {
    color: colors.grey,
    fontSize: 14,
    fontWeight: fontWeights.md,
    lineHeight: 16.8,
  },
  content: {
    fontWeight: fontWeights.lg,
    fontSize: 14,
    lineHeight: 21,
  },
});
