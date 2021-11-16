import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon, PhanTich, Bongden} from '../../../../assets/icon';

const GiaiPhap = ({navigation}) => {
  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Tuyển dụng</Text>
      </View>
      {/* main */}
      <ScrollView style={styles.ScrollView}>
        {/* view1 */}
        <View style={styles.ViewFlatlist}>
          <View style={styles.viewRow}>
            <Text style={styles.TextL}>Công ty đang tuyển</Text>
            <Text style={styles.TextR}>Thợ hồ</Text>
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.TextL}>Ngành nghề</Text>
            <Text style={styles.TextR}>Xây dựng</Text>
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.TextL}>Mức độ cạnh tranh</Text>
            <Text style={styles.TextR}>Nhiều</Text>
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.TextL}>Khu vực</Text>
            <Text style={styles.TextR}>Hà Nội</Text>
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.TextL}>Số lượng ứng viên</Text>
            <Text style={styles.TextR}>Nhiều</Text>
          </View>
        </View>
        {/* view2 */}
        <View style={[styles.ViewFlatlist, {height: scale(237)}]}>
          <View style={{flexDirection: 'row', marginLeft: scale(15)}}>
            <View style={{marginTop: scale(10)}}>
              <PhanTich />
            </View>
            <Text style={styles.TextTitle}>Phân tích hệ thống</Text>
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.TextL}>Lượt xem tin tuyển dụng</Text>
            <Text style={styles.TextR}>Nhiều</Text>
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.TextL}>Lượt ứng tuyển</Text>
            <Text style={styles.TextR}>10</Text>
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.TextL}>Tỉ lệ ứng tuyển / lượt xem</Text>
            <Text style={styles.TextR}>5%</Text>
          </View>
          <View style={{width: scale(310), marginLeft: scale(15)}}>
            <Text style={styles.content}>
              Tỷ lệ này rất thấp so với thực tế. Để có ứng viên xem và ứng tuyển
              quý công ty thực hiện: Tối ưu nội dung tin đăng, làm mới nội dung.
            </Text>
          </View>
        </View>
        {/* view3 */}
        <View style={{flexDirection: 'row', marginLeft: scale(15)}}>
          <View style={{marginTop: scale(10)}}>
            <Bongden />
          </View>
          <Text style={styles.TextTitle}>Đề xuất giải pháp</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={[styles.TextL, {color: '#FFA800'}]}>Giải pháp 1</Text>
          <TouchableOpacity>
            <Text style={styles.TextR}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: scale(310), marginLeft: scale(15)}}>
          <Text style={styles.content}>
            Tỷ lệ này rất thấp so với thực tế. Để có ứng viên xem và ứng tuyển
            quý công ty thực hiện: Tối ưu nội dung tin đăng, làm mới nội dung.
          </Text>
        </View>
        {/* giaiphap2 */}
        <View style={styles.viewRow}>
          <Text style={[styles.TextL, {color: '#FFA800'}]}>Giải pháp 2</Text>
          <TouchableOpacity>
            <Text style={styles.TextR}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: scale(310), marginLeft: scale(15)}}>
          <Text style={styles.content}>
            Tỷ lệ này rất thấp so với thực tế. Để có ứng viên xem và ứng tuyển
            quý công ty thực hiện: Tối ưu nội dung tin đăng, làm mới nội dung.
          </Text>
        </View>
        {/* giaiphap3 */}
        <View style={styles.viewRow}>
          <Text style={[styles.TextL, {color: '#FFA800'}]}>Giải pháp 3</Text>
          <TouchableOpacity>
            <Text style={styles.TextR}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: scale(310), marginLeft: scale(15)}}>
          <Text style={styles.content}>
            Tỷ lệ này rất thấp so với thực tế. Để có ứng viên xem và ứng tuyển
            quý công ty thực hiện: Tối ưu nội dung tin đăng, làm mới nội dung.
          </Text>
        </View>
        <View
          style={{
            marginTop: scale(35),
            borderBottomWidth: 1,
            borderColor: 'black',
          }}
        />
        <View
          style={{
            width: scale(310),
            marginLeft: scale(15),
            marginTop: scale(10),
          }}>
          <Text style={styles.content}>
            Để có thể nghe tư vấn rõ hơn về cách tối ưu nội dung đăng tin và sử
            dụng dịch vụ giúp tuyển dụng nhanh chóng hiệu quả hãy gọi chuyên
            viên hỗ trợ :
          </Text>
          <Text style={styles.TextR}>Mai Hương(0904646975)</Text>
          <Text style={styles.content}>hotline</Text>
          <Text style={styles.TextR}> 0329 39.88.58 | 024 36.36.66.99</Text>
          <Text style={styles.content}>
            Chúng tôi luôn hỗ trợ tuyển dụng 24/24h kể cả ngày nghỉ và lễ tết.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default GiaiPhap;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(60),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
    marginLeft: scale(20),
  },
  goback: {
    marginLeft: scale(10),
  },
  ScrollView: {
    margin: scale(3),
    marginBottom: scale(20),
  },
  ViewFlatlist: {
    width: scale(335),
    height: scale(155),
    borderWidth: scale(0.5),
    overflow: 'hidden',
    borderRadius: scale(20),
    borderColor: '#307DF1',
    backgroundColor: 'white',
    margin: scale(5),
    marginTop: scale(15),
  },
  TextTitle: {
    fontWeight: '500',
    fontSize: scale(16),
    color: '#307DF1',
    marginLeft: scale(15),
    marginTop: scale(10),
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: scale(5),
  },
  TextL: {
    fontWeight: '500',
    fontSize: scale(16),
    marginLeft: scale(10),
  },
  TextR: {
    fontWeight: '500',
    fontSize: scale(16),
    color: '#307DF1',
    marginRight: scale(10),
  },
  content: {
    fontWeight: '400',
    fontSize: scale(16),
    color: '#404040',
  },
});
