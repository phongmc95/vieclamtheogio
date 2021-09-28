import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import icons from '../../../constant/icons';

export default function InfomationScreen() {
  const navigation = useNavigation();
  const [flc, setFlc] = useState([]);
  const token = useSelector(state => state.Token.data);
  console.log(flc);

  useEffect(() => {
    const fetchFlc = async () => {
      var data = new FormData();
      data.append('token', token);
      var config = {
        method: 'post',
        url: 'https://vieclamtheogio.timviec365.vn/api_app/api_job/uv_show_ttlh.php',
        data: data,
      };

      axios(config)
        .then(function (response) {
          const info = response.data.data.uv_thongtin_lh;
          setFlc(info);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchFlc();
    return () => {};
  }, []);
  return (
    <View style={styles.box}>
      {flc.map(item => (
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.txtProgress}>
              Họ và tên:{' '}
              <Text style={{color: '#307df1'}}>{item.uv_username}</Text>
            </Text>
            <Text style={styles.txtProgress}>
              Ngày sinh:{' '}
              <Text style={{color: '#307df1'}}>{item.uv_birthday}</Text>
            </Text>
            <Text style={styles.txtProgress}>
              Giới tính:{' '}
              <Text style={{color: '#307df1'}}>
                {item.uv_gender.toString()}
              </Text>
            </Text>
            <Text style={styles.txtProgress}>
              Hôn nhân:{' '}
              <Text style={{color: '#307df1'}}>{item.uv_honnhan}</Text>
            </Text>
            <Text style={styles.txtProgress}>
              Số điện thoại:{' '}
              <Text style={{color: '#307df1'}}>{item.uv_phone}</Text>
            </Text>
            <Text style={styles.txtProgress}>
              Email: <Text style={{color: '#307df1'}}>{item.uv_email}</Text>
            </Text>
            <Text style={styles.txtProgress}>
              Tỉnh thành: <Text style={{color: '#307df1'}}>{item.uv_city}</Text>
            </Text>
            <Text style={styles.txtProgress}>
              Quận huyện:{' '}
              <Text style={{color: '#307df1'}}>{item.uv_district}</Text>
            </Text>
            <Text style={styles.txtProgress}>
              Địa chỉ: <Text style={{color: '#307df1'}}>{item.uv_address}</Text>
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateInfomation')}>
              <Image
                style={{
                  width: scale(20),
                  height: scale(20),
                  marginRight: scale(5),
                  marginTop: scale(5),
                }}
                source={icons.pen}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  txtProgress: {
    fontSize: scale(14),
    color: '#000',
    lineHeight: scale(20),
    marginBottom: scale(10),
  },
  box: {
    width: scale(300),
    height: scale(300),
    borderRadius: scale(20),
    backgroundColor: '#fff',
    elevation: 3,
    marginTop: scale(20),
    marginLeft: scale(5),
    padding: scale(10),
  },
});
