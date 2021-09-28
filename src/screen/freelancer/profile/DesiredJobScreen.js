import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../../constant/icons';
import jobs from '../../../data/Jobs';

export default function DesiredJobScreen({navigation}) {

  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.txtProgress}>
            Công việc: <Text style={{color: '#307df1'}}>Thiết kế</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: scale(85),
              flexWrap: 'wrap',
            }}>
            <Text style={styles.txtProgress}>Ngành nghề: </Text>
            {jobs.map(item => (
              <Text
                style={{
                  color: '#307df1',
                  backgroundColor: '#e4e4e4',
                  paddingHorizontal: scale(10),
                  borderRadius: scale(10),
                  height: scale(20),
                  marginBottom: scale(5),
                  marginRight: scale(5),
                }}>
                {item.title}{' '}
              </Text>
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
            <Image
              style={{
                width: scale(20),
                height: scale(20),
                marginRight: scale(5),
                marginTop: scale(5),
              }}
              source={icons.pen}
            />
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
  },
  box: {
    width: scale(300),
    height: scale(250),
    borderRadius: scale(20),
    backgroundColor: '#fff',
    elevation: 3,
    marginTop: scale(20),
    marginLeft: scale(5),
    padding: scale(10),
  },
});
