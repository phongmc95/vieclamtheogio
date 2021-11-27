import React, {useState} from 'react';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '@components/title/TitleBasic';
import Button from '@components/Button/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function UpdateDesiredJob({navigation}) {
  const [skill, setSkill] = useState('');
  const personal_skills = [skill];

  const submit = () => {
    var data = {
      personal_skills: personal_skills,
    };

    var config = {
      method: 'patch',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/users/updateUser',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log('data: ', data);

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (navigation.canGoBack) {
          navigation.goBack();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleBasic title="kỹ năng cá nhân" />
      <ScrollView>
        <View style={{padding: scale(10)}}>
          <View style={styles.boxTextInput}>
            <TextInput
              value={skill}
              onChangeText={setSkill}
              style={styles.textInput}
              placeholder="Mô tả ngắn gon về kỹ năng bản thân"
              multiline={true}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.viewButton}>
        <TouchableOpacity onPress={submit}>
          <Button title="Lưu" color="#fff" bg="#307df1" right={scale(10)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button title="Không lưu" color="#307df1" bg="#fff" />
        </TouchableOpacity>
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
    fontSize: scale(14),
    marginLeft: scale(15),
    width: '90%',
    color: '#000',
    fontFamily: fonts.ITALIC,
    paddingTop: scale(10),
  },
  boxTextInput: {
    width: scale(330),
    height: scale(160),
    backgroundColor: '#fff',
    borderRadius: 1,
    borderColor: '#307df1',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    marginVertical: scale(10),
  },
  icon: {width: scale(30), height: scale(30), marginTop: scale(5)},
  select: {
    width: scale(9),
    height: scale(10),
    marginTop: scale(15),
    marginLeft: scale(10),
  },
  viewButton: {
    height: scale(60),
    width: '100%',
    backgroundColor: colors.LIGHT_WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: scale(10),
  },
});
