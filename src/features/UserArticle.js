import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Line} from '../components/Line';
import {fontWeights} from '../utils/sizes';

export const UserArticle = () => {
  return (
    <View>
      <Text style={styles.mainText}>
        여러분은 평소에 맥주를 즐겨드시나요? 저도 맥주를 참 좋아하는데요. 가끔
        기분 전환이 필요할 때, 바로 오늘 소개해드릴 세르바사 콘 리몬을 만들어
        마시곤 해요. {'\n'}
        {'\n'}세르바사 콘 리몬은 스페인의 바나 레스토랑에서 쉽게 찾아볼 수
        있어요. 그래서 이름도 스페인어인데 우리말로는 간단해요. 바로, ‘레몬을
        넣은 맥주'죠. {'\n'}
        {'\n'}레몬 향의 상쾌함과 라거 맥주의 청량감이 함께 어우러진 이 칵테일은,
        남녀노소 모두 부담 없이 즐길 수 있답니다. 저도 기회만 된다면, 스페인
        현지에서 즐겨보고 싶네요.{'\n'}
      </Text>
      <Text style={styles.head}>1단계. 모든 재료 준비하기</Text>
      <Text>
        {'\n'}
        라거 맥주와 레몬 탄산수를 준비해주세요. 주류와 음료 모두 최대한 차게
        하시면, 청량감을 더욱 느끼실 수 있어요.{'\n'}
        {'\n'}
        레몬 향 뿐만 아니라 단 맛도 더하고 싶으시다면, 레몬 탄산수 대신 레몬
        탄산음료를 사용하셔도 됩니다.{'\n'}
        {'\n'}
        그리고 하이볼 글라스를 준비해주세요. 집에 있는 기다란 유리잔을 쓰셔도
        돼요.
      </Text>
      <Line style={{margin: 16}} />
      <Text style={styles.mainText}>여러분도 꼭 만들어보세요!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 15,
    fontWeight: fontWeights.md,
    lineHeight: 22.5,
  },
  head: {
    fontWeight: fontWeights.xl,
    fontSize: 20,
    lineHeight: 30,
  },
});
