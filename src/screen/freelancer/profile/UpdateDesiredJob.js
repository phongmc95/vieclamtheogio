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
import images from '@constant/images';
import Button from '@components/Button/Button';

export default function UpdateDesiredJob() {
  return (
    <View style={styles.container}>
      <TitleBasic title="công việc mong muốn" />
      <ScrollView>
        <View style={{padding: scale(10)}}>
          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Công việc" />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Nghề nghiệp" />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Cấp bậc mong muốn"
            />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Hình thức" />
            <TouchableOpacity>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={[styles.boxTextInput, {width: scale(212)}]}>
              <TextInput style={styles.textInput} placeholder="Mức lương" />
            </View>

            <View
              style={{
                backgroundColor: '#000',
                width: scale(14),
                height: scale(1),
                marginHorizontal: scale(12),
                marginTop: scale(30),
              }}></View>

            <View style={[styles.boxTextInput, {width: scale(79)}]}>
              <TextInput
                style={[styles.textInput, {width: scale(30)}]}
                placeholder="Giờ"
              />
              <TouchableOpacity>
                <Image style={[styles.select]} source={icons.select} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput style={styles.textInput} placeholder="Địa điểm" />
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
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    fontStyle: 'italic',
    marginLeft: scale(15),
    width: '85%',
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
