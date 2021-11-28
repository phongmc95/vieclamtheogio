import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '@components/title/TitleBasic';
import icons from '@constant/icons';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';

export default function JobSaved() {
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.container}>
      <TitleBasic title="Việc làm  đã lưu" icon={icons.trash_white} />
      <View style={styles.content}>
        <View style={styles.boxJob}>
          <View style={styles.row}>
            <Image style={styles.logoJob} source={icons.logoHCI} />
            <View style={styles.title}>
              <Text style={styles.txtTitleJob}>
                Kỹ sư lập trình ứng dụng di động
              </Text>
              <Text style={styles.txtAddress}>Công ty cổ phần H.C.I</Text>
            </View>
          </View>
          <View style={{marginTop: scale(10)}}>
            <View style={styles.row}>
              <Image style={styles.iconJob} source={icons.bag} />
              <Text style={styles.txtStatus}>Toàn thời gian</Text>
            </View>
            <View style={styles.row}>
              <Image style={styles.iconJob} source={icons.money} />
              <Text style={styles.txtStatus}>7 - 10 Triệu</Text>
            </View>
            <View style={styles.row}>
              <Image style={styles.iconJob} source={icons.local} />
              <Text style={styles.txtStatus}>Hà Nội, Hồ Chí Minh</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => setCheck(!check)}>
          <Image
            style={{marginTop: scale(80), marginLeft: scale(10)}}
            source={!check ? icons.check2 : icons.checked2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  boxJob: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    borderWidth: 0.5,
    borderRadius: scale(20),
    width: scale(295),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    marginVertical: scale(10),
  },
  logoJob: {
    width: scale(45),
    height: scale(45),
    marginTop: scale(5),
  },
  txtTitleJob: {
    fontSize: scale(15),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.BOLD,
    flexWrap: 'wrap',
  },
  txtAddress: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    marginTop: scale(5),
    fontFamily: fonts.NORMAL,
  },
  iconHeart: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(5),
  },
  iconJob: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(2),
    marginRight: scale(5),
  },
  txtStatus: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  content: {marginLeft: scale(10), flexDirection: 'row'},
  row: {flexDirection: 'row', marginTop: scale(5)},
  title: {
    marginHorizontal: scale(8),
    width: '85%',
  },
});
