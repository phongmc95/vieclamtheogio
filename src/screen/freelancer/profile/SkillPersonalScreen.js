import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';

export default function SkillPersonalScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <View style={{width: '85%', flexDirection: 'row', flexWrap: 'wrap'}}>
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
    lineHeight: scale(20),
    marginBottom: scale(10),
  },
  box: {
    width: scale(300),
    height: scale(160),
    borderRadius: scale(20),
    backgroundColor: '#fff',
    elevation: 3,
    marginTop: scale(20),
    marginLeft: scale(5),
    padding: scale(10),
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
});
