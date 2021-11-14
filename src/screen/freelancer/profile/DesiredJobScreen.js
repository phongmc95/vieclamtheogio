import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import jobs from '@data/Jobs';
import fonts from '../../../constant/fonts';
import {useNavigation} from '@react-navigation/native';

export default function DesiredJobScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.txtProgress}>
            Công việc: <Text style={{color: '#307df1'}}>Thiết kế</Text>
          </Text>
          <View style={styles.content}>
            <Text style={styles.txtProgress}>Ngành nghề: </Text>
            {jobs.map(item => (
              <Text style={styles.title}>{item.title} </Text>
            ))}
          </View>
          <Text style={styles.txtProgress}>
            Cấp bậc mong muốn: <Text style={{color: '#307df1'}}>Nhân viên</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Hình thức: <Text style={{color: '#307df1'}}>Bán thời gian</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Mức lương: <Text style={{color: '#307df1'}}>10.000.000</Text>
          </Text>
          <Text style={styles.txtProgress}>
            Địa điểm:{' '}
            <Text style={{color: '#307df1'}}>
              1 Định Công, Hoàng Mai, Hà Nội
            </Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateDesiredJob')}>
            <Image style={styles.icon} source={icons.pen} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtProgress: {
    fontSize: scale(14),
    color: '#000',
    lineHeight: scale(20),
    marginBottom: scale(5),
    fontFamily: fonts.NORMAL,
  },
  box: {
    width: scale(300),
    borderRadius: scale(20),
    backgroundColor: '#fff',
    elevation: 3,
    marginTop: scale(20),
    marginLeft: scale(5),
    padding: scale(15),
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: scale(5),
    flexWrap: 'wrap',
  },
  title: {
    color: '#307df1',
    backgroundColor: '#e4e4e4',
    paddingHorizontal: scale(10),
    paddingVertical: scale(3),
    borderRadius: scale(10),
    height: scale(20),
    marginBottom: scale(5),
    marginRight: scale(5),
    fontFamily: fonts.NORMAL,
  },
  icon: {
    width: scale(20),
    height: scale(20),
    marginRight: scale(5),
    marginTop: scale(5),
    right: scale(20),
  },
});
