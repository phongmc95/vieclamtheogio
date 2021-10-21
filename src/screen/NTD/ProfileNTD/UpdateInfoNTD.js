import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon, CameraIcon, Selecter} from '@assets/icon';

const UpdateInfoNTD = ({navigation}) => {
  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Cập nhập thông tin</Text>
      </View>
      <ScrollView style={{marginBottom: scale(30)}}>
        <View style={styles.viewAvtar}>
          <Image
            source={require('@assets/img/logoVin.png')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.btnCamera}>
            <CameraIcon />
          </TouchableOpacity>
          <Text style={styles.titleAvatar}>Cập nhật ảnh đại diện</Text>
        </View>

        <View style={styles.main}>
          <Text style={{fontSize: scale(16), fontWeight: '700'}}>
            THÔNG TIN CÔNG TY
          </Text>
          <View>
            <Text style={styles.TextTitle}>Tên công ty *</Text>
            <View style={styles.boxInput}>
              <TextInput placeholder="Tên công ty" style={styles.textInput} />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Quy mô công ty *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="Quy mô công ty"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Mã số thuế *</Text>
            <View style={styles.boxInput}>
              <TextInput placeholder="Mã số thuế" style={styles.textInput} />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Địa chỉ công ty *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="Địa chỉ công ty"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Tỉnh/ thành phố *</Text>
            <View style={[styles.boxInput, {flexDirection: 'row'}]}>
              <TextInput
                placeholder="Chọn địa tỉnh thành phố"
                style={styles.textInput}
              />
              <TouchableOpacity style={styles.Selecter}>
                <Selecter />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Điện thoại cố định *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="Điện thoại cố định"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Website *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="https://tuandeptraivcl.net"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Giới thiệu về công ty *</Text>
            <View style={[styles.boxInput, {height: scale(105)}]}>
              <TextInput placeholder="Công ty....." style={styles.textInput} />
            </View>
          </View>
          <Text style={{fontSize: scale(16), fontWeight: '500'}}>
            THÔNG TIN LIÊN HỆ
          </Text>
          <View>
            <Text style={styles.TextTitle}>Tên người liên hệ *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: Hà Anh Tuấn"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Địa chỉ liên hệ *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: 05 Cẩm Khê"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Số điện thoại liên hệ *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: Từ 0367289911"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Email liên hệ *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: tuanhaph09959@gmail.com"
                style={styles.textInput}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.foodter}>
        <TouchableOpacity>
          <Text style={styles.btnupdate}>Cập nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateInfoNTD;

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
  avatar: {
    width: scale(100),
    height: scale(100),
    opacity: 0.5,
  },
  viewAvtar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCamera: {
    position: 'absolute',
    alignItems: 'center',
  },
  titleAvatar: {
    fontWeight: '400',
    fontSize: scale(16),
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(5),
  },
  TextTitle: {
    fontWeight: '500',
    fontSize: scale(16),
    marginLeft: scale(5),
    marginTop: scale(10),
  },
  Selecter: {
    width: scale(25),

    alignItems: 'center',
    justifyContent: 'center',
  },
  foodter: {
    height: scale(60),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnupdate: {
    fontWeight: '500',
    fontSize: scale(16),
    paddingHorizontal: scale(33),
    paddingVertical: scale(11),
    backgroundColor: '#307DF1',
    borderRadius: scale(30),
    color: 'white',
  },
});
