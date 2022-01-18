import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '../../../constant/icons';
import fonts from '../../../constant/fonts';
import colors from '../../../constant/colors';

const CalendarJob = ({item}) => {
  console.log('item: ', item);
  return (
    <View>
      <ScrollView>
        <View style={{padding: scale(20)}}>
          <Text
            style={{
              fontSize: scale(12),
              fontFamily: fonts.NORMAL,
              color: '#404040',
              lineHeight: scale(14),
              marginBottom: scale(20),
            }}>
            Công việc này có thể thời gian làm thay đổi phù hợp, bạn sẽ được sắp
            xếp cụ thể khi trao đổi trực tiếp.
          </Text>

          <FlatList
            data={item?.job?.work_schedule}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <View style={{marginBottom: scale(20)}}>
                  <View style={{flexDirection: 'row'}}>
                    <Image style={styles.dot} source={icons.dot} />
                    <Text
                      style={{fontSize: scale(14), fontFamily: fonts.NORMAL}}>
                      {item.shift}
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginLeft: scale(25),
                      fontSize: scale(14),
                      fontFamily: fonts.NORMAL,
                      marginBottom: scale(10),
                    }}>
                    Giờ làm: {item.start_time} - {item.end_time}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.button2(item)}>Thứ 2</Text>
                    <Text style={styles.button3(item)}>Thứ 3</Text>
                    <Text style={styles.button4(item)}>Thứ 4</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.button5(item)}>Thứ 5</Text>
                    <Text style={styles.button6(item)}>Thứ 6</Text>
                    <Text style={styles.button7(item)}>Thứ 7</Text>
                  </View>
                  <Text style={styles.buttonCN(item)}>Chủ nhật</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pen: {
    height: scale(20),
    width: scale(20),
    marginLeft: '90%',
    marginTop: scale(10),
  },
  txtProgress: {
    fontSize: scale(14),
    color: '#404040',
    lineHeight: scale(19),
    marginBottom: scale(5),
    fontWeight: 'bold',
  },
  button2: item => ({
    fontSize: scale(14),
    fontFamily: fonts.BOLD,
    color: item?.work_days?.monday === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.work_days?.monday === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    marginVertical: scale(5),
  }),
  button6: item => ({
    fontSize: scale(14),
    fontFamily: fonts.BOLD,
    color: item?.work_days?.friday === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.work_days?.friday === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    marginVertical: scale(5),
  }),
  button7: item => ({
    fontSize: scale(14),
    fontFamily: fonts.BOLD,
    color: item?.work_days?.saturday === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.work_days?.saturday === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    marginVertical: scale(5),
  }),
  buttonCN: item => ({
    fontSize: scale(14),
    fontFamily: fonts.BOLD,
    color: item?.work_days?.sunday === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.work_days?.sunday === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    marginVertical: scale(5),
  }),
  button3: item => ({
    fontSize: scale(14),
    fontFamily: fonts.BOLD,
    color: item?.work_days?.tuesday === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.work_days?.tuesday === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    marginVertical: scale(5),
  }),
  button4: item => ({
    fontSize: scale(14),
    fontFamily: fonts.BOLD,
    color: item?.work_days?.wednesday === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.work_days?.wednesday === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    marginVertical: scale(5),
  }),
  button5: item => ({
    fontSize: scale(14),
    fontFamily: fonts.BOLD,
    color: item?.work_days?.thursday === true ? colors.WHITE : '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor:
      item?.work_days?.thursday === true ? colors.YELLOW : '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
    marginVertical: scale(5),
  }),
  dot: {
    width: scale(5),
    height: scale(5),
    top: scale(7),
    marginHorizontal: scale(10),
  },
});

export default CalendarJob;
