import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '../../../components/title/TitleBasic';
import icons from '../../../constant/icons';
import images from '../../../constant/images';
import Button from '../../../components/Button/Button';

export default function UpdateInfomation() {
  return (
    <View style={styles.container}>
      <TitleBasic title="thông tin liên hệ" />
      <ScrollView>
        <View style={{padding: scale(10)}}>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.avatar} source={images.avatar} />
            <Text style={styles.txtAvatar}>Cập nhật ảnh đại diện</Text>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Họ và tên" />
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Ngày sinh" />
            <TouchableOpacity>
              <Image style={styles.icon} source={icons.calendar_wb} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Giới tính" />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Hôn nhân" />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Số điện thoại" />
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Email" />
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Tỉnh thành" />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Quân huyện" />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Địa chỉ" />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: scale(60),
          width: '100%',
          backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: scale(10),
        }}>
        <Button title="Lưu" color="#fff" bg="#307df1" right={scale(10)} />
        <Button title="Không lưu" color="#307df1" bg="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E5E5E5',
  },
  avatar: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(200),
    marginVertical: scale(10),
  },
  txtAvatar: {
    fontSize: scale(16),
    marginTop: scale(10),
    color: '#404040',
    marginBottom: scale(30),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    fontStyle: 'italic',
    marginLeft: scale(15),
    width: '83%',
  },
  boxTextInput: {
    flexDirection: 'row',
    width: scale(330),
    height: scale(40),
    backgroundColor: '#fff',
    borderRadius: 1,
    borderColor: '#307df1',
    elevation: 5,
    borderRadius: scale(5),
    marginVertical: scale(10),
  },
  icon: {width: scale(30), height: scale(30), marginTop: scale(5)},
  select: {
    width: scale(9),
    height: scale(10),
    marginTop: scale(15),
    marginLeft: scale(10),
  },
});
