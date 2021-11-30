import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import Button from '@components/Button/Button';
import fonts from '../../../constant/fonts';
import moment from 'moment';

export default function InfomationJob({data}) {
  return (
    <View>
      <ScrollView>
        <View style={{padding: scale(20), height: '100%'}}>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
            <Image style={styles.iconJob} source={icons.bigmoney} />
            <Text style={styles.txtStatus}>
              Mức lương:{' '}
              <Text style={{fontWeight: 'normal'}}>{data?.job?.salary}</Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
            <Image style={styles.iconJob} source={icons.group} />
            <Text style={styles.txtStatus}>
              Số lượng tuyển dụng:{' '}
              <Text style={{fontWeight: 'normal'}}>
                {data?.job?.quantity_recruited}
              </Text>
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: scale(5), width: '90%'}}>
            <Image style={styles.iconJob} source={icons.local} />
            <Text style={[styles.txtStatus, {flexWrap: 'wrap'}]}>
              Nơi làm việc:{' '}
              <Text style={{fontWeight: 'normal'}}>
                {data?.job?.work_location}
              </Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
            <Image style={styles.iconJob} source={icons.globe} />
            <Text style={styles.txtStatus}>
              Ngành nghề:{' '}
              <Text style={{fontWeight: 'normal'}}>{data?.job?.career}</Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
            <Image style={styles.iconJob} source={icons.graduate_blue} />
            <Text style={styles.txtStatus}>
              Học vấn tối thiểu:{' '}
              <Text style={{fontWeight: 'normal'}}>
                {data?.job?.min_education[0]}
              </Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: scale(5)}}>
            <Image style={styles.iconJob} source={icons.bag_w} />
            <Text style={styles.txtStatus}>
              Loại công việc:{' '}
              <Text style={{fontWeight: 'normal'}}>
                {data?.job?.working_form}
              </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: scale(5),
              marginBottom: scale(30),
            }}>
            {/* <Image style={styles.iconJob} source={icons.hand} />
            <Text style={styles.txtStatus}>
              Hình thức trả lương:{' '}
              <Text style={{fontWeight: 'normal'}}>{data?.job?.rose}</Text>
            </Text> */}
          </View>
          <View style={{marginBottom: scale(20)}}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.dot} source={icons.dot} />
              <Text style={styles.txtTitle}>MÔ TẢ CÔNG VIỆC</Text>
            </View>
            <View>
              <Text style={styles.txtStatus1}>
                {data?.job?.job_description}
              </Text>
            </View>
          </View>
          <View style={{marginBottom: scale(20)}}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.dot} source={icons.dot} />
              <Text style={styles.txtTitle}> YÊU CẦU CÔNG VIỆC</Text>
            </View>
            <View>
              <Text style={styles.txtStatus1}>
                {data?.job?.job_requirements[0]}
              </Text>
            </View>
          </View>

          <View style={{marginBottom: scale(20)}}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.dot} source={icons.dot} />
              <Text style={styles.txtTitle}>QUYỀN LỢI ĐƯỢC HƯỞNG</Text>
            </View>
            <View>
              <Text style={styles.txtStatus1}>
                {data?.job?.benefits_enjoyed}
              </Text>
            </View>
          </View>

          <View style={{marginBottom: scale(20)}}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.dot} source={icons.dot} />
              <Text style={styles.txtTitle}>HỒ SƠ BAO GỒM</Text>
            </View>
            <View>
              <Text style={styles.txtStatus1}>
                {data?.job?.records_include}
              </Text>
            </View>
          </View>

          {/* <View style={{marginBottom: scale(20)}}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.dot} source={icons.dot} />
              <Text style={styles.txtTitle}>THÔNG TIN LIÊN HỆ</Text>
            </View>
            <View>
              <Text style={styles.txtStatus1}>
                - Người liên hệ: {data?.job?.contact_info.contact_person}
              </Text>
              <Text style={styles.txtStatus1}>
                - Địa chỉ: {data?.job?.contact_info.contact_address}
              </Text>
              <Text style={styles.txtStatus1}>
                - Hạn nộp:{' '}
                {moment(data?.job?.contact_info.last_date).format('DD/MM/YYYY')}
              </Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </View>
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
    fontFamily: fonts.BOLD,
  },

  txtStatus1: {
    fontSize: scale(12),
    lineHeight: scale(20),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },
  txtTitle: {
    fontSize: scale(18),
    color: '#404040',
    fontFamily: fonts.BOLD,
  },
  dot: {
    height: scale(5),
    width: scale(5),
    marginTop: scale(10),
    marginRight: scale(10),
  },
});
