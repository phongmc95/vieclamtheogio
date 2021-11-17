import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon, Selecter, DateIcon} from '../../../../assets/icon';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';
import Sagaly from './Sagaly';

const DangTin = ({navigation}) => {
  const [check, setCheck] = useState(false);

  const b = {id: 2, ca: 'ca2'};
  const [DATA, setDaTa] = useState([
    {
      id: 1,
      ca: 'ca1',
    },
  ]);

  const [title, setTitle] = useState('');
  const [soluong, setSoluong] = useState('');
  const [cate, setCate] = useState(null);
  const [capbac, setCapbac] = useState(null);
  const [thuviec, setThuviec] = useState('');
  const [hoahong, setHoahong] = useState('');
  const [city, setCity] = useState(null);
  const [qh, setQh] = useState(null);
  const [htlv, setHtlv] = useState(null);
  const [ht_luong, setHt_luong] = useState(null);
  const [mucluong, setMucluong] = useState('');
  const [traluong, setTraluong] = useState(null);
  const [hocvan, setHocvan] = useState(null);
  const [mota, setMota] = useState('');
  const [gioitinh, setGioitinh] = useState(null);
  const [yeucau, setYeucau] = useState('');
  const [quyenloi, setQuyenloi] = useState('');
  const [hoso, setHoso] = useState('');
  const [namelh, setNamelh] = useState('');
  const [phonelh, setPhonelh] = useState('');
  const [addlh, setAddlh] = useState('');
  const [emaillh, setEmaillh] = useState('');
  const [timeFirst, setTimefirst] = useState('');
  const [timelast, setTimelast] = useState('');
  const [ca1timefirst, setCa1timefirst] = useState('');
  const [ca1timelast, setCa1timelast] = useState('');
  const [day1, setday1] = useState('');

  const [ca2timefirst, setCa2timefirst] = useState('');
  const [ca2timelast, setCa2timelast] = useState('');
  const [day2, setday2] = useState('');

  const [ca3timefirst, setCa3timefirst] = useState('');
  const [ca3timelast, setCa3timelast] = useState('');
  const [day3, setday3] = useState('');

  const [ca4timefirst, setCa4timefirst] = useState('');
  const [ca4timelast, setCa4timelast] = useState('');
  const [day4, setday4] = useState('');

  const [ca5timefirst, setCa5timefirst] = useState('');
  const [ca5timelast, setCa5timelast] = useState('');
  const [day5, setday5] = useState('');
  const renderItem = ({}) => (
    <View style={styles.ViewFL}>
      <Text style={styles.TextTitle}>Thời gian</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{marginTop: scale(15)}}>Từ</Text>
        <View
          style={[styles.boxInput, {flexDirection: 'row', width: scale(125)}]}>
          <TextInput placeholder="dd/mm/yy" style={styles.textInput} />
          <TouchableOpacity style={styles.Selecter}>
            <DateIcon />
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: scale(15)}}>Đến</Text>
        <View
          style={[styles.boxInput, {flexDirection: 'row', width: scale(125)}]}>
          <TextInput placeholder="dd/mm/yy" style={styles.textInput} />
          <TouchableOpacity style={styles.Selecter}>
            <DateIcon />
          </TouchableOpacity>
        </View>
      </View>
      {/* view */}
      <Text style={styles.TextTitle}>Ca 1</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{marginTop: scale(15)}}>Từ</Text>
        <View
          style={[styles.boxInput, {flexDirection: 'row', width: scale(125)}]}>
          <TextInput placeholder="VD: 6.00" style={styles.textInput} />
        </View>
        <Text style={{marginTop: scale(15)}}>Đến</Text>
        <View
          style={[styles.boxInput, {flexDirection: 'row', width: scale(125)}]}>
          <TextInput placeholder="VD: 10.00" style={styles.textInput} />
        </View>
      </View>

      {/* view */}
    </View>
  );
  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Đăng tin</Text>
      </View>
      {/* main */}
      <ScrollView style={{marginBottom: scale(50)}}>
        <View style={styles.main}>
          <View>
            <Text style={styles.TextTitle}>Vị trí đăng tuyển *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: Đầu bếp"
                style={styles.textInput}
                value={title}
                onChangeText={input => setTitle(input)}
              />
            </View>
          </View>
          {/* selcter */}
          <View>
            <Text style={styles.TextTitle}>Ngành nghề *</Text>
            <View style={[styles.boxInput, {flexDirection: 'row'}]}>
              <TextInput placeholder="VD: Đầu bếp" style={styles.textInput} />
              <TouchableOpacity
                style={styles.Selecter}
                onPress={() => navigation.navigate('Job')}>
                <Selecter />
              </TouchableOpacity>
            </View>
          </View>
          {/* ---- */}
          <View>
            <Text style={styles.TextTitle}>Số lượng cần tuyển *</Text>
            <View style={styles.boxInput}>
              <TextInput placeholder="VD: 10" style={styles.textInput} />
            </View>
          </View>
          {/* selcter */}
          <View>
            <Text style={styles.TextTitle}>Cấp bậc *</Text>
            <View style={[styles.boxInput, {flexDirection: 'row'}]}>
              <TextInput placeholder="Chọn cấp bậc" style={styles.textInput} />
              <TouchableOpacity style={styles.Selecter}>
                <Selecter />
              </TouchableOpacity>
            </View>
          </View>
          {/* ---- */}
          {/* selcter */}
          <View>
            <Text style={styles.TextTitle}>Địa điểm làm việc *</Text>
            <View style={[styles.boxInput, {flexDirection: 'row'}]}>
              <TextInput placeholder="Chọn địa điểm" style={styles.textInput} />
              <TouchableOpacity style={styles.Selecter}>
                <Selecter />
              </TouchableOpacity>
            </View>
          </View>
          {/* ---- */}
          {/* selcter */}
          <View>
            <Text style={styles.TextTitle}>Quận huyện làm việc *</Text>
            <View style={[styles.boxInput, {flexDirection: 'row'}]}>
              <TextInput
                placeholder="Chọn quận huyện"
                style={styles.textInput}
              />
              <TouchableOpacity style={styles.Selecter}>
                <Selecter />
              </TouchableOpacity>
            </View>
          </View>
          {/* ---- */}
          {/* selcter */}
          <View>
            <Text style={styles.TextTitle}>Hình thức làm việc *</Text>
            <View style={[styles.boxInput, {flexDirection: 'row'}]}>
              <TextInput
                placeholder="Chọn hình thức"
                style={styles.textInput}
              />
              <TouchableOpacity style={styles.Selecter}>
                <Selecter />
              </TouchableOpacity>
            </View>
          </View>
          {/* ---- */}
          {/* selcter */}
          <View>
            <Text style={styles.TextTitle}>Mức lương *</Text>
            <View style={[styles.boxInput, {flexDirection: 'row'}]}>
              <TextInput
                placeholder="Chọn mức lương"
                style={styles.textInput}
              />
              <TouchableOpacity
                style={styles.Selecter}
                onPress={() => navigation.navigate('Sagaly')}>
                <Selecter />
              </TouchableOpacity>
            </View>
          </View>
          {/* ---- */}
          {/* selcter */}
          <View>
            <Text style={styles.TextTitle}>Trình độ học vấn *</Text>
            <View style={[styles.boxInput, {flexDirection: 'row'}]}>
              <TextInput
                placeholder="Chọn trình độ học vấn"
                style={styles.textInput}
              />
              <TouchableOpacity style={styles.Selecter}>
                <Selecter />
              </TouchableOpacity>
            </View>
          </View>
          {/* ---- */}
          <View>
            <Text style={styles.TextTitle}>Thời gian thử việc *</Text>
            <View style={styles.boxInput}>
              <TextInput placeholder="VD: 1 tuần" style={styles.textInput} />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Hoa hồng *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: Từ 10%-20%"
                style={styles.textInput}
              />
            </View>
          </View>
          <Text style={{fontSize: scale(16), fontWeight: '500'}}>
            LỊCH LÀM VIỆC
          </Text>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
          <View style={{marginLeft: scale(190)}}>
            <TouchableOpacity
              onPress={() =>
                setDaTa([
                  {
                    id: 1,
                    ca: 'ca1',
                  },
                  b,
                ])
              }>
              <Text
                style={{
                  paddingVertical: scale(5),
                  paddingHorizontal: scale(10),
                  color: '#307DF1',
                  borderColor: '#307DF1',
                  borderWidth: scale(1),
                  overflow: 'hidden',
                  borderRadius: scale(30),
                  margin: scale(5),
                }}>
                +Thêm ca
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={{fontSize: scale(16), fontWeight: '500'}}>
            MÔ TẢ CÔNG VIỆC
          </Text>
          <View>
            <Text style={styles.TextTitle}>Vị trí đăng tuyển *</Text>
            <View style={[styles.boxInput, {height: scale(105)}]}>
              <TextInput
                placeholder="Nhập tối thiểu 50 từ"
                style={styles.textInput}
              />
            </View>
          </View>
          <Text style={{fontSize: scale(16), fontWeight: '500'}}>
            YÊU CẦU CÔNG VIỆC
          </Text>
          <View style={{marginRight: scale(150)}}>
            <Text style={styles.TextTitle}>Giới tính *</Text>
            <CircleCheckBox
              checked={check}
              onToggle={checked => setCheck(!check)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Nam"
              outerColor="#307DF1"
              innerColor="#307DF1"
            />
            <CircleCheckBox
              checked={false}
              onToggle={checked => console.log('My state is: ', checked)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Nữ"
              outerColor="#307DF1"
              innerColor="#307DF1"
            />
            <CircleCheckBox
              checked={false}
              onToggle={checked => console.log('My state is: ', checked)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Không yêu cầu"
              outerColor="#307DF1"
              innerColor="#307DF1"
            />
          </View>
          <View>
            <Text style={styles.TextTitle}>Yêu cầu công việc *</Text>
            <View style={[styles.boxInput, {height: scale(105)}]}>
              <TextInput
                placeholder="Nhập tối thiểu 50 từ"
                style={styles.textInput}
              />
            </View>
          </View>
          <Text style={{fontSize: scale(16), fontWeight: '500'}}>
            QUYỀN LỢI ĐƯỢC HƯỞNG
          </Text>
          <View>
            <Text style={styles.TextTitle}>Quyền lợi được hưởng *</Text>
            <View style={[styles.boxInput, {height: scale(105)}]}>
              <TextInput
                placeholder="Nhập tối thiểu 50 từ"
                style={styles.textInput}
              />
            </View>
          </View>
          <Text style={{fontSize: scale(16), fontWeight: '500'}}>
            HỒ SƠ BAO GỒM
          </Text>
          <View>
            <Text style={styles.TextTitle}>Hồ sơ bao gồm *</Text>
            <View style={[styles.boxInput, {height: scale(105)}]}>
              <TextInput
                placeholder="Nhập tối thiểu 50 từ"
                style={styles.textInput}
              />
            </View>
          </View>
          <Text style={{fontSize: scale(16), fontWeight: '500'}}>
            THÔNG TIN LIÊN HỆ
          </Text>
          <View>
            <Text style={styles.TextTitle}>Tên người liên hệ *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: Hà Anh Tuấn"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Địa chỉ liên hệ *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: 05 Cẩm Khê"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Số điện thoại liên hệ *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: Từ 0367289911"
                style={styles.textInput}
              />
            </View>
          </View>
          <View>
            <Text style={styles.TextTitle}>Email liên hệ *</Text>
            <View style={styles.boxInput}>
              <TextInput
                placeholder="VD: tuanhaph09959@gmail.com"
                style={styles.textInput}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: scale(40),
            }}>
            <TouchableOpacity>
              <Text style={styles.btnL}>Đăng tin</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.btnR}>hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DangTin;

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
  main: {
    alignItems: 'center',
  },
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: scale(5),
    borderRadius: scale(5),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(5),
  },
  TextTitle: {
    fontWeight: '500',
    fontSize: scale(16),
    marginLeft: scale(5),
    marginTop: scale(10),
  },
  Selecter: {
    width: scale(25),

    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewFL: {
    borderBottomWidth: scale(1),
    borderColor: 'black',
  },
  btnDay: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: scale(20),
  },
  btnL: {
    paddingHorizontal: scale(35),
    paddingVertical: scale(11),
    backgroundColor: '#307DF1',
    color: 'white',
    fontSize: scale(16),
    fontWeight: '500',
    borderRadius: scale(30),
    margin: scale(5),
  },
  btnR: {
    paddingHorizontal: scale(51),
    paddingVertical: scale(11),
    backgroundColor: 'white',
    color: '#307DF1',
    borderWidth: scale(1),
    borderColor: '#307DF1',
    fontSize: scale(16),
    fontWeight: '500',
    borderRadius: scale(30),
    margin: scale(5),
  },
});
