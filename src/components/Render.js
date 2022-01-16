import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import images from '../constant/images';
import {scale} from 'react-native-size-matters';
import {LocalIcon, PhoneIcon} from '../../assets/icon';
import colors from '../constant/colors';
import fonts from '../constant/fonts';
const Render = props => {
  const {item, onPress} = props;
  return (
    <View style={[styles.viewFL]}>
      <TouchableOpacity style={{flexDirection: 'row'}} onPress={onPress}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={!item?.avatar ? images.avatar : {uri: item?.avatar}}
              style={styles.avatar}
            />
            <View style={{marginLeft: scale(10)}}>
              <Text style={styles.nameUV}>{item?.name}</Text>
              <Text
                style={[
                  styles.textitem,
                  {marginLeft: scale(10), marginTop: scale(5)},
                ]}>
                {item?.industry}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: scale(10),
                marginTop: scale(10),
                width: '52%',
              }}>
              <LocalIcon color={colors.BLUE} />
              <Text style={styles.textitem}>{item?.job_adress}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: scale(10),
                marginTop: scale(10),
              }}>
              <PhoneIcon />
              <Text style={styles.textitem}>{item?.phone}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Render;
const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(60),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontFamily: fonts.NORMAL,
    lineHeight: scale(20),
    marginLeft: scale(20),
  },
  main: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '35%',
  },
  viewFL: {
    width: scale(335),
    borderRadius: scale(20),
    backgroundColor: 'white',
    margin: scale(5),
    padding: scale(10),
    borderWidth: 0.5,
    borderColor: colors.BLUE,
    elevation: 5,
  },
  avatar: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    marginLeft: scale(5),
    marginTop: scale(12),
  },
  LikeIcon: {
    margin: scale(18),
  },
  textitem: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    marginLeft: scale(8),
    marginTop: scale(2),
  },
  nameUV: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(18),
    color: '#307DF1',
    marginLeft: scale(10),
    marginTop: '8%',
  },
  hinder: {
    width: scale(142),
    marginLeft: scale(190),
    margin: scale(5),
  },
  viewItemRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: scale(13),
  },
  nghichu: {
    height: scale(98),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307DF1',
  },
  status: {
    height: '100%',
    flexDirection: 'row',
    backgroundColor: '#307DF1',
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredViewMD: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(22),
    backgroundColor: 'rgba(61, 61, 61, 0.3)',
  },
  modalView: {
    margin: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(30),
    padding: scale(20),
    alignItems: 'center',
    width: scale(311),
  },
  boxInput: {
    width: scale(280),
    height: scale(205),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: scale(20),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    padding: scale(10),
    fontFamily: fonts.NORMAL,
  },
  showStatus: {
    width: scale(142),
    backgroundColor: '#307DF1',
    marginTop: scale(130),
    alignItems: 'center',
  },
  titleNote: {
    fontSize: scale(20),
    fontFamily: fonts.NORMAL,
    color: '#307DF1',
    textAlign: 'center',
  },
});
