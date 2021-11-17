import React from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import {LocalIcon} from '../../../../assets/icon';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import RelatedCandicate from './RelatedCandicate';
const InfoUV = () => {
  return (
    <View style={styles.contener}>
      <View style={styles.info}>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Họ và tên: <Text style={{color: '#307DF1'}}>Phong lợn</Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Ngày sinh: <Text style={{color: '#307DF1'}}>27/07/1995</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Giới tính: <Text style={{color: '#307DF1'}}>Nữ</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Hôn nhân: <Text style={{color: '#307DF1'}}>Ế</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Số điện thoại: <Text style={{color: '#307DF1'}}>************</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Email: <Text style={{color: '#307DF1'}}>************</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Địa chỉ: <Text style={{color: '#307DF1'}}>Tây Hồ ,Hà Nội</Text>
          </Text>
        </View>
      </View>
      <RelatedCandicate />
    </View>
  );
};

export default InfoUV;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  info: {
    width: scale(335),
    paddingBottom: scale(10),
    backgroundColor: 'white',
    borderRadius: scale(20),
    marginTop: scale(20),
    margin: scale(7),
    borderWidth: 0.5,
    borderColor: colors.BLUE,
  },
  title: {
    fontSize: scale(16),
    fontFamily: fonts.NORMAL,
    marginLeft: scale(10),
    marginTop: scale(4),
  },
  dot: {
    fontSize: scale(20),
    fontWeight: '700',
    marginTop: scale(-4),
    marginLeft: scale(10),
  },
});
