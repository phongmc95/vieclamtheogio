import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon} from '@assets/icon';
const Filter2 = ({navigation}) => {
  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>BỘ LỌC</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('ListFilter2');
        }}>
        <Text style={styles.TextTitle}>Tất cả</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('ListFilter2');
        }}>
        <Text style={styles.TextTitle}>Trạng thái</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('ListFilter2');
        }}>
        <Text style={styles.TextTitle}>Đã có việc</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('ListFilter2');
        }}>
        <Text style={styles.TextTitle}>Không nghe máy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('ListFilter2');
        }}>
        <Text style={styles.TextTitle}>Sai thông tin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('ListFilter2');
        }}>
        <Text style={styles.TextTitle}>Khác</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter2;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(60),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
    marginLeft: scale(20),
  },
  goback: {
    marginLeft: scale(10),
  },
  TextTitle: {
    fontWeight: '400',
    fontSize: scale(16),
    margin: scale(10),
  },
  btn: {
    borderColor: 'black',
    borderBottomWidth: scale(1),
    margin: scale(5),
    width: scale(335),
  },
});
