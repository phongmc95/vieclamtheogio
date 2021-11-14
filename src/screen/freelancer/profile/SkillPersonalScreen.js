import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import fonts from '../../../constant/fonts';

export default function SkillPersonalScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <View style={styles.contant}>
        <Text style={styles.txtProgress}>Ngủ nguyên ngày </Text>
        <Text style={styles.txtProgress}>Ngủ nguyên ngày </Text>
        <Text style={styles.txtProgress}>Ngủ nguyên ngày </Text>
        <Text style={styles.txtProgress}>Ngủ nguyên ngày </Text>
        <Text style={styles.txtProgress}>Ngủ nguyên ngày </Text>
        <Text style={styles.txtProgress}>Ngủ nguyên ngày </Text>
        <Text style={styles.txtProgress}>Ngủ nguyên ngày </Text>
        <Text style={styles.txtProgress}>Ngủ nguyên ngày </Text>
        <Text style={styles.txtProgress}>Ngủ nguyên ngày </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('UpdateSkill')}>
          <Image style={styles.pen} source={icons.pen} />
        </TouchableOpacity>
        <Image style={styles.trash} source={icons.trash_black} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtProgress: {
    fontSize: scale(14),
    color: '#000',
    marginBottom: scale(10),
    fontFamily: fonts.NORMAL,
  },
  box: {
    width: scale(300),
    padding: scale(15),
    borderRadius: scale(20),
    backgroundColor: '#fff',
    elevation: 3,
    marginTop: scale(20),
    marginLeft: scale(5),
    flexDirection: 'row',
  },
  trash: {
    marginTop: scale(10),
    width: scale(20),
    height: scale(20),
    marginLeft: scale(10),
  },
  pen: {
    width: scale(20),
    height: scale(20),
    marginLeft: scale(10),
    marginVertical: scale(30),
  },
  contant: {width: '85%', flexDirection: 'row', flexWrap: 'wrap'},
});
