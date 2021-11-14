import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import icons from '@constant/icons';
import TitleJob from '@components/title/TitleJob';
import {TabView, TabBar} from 'react-native-tab-view';
import InfomationJob from './job_detail/InfomationJob';
import SimilarJob from './job_detail/SimilarJob';
import JobWithEmp from './job_detail/JobWithEmp';
import CalendarJob from './job_detail/CalendarJob';
import Button from '@components/Button/Button';
import Notification from '@components/Notification';

const height = Dimensions.get('window').height;

export default function JobDetailScreen({navigation, route}) {
  const {item} = route.params;

  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleIndexChange = indexTab => {
    setIndex(indexTab);
  };

  const [routes] = React.useState([
    {key: 'info', title: 'THÔNG TIN', type: 0},
    {key: 'job', title: 'LỊCH LÀM VIỆC', type: 1},
    {key: 'skill', title: 'VIỆC LÀM CÙNG NTD', type: 2},
    {key: 'exp', title: 'VIỆC LÀM TƯƠNG TỰ', type: 3},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'info':
        return <InfomationJob />;
      case 'job':
        return <CalendarJob />;
      case 'skill':
        return <JobWithEmp />;
      case 'exp':
        return <SimilarJob />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <View style={styles.TabBar}>
      <TabBar
        {...props}
        scrollEnabled={true}
        indicatorStyle={{backgroundColor: '#307df1'}}
        style={{backgroundColor: '#FFFFFF'}}
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
  return (
    <SafeAreaView style={styles.container}>
      <TitleJob
        icon={icons.heart_wb}
        logo={item.logo}
        title={item.title}
        company={item.company}
        deadline={item.deadline}
        view={item.view}
      />
      <View style={{height: height / 1.4}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={handleIndexChange}
        />
        <View style={styles.content}>
          <TouchableOpacity onPress={toggleModal}>
            <Button
              title="Ứng tuyển"
              color="#fff"
              bg="#307df1"
              right={scale(10)}
            />
          </TouchableOpacity>
          <Button title="Liên hệ" color="#307df1" bg="#fff" />
        </View>
      </View>
      <Notification on={modal} off={toggleModal} />
    </SafeAreaView>
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
  title: color => ({color, fontSize: scale(16), lineHeight: scale(18)}),
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
});
