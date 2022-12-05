import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {fontWeights} from '../utils/sizes';
import {colors} from '../utils/colors';
import {UserComent} from '../components/UserComent';

const comentsTotal = 20;
const userComentData = [
  {
    username: '건',
    content: '잔이 너무 이쁜데 구매처 좀 알려주세요!',
  },
  {
    username: '성준',
    content: '간단하게 해먹기 좋아요',
  },
  {
    username: '준성',
    content: '덕분에 자주 만들어 먹습니다!',
  },
];

export const Coments = () => {
  return (
    <View>
      <Text style={styles.title}>댓글({comentsTotal})</Text>
      {userComentData.map(item => (
        <UserComent item={item} />
      ))}
      <TouchableOpacity style={styles.showAllContainer}>
        <Text style={styles.showAllComents}>
          {comentsTotal}개의 댓글 전체보기
        </Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} value={'댓글을 남겨주세요'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: fontWeights.xl,
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    height: 42,
  },
  inputText: {
    color: '#777775',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  showAllComents: {
    fontWeight: fontWeights.xl,
    fontSize: 15,
    lineHeight: 18,
  },
  showAllContainer: {
    marginTop: 12,
    alignItems: 'center',
  },
});
