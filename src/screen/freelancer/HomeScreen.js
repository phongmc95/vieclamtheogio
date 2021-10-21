import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import TitleHome from '../../components/title/TitleHome';
import icons from '../../constant/icons';
import jobs from '../../data/Jobs';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: scale(65)}}>
        <TitleHome />
        <View style={styles.viewCategory}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={styles.txtTitle}>Việc làm nổi bật trong ngày</Text>
            <TouchableOpacity onPress={() => navigation.navigate('JobHot')}>
              <Text style={styles.txtSeeMore}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              height: scale(270),
              flexWrap: 'wrap',
            }}>
            {jobs.map(item => (
              <View style={styles.boxCategory}>
                <Image style={styles.iconCategory} source={item.img} />
                <Text style={styles.txtCategory}>{item.title}</Text>
              </View>
            ))}
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.txtTitle}>Việc làm dành cho bạn</Text>
              <TouchableOpacity onPress={() => navigation.navigate('ListJob')}>
                <Text style={styles.txtSeeMore}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxJob}>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.logoJob} source={icons.logoHCI} />
                <View
                  style={{
                    marginHorizontal: scale(8),
                    width: '60%',
                  }}>
                  <Text style={styles.txtTitleJob}>
                    Kỹ sư lập trình ứng dụng di động
                  </Text>
                  <Text style={styles.txtAddress}>Công ty cổ phần H.C.I</Text>
                </View>
                <Image style={styles.iconHeart} source={icons.heart} />
              </View>
              <View style={{flexDirection: 'row', marginTop: scale(5)}}>
                <Image style={styles.iconJob} source={icons.bag} />
                <Text style={styles.txtStatus}>Toàn thời gian</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: scale(5)}}>
                <Image style={styles.iconJob} source={icons.money} />
                <Text style={styles.txtStatus}>7 - 10 Triệu</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: scale(5)}}>
                <Image style={styles.iconJob} source={icons.local} />
                <Text style={styles.txtStatus}>Hà Nội, Hồ Chí Minh</Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.txtTitle}>Việc làm theo giờ mới nhất</Text>
              <TouchableOpacity onPress={() => navigation.navigate('ListJob')}>
                <Text style={styles.txtSeeMore}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxJob}>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.logoJob} source={icons.logoHCI} />
                <View
                  style={{
                    marginHorizontal: scale(8),
                    width: '60%',
                  }}>
                  <Text style={styles.txtTitleJob}>
                    Kỹ sư lập trình ứng dụng di động
                  </Text>
                  <Text style={styles.txtAddress}>Công ty cổ phần H.C.I</Text>
                </View>
                <Image style={styles.iconHeart} source={icons.heart} />
              </View>
              <View style={{flexDirection: 'row', marginTop: scale(5)}}>
                <Image style={styles.iconJob} source={icons.bag} />
                <Text style={styles.txtStatus}>Toàn thời gian</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: scale(5)}}>
                <Image style={styles.iconJob} source={icons.money} />
                <Text style={styles.txtStatus}>7 - 10 Triệu</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: scale(5)}}>
                <Image style={styles.iconJob} source={icons.local} />
                <Text style={styles.txtStatus}>Hà Nội, Hồ Chí Minh</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewCategory: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
    marginTop: scale(10),
  },
  txtTitle: {
    fontSize: scale(18),
    lineHeight: scale(20),
    color: '#307df1',
    fontWeight: 'bold',
    width: '78%',
  },
  txtSeeMore: {
    fontSize: scale(15),
    lineHeight: scale(20),
    color: '#404040',
  },
  boxCategory: {
    height: scale(100),
    width: scale(90),
    backgroundColor: '#307df1',
    borderRadius: scale(20),
    elevation: 5,
    alignItems: 'center',
    marginRight: scale(20),
    marginVertical: scale(10),
  },
  iconCategory: {
    height: scale(30),
    width: scale(30),
    marginTop: scale(21),
  },
  txtCategory: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#fff',
    marginTop: scale(5),
    flexWrap: 'wrap',
    width: '70%',
    textAlign: 'center',
  },
  boxJob: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
    borderWidth: 0.5,
    borderRadius: scale(20),
    width: scale(240),
    backgroundColor: '#fff',
    elevation: 5,
    marginVertical: scale(10),
  },
  logoJob: {
    width: scale(45),
    height: scale(45),
    marginTop: scale(5),
  },
  txtTitleJob: {
    fontSize: scale(15),
    lineHeight: scale(20),
    color: '#404040',
    fontWeight: '500',
    flexWrap: 'wrap',
  },
  txtAddress: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
  },
  iconHeart: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(5),
  },
  iconJob: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(2),
    marginRight: scale(5),
  },
  txtStatus: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
  },
});
