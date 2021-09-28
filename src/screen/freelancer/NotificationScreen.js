import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleBasic from '../../components/title/TitleBasic';
import icons from '../../constant/icons';

export default function NotificationScreen() {
  const items = [
    {
      id: 1,
      title: 'Công ty cổ phần thanh toán Hưng Hà đã theo dõi bạn',
      time: '1 phút trước',
    },
    {
      id: 2,
      title: 'Công ty cổ phần  NAVICONS đã theo dõi bạn',
      time: '30 phút trước',
    },
    {
      id: 3,
      title: 'Công ty TUYỂN DỤNG IP  đã theo dõi bạn',
      time: '1 giờ trước',
    },
  ];

  return (
    <View style={styles.container}>
      <TitleBasic title="Thông báo" />
      {items.map(item => (
        <View
          style={{
            paddingTop: scale(10),
            paddingHorizontal: scale(20),
          }}>
          <View style={styles.viewItem}>
            <Image style={styles.icon} source={icons.logoHCI} />
            <View>
              <Text style={styles.txtTitle}>{item.title}</Text>
              <Text style={styles.txtTime}>{item.time}</Text>
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
    backgroundColor: '#fff',
  },
  viewItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#404040',
  },
  icon: {
    height: scale(55),
    width: scale(55),
    backgroundColor: '#F3F3F3',
    marginRight: scale(15),
    marginTop: scale(2),
  },
  txtTitle: {
    fontSize: scale(16),
    lineHeight: scale(20),
    color: '#404040',
    fontWeight: '500',
    flexWrap: 'wrap',
    width: '65%',
  },
  txtTime: {
    fontSize: scale(14),
    lineHeight: scale(20),
    color: '#404040',
    fontWeight: '300',
    marginBottom: scale(5),
  },
});
