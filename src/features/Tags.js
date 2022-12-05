import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {EachTag} from '../components/EachTag';
import {tagData} from '../data/tagData';

export const Tags = () => {
  return (
    <View>
      {tagData.map(item => (
        <EachTag item={item} />
      ))}
    </View>
  );
};
