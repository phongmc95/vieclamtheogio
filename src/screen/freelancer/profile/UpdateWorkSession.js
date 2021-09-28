import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Button from '../../../components/Button/Button';
import TitleBasic from '../../../components/title/TitleBasic';

const UpdateWorkSession = () => {
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!check);
  };
  return (
    <View>
      <TitleBasic title="buổi có thể đi làm" />
      <ScrollView>
        <View style={{padding: scale(20)}}>
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
        <View
          style={{
            height: scale(110),
            width: '100%',
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: scale(10),
          }}>
          <Button title="Lưu" color="#fff" bg="#307df1" right={scale(10)} />
          <Button title="Không lưu" color="#307df1" bg="#fff" />
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
  button: {
    fontSize: scale(16),
    color: '#307DF1',
    width: scale(90),
    paddingVertical: scale(10),
    textAlign: 'center',
    backgroundColor: '#ebebeb',
    paddingTop: scale(8),
    borderRadius: scale(5),
    marginRight: scale(20),
  },
});

export default UpdateWorkSession;
