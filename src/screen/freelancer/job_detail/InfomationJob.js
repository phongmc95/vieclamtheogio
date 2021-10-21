import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import Button from '@components/Button/Button'

export default function InfomationJob() {
  return (
    <ScrollView>
      <View style={{padding: scale(20), height: '100%'}}>
        <View style={{flexDirection: 'row', marginTop: scale(5)}}>
          <Image style={styles.iconJob} source={icons.bigmoney} />
          <Text style={styles.txtStatus}>
            Mức lương: <Text style={{fontWeight: 'normal'}}>30.000đ/giờ</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(5)}}>
          <Image style={styles.iconJob} source={icons.group} />
          <Text style={styles.txtStatus}>
            Số lượng tuyển dụng: <Text style={{fontWeight: 'normal'}}>20</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(5), width: '90%'}}>
          <Image style={styles.iconJob} source={icons.local} />
          <Text style={[styles.txtStatus, {flexWrap: 'wrap'}]}>
            Nơi làm việc:{' '}
            <Text style={{fontWeight: 'normal'}}>
              122 Định Công, P. Định Công, Q Hoàng Mai, TP. Hà Nội
            </Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(5)}}>
          <Image style={styles.iconJob} source={icons.sex} />
          <Text style={styles.txtStatus}>
            Giới tính: <Text style={{fontWeight: 'normal'}}>Nữ</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(5)}}>
          <Image style={styles.iconJob} source={icons.globe} />
          <Text style={styles.txtStatus}>
            Ngành nghề: <Text style={{fontWeight: 'normal'}}>Tự do</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(5)}}>
          <Image style={styles.iconJob} source={icons.graduate_blue} />
          <Text style={styles.txtStatus}>
            Học vấn tối thiểu:{' '}
            <Text style={{fontWeight: 'normal'}}>Trung cấp</Text>
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: scale(5)}}>
          <Image style={styles.iconJob} source={icons.bag_w} />
          <Text style={styles.txtStatus}>
            Loại công việc:{' '}
            <Text style={{fontWeight: 'normal'}}>Bán thời gian</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: scale(5),
            marginBottom: scale(30),
          }}>
          <Image style={styles.iconJob} source={icons.hand} />
          <Text style={styles.txtStatus}>
            Hình thức trả lương:{' '}
            <Text style={{fontWeight: 'normal'}}>Theo giờ</Text>
          </Text>
        </View>
        <View style={{marginBottom: scale(20)}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.dot} source={icons.dot} />
            <Text style={styles.txtTitle}>MÔ TẢ CÔNG VIỆC</Text>
          </View>
          <View>
            <Text>
              - Xử lý lên/xuống hàng hoá từ xe tải ( hàng được đóng bao tải sẵn
              ) không giống bốc vác, chỉ xuống hàng nhẹ. - Xử lý phân loại các
              hàng hoá theo khu vực. - Bàn giao hàng hoá cho các nhân viên giao
              hàng.{' '}
            </Text>
          </View>
        </View>
        <View style={{marginBottom: scale(20)}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.dot} source={icons.dot} />
            <Text style={styles.txtTitle}> YÊU CẦU CÔNG VIỆC</Text>
          </View>
          <View>
            <Text>
              - Tuổi : 18t - 35t - Giới tính : chỉ tuyển nữ - Điều kiện sức khoẻ
              tốt
            </Text>
          </View>
        </View>

        <View style={{marginBottom: scale(20)}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.dot} source={icons.dot} />
            <Text style={styles.txtTitle}>QUYỀN LỢI ĐƯỢC HƯỞNG</Text>
          </View>
          <View>
            <Text>- Chính sách thưởng theo chuyên cần</Text>
          </View>
        </View>

        <View style={{marginBottom: scale(20)}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.dot} source={icons.dot} />
            <Text style={styles.txtTitle}>HỒ SƠ BAO GỒM</Text>
          </View>
          <View>
            <Text>- Sơ yêu lý lịch - Đơn xin việc - Các giấy tờ liên quan</Text>
          </View>
        </View>

        <View style={{marginBottom: scale(20)}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.dot} source={icons.dot} />
            <Text style={styles.txtTitle}>THÔNG TIN LIÊN HỆ</Text>
          </View>
          <View>
            <Text>
              - Người liên hệ: Nguyễn Quỳnh Trang - Địa chỉ: 122 Định Công, P.
              Định Công, Q. Hoàng Mai, TP. Hà Nội- Hạn nộp: 12/9/2020
            </Text>
          </View>
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconJob: {
    height: scale(18),
    width: scale(20),
    marginTop: scale(2),
    marginRight: scale(10),
  },
  txtStatus: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    fontWeight: 'bold',
  },
  txtTitle: {
    fontSize: scale(18),
    color: '#404040',
    fontWeight: 'bold',
  },
  dot: {
    height: scale(5),
    width: scale(5),
    marginTop: scale(10),
    marginRight: scale(10),
  },
});
