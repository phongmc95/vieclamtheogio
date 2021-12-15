import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import TitleJob from '@components/title/TitleJob';
import {TabView, TabBar} from 'react-native-tab-view';
import InfomationJob from './job_detail/InfomationJob';
import CalendarJob from './job_detail/CalendarJob';
import Button from '@components/Button/Button';
import Notification from '@components/Notification';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import fonts from '../../constant/fonts';
import {callPhone, sendEmail} from '../../components/Contact';
import colors from '../../constant/colors';
import ModalStyle from '../../components/ModalStyle';
import {useIsFocused} from '@react-navigation/native';

const height = Dimensions.get('window').height;

export default function JobDetailScreen({navigation, route}) {
  const {id} = route.params;
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({_id: null});
  const user = useSelector(state => state.Authen);
  const [contact, setContact] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const isFocused = useIsFocused();
  const [idSave, setIdSave] = useState('');

  useFocusEffect(
    useCallback(() => {
      getDetailJob();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]),
  );

  const getDetailJob = () => {
    var config = {
      method: 'get',
      url: `https://fpt-jobs-api.herokuapp.com/api/v1/jobs/${id}`,
    };

    axios(config)
      .then(function (response) {
        setData(response.data);
        if (response.data.job.save_job.length > 0) {
          const data = response.data.job.save_job.find(
            item => item.userId === user.data.user.userId,
          );
          setIsSave(data.is_save);
          setIdSave(data._id);
        }
      })
      .catch(error => {
        console.log(error);
        // setOpenError(true);
      });
  };

  const apply = () => {
    var config = {
      method: 'patch',
      url: `https://fpt-jobs-api.herokuapp.com/api/v1/jobs/${id}/aplied`,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toggleModal();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleSuccess = () => {
    setIsOpen(!isOpen);
  };

  const toggleContact = () => {
    setContact(!contact);
  };

  const handleIndexChange = indexTab => {
    setIndex(indexTab);
  };

  const [routes] = React.useState([
    {key: 'info', title: 'THÔNG TIN', type: 0},
    {key: 'job', title: 'LỊCH LÀM VIỆC', type: 1},
    // {key: 'skill', title: 'VIỆC LÀM CÙNG NTD', type: 2},
    // {key: 'exp', title: 'VIỆC LÀM TƯƠNG TỰ', type: 3},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'info':
        return <InfomationJob data={data} />;
      case 'job':
        return <CalendarJob item={data} />;
      // case 'skill':
      //   return <JobWithEmp list={data.job} />;
      // case 'exp':
      //   return <SimilarJob list={data.job} />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <View style={styles.TabBar}>
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={styles.blue}
        style={styles.white}
        tabStyle={styles.widthTab}
        inactiveColor={'#404040'}
        activeColor={'#307df1'}
        renderLabel={({route, color}) => (
          <View style={styles.align}>
            <Text style={styles.title(color)}>{route.title}</Text>
          </View>
        )}
      />
    </View>
  );

  const save = () => {
    var data = JSON.stringify({
      is_save: true,
      id_save: idSave,
    });

    var config = {
      method: 'patch',
      url: `https://fpt-jobs-api.herokuapp.com/api/v1/jobs/save-job/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toggleSuccess();
        getDetailJob();
        setIsSave(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <TitleJob
        icon={icons.whiteDislike}
        logo={data?.job?.user_create?.avatar}
        title={data?.job?.job_posting_position}
        company={data?.job?.career}
        deadline={data?.job?.last_date}
        handleSave={save}
        type={isSave}
      />
      <View style={{height: height / 1.4}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={handleIndexChange}
        />
        <View style={styles.content}>
          <TouchableOpacity onPress={apply}>
            <Button
              title="Ứng tuyển"
              color="#fff"
              bg="#307df1"
              right={scale(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleContact}>
            <Button title="Liên hệ" color="#307df1" bg="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <Notification
        on={modal}
        off={toggleModal}
        content1="Yêu cầu nhận việc của bạn đã được gửi tới Nhà tuyển dụng"
        title="THÔNG BÁO"
      />
      <Notification
        on={isOpen}
        off={toggleSuccess}
        content1="Lưu tin thành công!!!"
        title="THÔNG BÁO"
      />
      <Notification
        title="LIÊN HỆ"
        on={contact}
        off={toggleContact}
        content={
          <View style={{bottom: scale(20)}}>
            <Text style={styles.txtContact}>
              Người liên hệ: {data?.job?.contact_info?.contact_person}
            </Text>
            <Text style={styles.txtContact}>
              Địa chỉ: {data?.job?.contact_info?.contact_address}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txtContact}>Số điện thoại:</Text>
              <TouchableOpacity
                onPress={() =>
                  callPhone(data?.job?.contact_info?.contact_phone)
                }>
                <Text
                  style={{
                    marginLeft: scale(5),
                    marginTop: scale(2),
                    color: colors.BLUE,
                    textDecorationLine: 'underline',
                  }}>
                  {data?.job?.contact_info?.contact_phone}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txtContact}>Email:</Text>
              <TouchableOpacity
                onPress={() =>
                  sendEmail(data?.job?.contact_info?.contact_email)
                }>
                <Text
                  style={{
                    marginLeft: scale(5),
                    marginTop: scale(2),
                    color: colors.BLUE,
                    textDecorationLine: 'underline',
                  }}>
                  {data?.job?.contact_info?.contact_email}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
      <ModalStyle
        isVisible={openError}
        onBackdropPress={() => navigation.goBack()}
        content="Công việc không tồn tại!!!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleBox: {
    width: '100%',
    height: scale(198),
    backgroundColor: '#307df1',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
  },
  title: color => ({color, fontSize: scale(16), fontFamily: fonts.NORMAL}),
  content: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: scale(8),
    bottom: 20,
  },
  align: {alignItems: 'center'},
  widthTab: {width: scale(180)},
  blue: {backgroundColor: '#307df1'},
  white: {backgroundColor: '#ffffff'},
  txtContact: {
    fontSize: scale(12),
    fontFamily: fonts.NORMAL,
    marginVertical: scale(2),
  },
});
