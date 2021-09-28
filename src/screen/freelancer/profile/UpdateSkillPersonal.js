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

export default function UpdateDesiredJob() {
  return (
    <View style={styles.container}>
      <TitleBasic title="kỹ năng cá nhân" />
      <ScrollView>
        <View style={{padding: scale(10)}}>
          <View style={styles.boxTextInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Mô tả ngắn gon về kỹ năng bản thân"
            />
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              multiline={true}
              style={styles.textInput}
              placeholder="Mô tả ngắn gon về kỹ năng bản thân"
            />
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
    width: '90%',
    color: '#000'
  },
  boxTextInput: {
    width: scale(330),
    height: scale(160),
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
