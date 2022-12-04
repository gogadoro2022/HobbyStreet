import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {CustomButton} from './src/components/CustomButton';
import {Title} from './src/features/Title';
import {Tags} from './src/features/Tags';
import {UserArticle} from './src/features/UserArticle';
import {Line} from './src/components/Line';
import {Profile} from './src/features/Profile';
import {fontWeights} from './src/utils/sizes';
import {Coments} from './src/features/Coments';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            source={require('./src/utils/servisa.png')}
            style={styles.canvas}
          />
        </View>

        <View style={styles.title}>
          <Title />
        </View>

        <View style={styles.AuthorContainer}>
          <Profile />
          <CustomButton
            style={{
              width: 69,
              height: 30,
              borderRadius: 8,
              backgroundColor: '#FF4D77',
            }}
            title={'팔로우'}
            textStyle={{
              color: '#FFFFFF',
              fontSIze: 14,
              fontWeight: fontWeights.xl,
            }}
          />
        </View>

        <Line />

        <View style={{marginHorizontal: 16, marginBottom: 4}}>
          <Text style={styles.tagTitle}>한 눈에 보는 CORCTAIL NAME</Text>
          <Tags />
        </View>

        <Line />

        <View style={{marginHorizontal: 16, marginBottom: 16}}>
          <UserArticle />
        </View>

        <View style={styles.AuthorContainer}>
          <Profile />
          <CustomButton
            style={{
              width: 69,
              height: 30,
              borderRadius: 8,
              backgroundColor: '#FF4D77',
            }}
            title={'팔로우'}
            textStyle={{
              color: '#FFFFFF',
              fontSIze: 14,
              fontWeight: fontWeights.xl,
            }}
          />
        </View>

        <Line />

        <Coments />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: 'black',
  },
  profile: {},
  canvas: {
    width: '100%',
  },
  title: {
    paddingTop: 16,
    paddingBottom: 12,
    marginHorizontal: 16,
  },
  AuthorContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagTitle: {
    fontWeight: fontWeights.xl,
    fontSize: 17,
  },
});
