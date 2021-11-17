import React from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {LocalIcon} from '../../../../assets/icon';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import RelatedCandicate from './RelatedCandicate';
const DesiredJobUV = () => {
  return (
    <View style={styles.contener}>
      <View style={styles.info}>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Công việc: <Text style={{color: '#307DF1'}}>Thiết kế</Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Nghành nghề:</Text>
            <View>
              <Text
                style={[
                  styles.title,
                  {
                    color: '#307DF1',
                    overflow: 'hidden',
                    borderRadius: scale(30),
                    paddingHorizontal: scale(10),
                    backgroundColor: '#E4E4E4',
                  },
                ]}>
                IT phần cứng
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    color: '#307DF1',
                    overflow: 'hidden',
                    borderRadius: scale(30),
                    paddingHorizontal: scale(10),
                    backgroundColor: '#E4E4E4',
                  },
                ]}>
                IT phần mềm
              </Text>
              <Text
                style={[
                  styles.title,
                  {
                    color: '#307DF1',
                    overflow: 'hidden',
                    borderRadius: scale(30),
                    paddingHorizontal: scale(10),
                    backgroundColor: '#E4E4E4',
                  },
                ]}>
                IT phần cứng
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Cấp bậc mong muốn: <Text style={{color: '#307DF1'}}>Nhân viên</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Hình thức: <Text style={{color: '#307DF1'}}>Bán thời gian</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Mức lương: <Text style={{color: '#307DF1'}}>10.000.000</Text>
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: scale(3)}}>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.title}>
            Địa điểm: <Text style={{color: '#307DF1'}}>Tây Hồ ,Hà Nội</Text>
          </Text>
        </View>
      </View>
      <RelatedCandicate />
    </View>
  );
};

export default DesiredJobUV;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  info: {
    width: scale(335),
    paddingVertical: scale(10),
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
    fontFamily: fonts.NORMAL,
  },
  dot: {
    fontSize: scale(20),
    fontWeight: '700',
    marginTop: scale(-4),
    marginLeft: scale(10),
  },
});
