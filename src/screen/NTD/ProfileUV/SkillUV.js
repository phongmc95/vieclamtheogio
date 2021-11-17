import React from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import RelatedCandicate from './RelatedCandicate';
const SkillUV = () => {
  return (
    <View style={styles.contener}>
      <View style={styles.info}>
        <Text style={styles.skill}>ăn ,lăn</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.skill}>ăn ,lăn</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>ăn ,lăn</Text>
      </View>

      <RelatedCandicate />
    </View>
  );
};

export default SkillUV;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  info: {
    width: scale(335),
    height: scale(115),
    backgroundColor: 'white',
    borderRadius: scale(20),
    marginTop: scale(20),
    margin: scale(7),
    padding: scale(5),
    borderWidth: 0.5,
    borderColor: colors.BLUE,
    elevation: 5,
  },
  title: {
    fontSize: scale(16),
    fontWeight: '400',
    marginLeft: scale(10),
    marginTop: scale(4),
    fontFamily: fonts.NORMAL,
  },
  dot: {
    fontSize: scale(20),
    fontWeight: '700',
    marginTop: scale(-4),
    marginLeft: scale(10),
  },
});
