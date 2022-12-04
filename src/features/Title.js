import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {fontWeights} from '../utils/sizes';

export const Title = () => {
  const categoryName = 'CATEGORY_NAME';
  const contentTitle = 'CONTENT_TITLE';
  return (
    <View>
      <Text style={styles.category}>{categoryName}</Text>
      <Text style={styles.title}>{contentTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: fontWeights.xl,
    color: colors.black,
    paddingTop: 4,
    lineHeight: 30,
  },
  category: {
    fontSize: 14,
    color: colors.grey,
  },
});
