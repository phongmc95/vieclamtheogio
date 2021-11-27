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
import SelectModal from '../../../components/SelectModal';
import {jobs, provinces} from '../../../data/Jobs';
import axios from 'axios';
import {listRank, listType} from '../../../data/ListJob';

export default function UpdateDesiredJob({navigation}) {
  const [industry, setIndustry] = useState('Nghề nghiệp');
  const [rank, setRank] = useState('Cấp bậc mong muốn');
  const [job_type, setjob_type] = useState('Hình thức');
  const [salary, setSalary] = useState(0);
  const [location, setlocation] = useState('Địa điểm');
  const [checkIndustry, setCheckIndustry] = useState(false);
  const [checkRank, setCheckRank] = useState(false);
  const [checkType, setCheckType] = useState(false);
  const [checkLocation, setCheckLocation] = useState(false);

  const selectIndustry = () => {
    setCheckIndustry(!checkIndustry);
  };

  const handleIndusrey = item => {
    setIndustry(item.title);
    selectIndustry();
  };

  const selectRank = () => {
    setCheckRank(!checkRank);
  };

  const handleRank = item => {
    setRank(item.title);
    selectRank();
  };

  const selectType = () => {
    setCheckType(!checkType);
  };

  const handleType = item => {
    setjob_type(item.title);
    selectType();
  };
  const selectLocation = () => {
    setCheckLocation(!checkLocation);
  };

  const handleLocation = item => {
    setlocation(item.title);
    selectLocation();
  };
  const submit = () => {
    var data = {
      industry: industry,
      rank: rank,
      job_type: job_type,
      salary: salary,
      job_adress: location,
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
      <TitleBasic title="công việc mong muốn" />
      <ScrollView>
        <View style={{padding: scale(10)}}>
          <View style={styles.boxTextInput}>
            <Text style={styles.textInput}>{industry}</Text>
            <TouchableOpacity onPress={selectIndustry}>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <Text style={styles.textInput}>{rank}</Text>
            <TouchableOpacity onPress={selectRank}>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <Text style={styles.textInput}>{job_type}</Text>
            <TouchableOpacity onPress={selectType}>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>

          <View style={styles.boxTextInput}>
            <TextInput
              value={salary}
              onChangeText={setSalary}
              style={styles.textInput}
              placeholder="Mức lương"
              keyboardType="numeric"
            />
            <Text style={[styles.textInput, {right: scale(20)}]}>VNĐ</Text>
          </View>

          <View style={styles.boxTextInput}>
            <Text style={styles.textInput}>{location}</Text>
            <TouchableOpacity onPress={selectLocation}>
              <Image style={styles.select} source={icons.select} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: scale(60),
          width: '100%',
          backgroundColor: colors.LIGHT_WHITE,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: scale(10),
        }}>
        <TouchableOpacity onPress={submit}>
          <Button title="Lưu" color="#fff" bg="#307df1" right={scale(20)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button title="Không lưu" color="#307df1" bg="#fff" />
        </TouchableOpacity>
      </View>
      <SelectModal
        isVisible={checkIndustry}
        onBackdropPress={selectIndustry}
        label={'Nghề nghiệp'}
        onPress={item => handleIndusrey(item)}
        data={jobs}
      />
      <SelectModal
        isVisible={checkRank}
        onBackdropPress={selectRank}
        label={'Công việc mong muốn'}
        onPress={item => handleRank(item)}
        data={listRank}
      />
      <SelectModal
        isVisible={checkType}
        onBackdropPress={selectType}
        label={'Hình thức'}
        onPress={item => handleType(item)}
        data={listType}
      />

      <SelectModal
        isVisible={checkLocation}
        onBackdropPress={selectLocation}
        label={'Địa điểm'}
        onPress={item => handleLocation(item)}
        data={provinces}
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
  icon: {width: scale(30), height: scale(30), marginTop: scale(5)},
  select: {
    width: scale(9),
    height: scale(10),
    marginTop: scale(15),
    marginLeft: scale(10),
  },
});
