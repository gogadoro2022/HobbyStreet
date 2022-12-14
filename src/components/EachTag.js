import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {fontWeights} from '../utils/sizes';

export const EachTag = ({item}) => {
  const items = item.content;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View>
        {items.map(item => (
          <Text style={styles.content}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    width: 30,
    marginRight: 16,
    fontSize: 17,
    fontWeight: fontWeights.lg,
    textAlign: 'center',
    marginTop: 24,
  },
  content: {
    fontSize: 17,
    color: '#FF4D77',
    fontWeight: fontWeights.xl,
    paddingTop: 24,
    letterSpacing: -2,
  },
});
