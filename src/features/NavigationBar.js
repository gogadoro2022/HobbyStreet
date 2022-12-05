import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Line} from '../components/Line';
import {fontWeights} from '../utils/sizes';
import Icon from 'react-native-vector-icons/FontAwesome';

const likeNum = 100;
const markNum = 13;
const recipeDir = '';

export default function NavigationBar() {
  return (
    <View>
      <Line />
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon style={styles.icon} name="heart-o" size={30} />
          <Text>{likeNum}</Text>
        </View>
        <View style={styles.item}>
          <Icon style={styles.icon} name="bookmark-o" size={30} />
          <Text>{markNum}</Text>
        </View>
        <View style={styles.item}>
          <Icon style={styles.icon} name="file-o" size={30} />
          <Text>레시피 요약</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 78,
    justifyContent: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: fontWeights.lg,
    height: 50,
    width: 120,
    marginTop: 4,
  },
  icon: {
    marginBottom: 5.5,
  },
});
