import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '@components/title/TitleBasic';
import icons from '@constant/icons';
import Button from '@components/Button/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import moment from 'moment';
import SelectModal from '../../../components/SelectModal';
import {listRank} from '../../../data/ListJob';
import {DateTimePickerModal} from 'react-native-modal-datetime-picker';
import axios from 'axios';

export default function UpdateExperience({navigation}) {
  const [conpany, setConpany] = useState('');
  const [rank, setRank] = useState('Chức danh/ Vị trí');
  const [dateForm, setDateForm] = useState('Từ');
  const [toDate, setToDate] = useState('Đến');
  const [desc, setDesc] = useState('');
  const [checkRank, setCheckRank] = useState(false);
  const [openDateFrom, setOpenDateFrom] = useState(false);
  const [openToDate, setOpenToDate] = useState(false);
  const experience = [
    {
      company: conpany,
      possition: rank,
      time: dateForm + ' - ' + toDate,
      achievements: desc,
    },
  ];

  const selectRank = () => {
    setCheckRank(!checkRank);
  };

  const handleRank = item => {
    setRank(item.title);
    selectRank();
  };

  const handleDateFrom = () => {
    setOpenDateFrom(!openDateFrom);
  };

  const selectDateFrom = date => {
    setDateForm(moment(date).format('DD/MM/YYYY'));
    handleDateFrom();
  };

  const handleToDate = () => {
    setOpenToDate(!openToDate);
  };

  const selectToDate = date => {
    setToDate(moment(date).format('DD/MM/YYYY'));
    handleToDate();
  };

  const submit = () => {
    var data = {
      experience: experience,
    };

    var config = {
      method: 'patch',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/users/updateUser',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then(function (response) {
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
      <TitleBasic title="kinh nghiệm làm việc" />
      <ScrollView>
        <View style={{padding: scale(10)}}>
          <View style={styles.boxTextInput}>
            <TextInput
              value={conpany}
              onChangeText={setConpany}
              style={styles.textInput}
              placeholder="Công ty"
              placeholderTextColor="#000"
            />
          </View>

          <View style={styles.boxTextInput}>
            <Text style={styles.textInput}>{rank}</Text>
            <TouchableOpacity onPress={selectRank}>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={[styles.boxTextInput, {width: scale(152)}]}>
              <Text style={[styles.textInput, {width: '72%'}]}>{dateForm}</Text>
              <TouchableOpacity onPress={handleDateFrom}>
                <Image style={[styles.icon]} source={icons.calendar_blue} />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={openDateFrom}
                mode="date"
                onConfirm={selectDateFrom}
                onCancel={handleDateFrom}
              />
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
              <Text style={[styles.textInput, {width: '72%'}]}>{toDate}</Text>
              <TouchableOpacity onPress={handleToDate}>
                <Image style={[styles.icon]} source={icons.calendar_blue} />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={openToDate}
                mode="date"
                onConfirm={selectToDate}
                onCancel={handleToDate}
              />
            </View>
          </View>

          <View style={styles.boxTextArea}>
            <TextInput
              value={desc}
              onChangeText={setDesc}
              multiline={true}
              style={styles.textInput}
              placeholder="Mô tả công việc như là nhiệm vụ, trách nhiệm, thành tựu đạt được"
              placeholderTextColor="#000"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <TouchableOpacity onPress={submit}>
          <Button title="Lưu" color="#fff" bg="#307df1" right={scale(10)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button title="Không lưu" color="#307df1" bg="#fff" />
        </TouchableOpacity>
      </View>
      <SelectModal
        isVisible={checkRank}
        onBackdropPress={selectRank}
        label={'Chức danh/ Vị trí'}
        onPress={item => handleRank(item)}
        data={listRank}
      />
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
    paddingVertical: scale(8),
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
    elevation: 5,
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
    elevation: 5,
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
