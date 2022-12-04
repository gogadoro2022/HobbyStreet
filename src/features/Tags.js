import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {EachTag} from '../components/EachTag';
import {tagData} from '../data/tagData';

export const Tags = () => {
  return (
    <View>
      <FlatList
        data={tagData}
        renderItem={({item}) => <EachTag item={item} />}
      />
    </View>
  );
};
