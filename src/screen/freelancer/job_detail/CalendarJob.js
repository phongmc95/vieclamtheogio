import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Button from '@components/Button/Button';
import TitleBasic from '@components/title/TitleBasic';

const CalendarJob = () => {
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!check);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: scale(20)}}>
          <Text
            style={{
              fontSize: scale(12),
              color: '#404040',
              lineHeight: scale(14),
              marginBottom: scale(20),
            }}>
            Công việc này có 2 ca làm, bạn sẽ được sắp xếp cụ thể khi trao đổi
            trực tiếp.
          </Text>
          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 2</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={toggleCheck}>
                <Text
                  style={[
                    styles.button,
                    {
                      color: !check ? '#307DF1' : '#fff',
                      backgroundColor: !check ? '#ebebeb' : '#FFA800',
                    },
                  ]}>
                  Sáng
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleCheck}>
                <Text
                  style={[
                    styles.button,
                    {
                      color: !check ? '#307DF1' : '#fff',
                      backgroundColor: !check ? '#ebebeb' : '#FFA800',
                    },
                  ]}>
                  Chiều
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleCheck}>
                <Text
                  style={[
                    styles.button,
                    {
                      color: !check ? '#307DF1' : '#fff',
                      backgroundColor: !check ? '#ebebeb' : '#FFA800',
                    },
                  ]}>
                  Tối
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 3</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.button}>Sáng</Text>
              <Text style={styles.button}>Chiều</Text>
              <Text style={styles.button}>Tối</Text>
            </View>
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 4</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.button}>Sáng</Text>
              <Text style={styles.button}>Chiều</Text>
              <Text style={styles.button}>Tối</Text>
            </View>
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 5</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.button}>Sáng</Text>
              <Text style={styles.button}>Chiều</Text>
              <Text style={styles.button}>Tối</Text>
            </View>
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 6</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.button}>Sáng</Text>
              <Text style={styles.button}>Chiều</Text>
              <Text style={styles.button}>Tối</Text>
            </View>
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Thứ 7</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.button}>Sáng</Text>
              <Text style={styles.button}>Chiều</Text>
              <Text style={styles.button}>Tối</Text>
            </View>
          </View>

          <View style={{marginBottom: scale(20)}}>
            <Text style={styles.txtProgress}>Chủ nhật</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.button}>Sáng</Text>
              <Text style={styles.button}>Chiều</Text>
              <Text style={styles.button}>Tối</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  button: {
    fontSize: scale(16),
    color: '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor: '#ebebeb',
    paddingTop: scale(8),
    overflow: 'hidden',
    borderRadius: scale(5),
    marginRight: scale(20),
  },
});

export default CalendarJob;
