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
import TitleBasic from '@components/title/TitleBasic';
import icons from '@constant/icons';
import Button from '@components/Button/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';

export default function UpdateExperience() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleBasic title="kinh nghiệm làm việc" />
      <ScrollView>
        <View style={{padding: scale(10)}}>
          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Công ty" />
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Chức danh/ Vị trí"
            />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={[styles.boxTextInput, {width: scale(152)}]}>
              <TextInput
                style={[styles.textInput, {width: '72%'}]}
                placeholder="Từ"
              />
              <TouchableOpacity>
                <Image style={[styles.icon]} source={icons.calendar_blue} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: '#000',
                width: scale(14),
                height: scale(1),
                marginHorizontal: scale(5),
                marginTop: scale(30),
              }}
            />

            <View style={[styles.boxTextInput, {width: scale(152)}]}>
              <TextInput
                style={[styles.textInput, {width: '72%'}]}
                placeholder="Đến"
              />
              <TouchableOpacity>
                <Image style={[styles.icon]} source={icons.calendar_blue} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxTextArea}>
            <TextInput
              multiline={true}
              style={styles.textInput}
              placeholder="Mô tả công việc như là nhiệm vụ, trách nhiệm, thành tựu đạt được"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button title="Lưu" color="#fff" bg="#307df1" right={scale(10)} />
        <Button title="Không lưu" color="#307df1" bg="#fff" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    fontStyle: 'italic',
    marginLeft: scale(15),
    width: '85%',
    color: '#000',
    fontFamily: fonts.ITALIC,
  },
  boxTextInput: {
    flexDirection: 'row',
    width: scale(330),
    height: scale(40),
    backgroundColor: '#fff',
    borderColor: '#307df1',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    borderRadius: scale(5),
    marginVertical: scale(10),
  },
  boxTextArea: {
    width: scale(330),
    height: scale(160),
    backgroundColor: '#fff',
    borderColor: '#307df1',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    borderRadius: scale(5),
    marginVertical: scale(10),
    fontFamily: fonts.ITALIC,
  },
  icon: {width: scale(20), height: scale(20), marginTop: scale(10)},
  select: {
    width: scale(9),
    height: scale(10),
    marginTop: scale(15),
    marginLeft: scale(10),
  },
  button: {
    height: scale(60),
    width: '100%',
    backgroundColor: colors.LIGHT_WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: scale(10),
  },
});
