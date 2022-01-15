import fonts from '@constant/fonts';
import {useIsFocused} from '@react-navigation/core';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import TitleBasic from '../../components/title/TitleBasic';
import colors from '../../constant/colors';
import images from '../../constant/images';

export default function NotificationScreen() {
  const [data, setData] = useState([]);
  console.log('data: ', data);
  const user = useSelector(state => state.Authen.data);
  const isFocused = useIsFocused();

  useEffect(() => {
    appliedList();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  const appliedList = () => {
    var config = {
      method: 'get',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/jobs',
    };

    axios(config)
      .then(function (response) {
        const data = response.data.jobs
          .map(item =>
            item.applicants_applied.find(
              item => item.name === user?.user?.name,
            ),
          )
          .filter(item => item !== undefined);

        setData(data.filter(item => item.access_name));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#307df1" />
      <TitleBasic title="Thông báo" />
      {data.map(item => (
        <View style={styles.content}>
          <View style={styles.viewItem}>
            <Image style={styles.icon} source={images.avatar} />
            <View>
              {item.status === 'Đạt yêu cầu' ? (
                <Text style={styles.txtTitle}>
                  Bạn đã đạt yêu cầu của nhà tuyển dụng {item.access_name}. Nhà
                  tuyển dụng sẽ sớm liên hệ với bạn!
                </Text>
              ) : item.status === 'Không đạt yêu cầu' ? (
                <Text style={styles.txtTitle}>
                  Bạn không đạt yêu cầu của nhà tuyển dụng {item.access_name}
                </Text>
              ) : (
                <Text style={styles.txtTitle}>
                  Nhà tuyển dụng {item.access_name} đã mời bạn đến phỏng vấn
                </Text>
              )}
              {/* <Text style={styles.txtTime}>{item.time}</Text> */}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  viewItem: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    paddingBottom: scale(10),
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  icon: {
    height: scale(55),
    width: scale(55),
    backgroundColor: '#F3F3F3',
    marginRight: scale(15),
    marginTop: scale(2),
    borderRadius: scale(30),
  },
  txtTitle: {
    fontSize: scale(14),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
    flexWrap: 'wrap',
    width: '38%',
  },
  txtTime: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
    marginBottom: scale(5),
  },
  content: {
    paddingTop: scale(10),
    paddingHorizontal: scale(20),
  },
});
