import React from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {LocalIcon} from '../../../../assets/icon';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import RelatedCandicate from './RelatedCandicate';
const ExperienceUV = () => {
  return (
    <View style={styles.contener}>
      <View style={styles.info}>
        <Text style={styles.skill}>SUZUKIVIVU</Text>
        <Text style={styles.textskill2}>Thực tập bán hàng</Text>
        <Text style={styles.textskill2}>20/01/2021 - 20/10/2021</Text>
        <Text style={styles.textskill3}>
          Bán nhiều hàng nhất tháng 1 đạt giải nhân viên trẻ của tháng
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.skill}>SUZUKIVIVU</Text>
        <Text style={styles.textskill2}>Thực tập bán hàng</Text>
        <Text style={styles.textskill2}>20/01/2021 - 20/10/2021</Text>
        <Text style={styles.textskill3}>
          Bán nhiều hàng nhất tháng 1 đạt giải nhân viên trẻ của tháng
        </Text>
      </View>

      <RelatedCandicate />
    </View>
  );
};

export default ExperienceUV;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  info: {
    width: scale(335),
    padding: scale(5),
    backgroundColor: 'white',
    borderRadius: scale(20),
    marginTop: scale(20),
    margin: scale(7),
    borderWidth: 0.5,
    borderColor: colors.BLUE,
    elevation: 5,
  },
  title: {
    fontSize: scale(16),
    fontWeight: '400',
    marginLeft: scale(10),
    marginTop: scale(4),
  },
  dot: {
    fontSize: scale(20),
    fontWeight: '700',
    marginTop: scale(-4),
    marginLeft: scale(10),
  },
  skill: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    marginLeft: scale(10),
    marginTop: scale(5),
  },
  textskill2: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    color: '#404040',
    marginTop: scale(5),
    marginLeft: scale(10),
  },
  textskill3: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    color: '#307DF1',
    marginTop: scale(5),
    marginLeft: scale(10),
  },
});
