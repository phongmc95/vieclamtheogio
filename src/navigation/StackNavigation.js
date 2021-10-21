import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTapsNTD from './BottomTaps/BottomTapsNTD';
import BottomTabFlc from './BottomTaps/BottomTabFlc';
import OnbroadScreen from '../screen/intro/OnbroadScreen';
import NotificationScreen from '../screen/freelancer/NotificationScreen';
import SearchScreen from '../screen/freelancer/SearchScreen';
import JobHotScreen from '../screen/freelancer/JobHotScreen';
import FilterScreen from '../screen/freelancer/FilterScreen';
import JobSaved from '../screen/freelancer/job/JobSaved';
import JobPass from '../screen/freelancer/job/JobPass';
import UpdatePassword from '../screen/freelancer/profile/UpdatePassword';
import TabTopFlc from './TabTopFlc';
import UpdateDesiredJob from '../screen/freelancer/profile/UpdateDesiredJob';
import UpdateExperience from '../screen/freelancer/profile/UpdateExperience';
import UpdateInfomation from '../screen/freelancer/profile/UpdateInfomation';
import UpdateSkillPersonal from '../screen/freelancer/profile/UpdateSkillPersonal';
import UpdateWorkSession from '../screen/freelancer/profile/UpdateWorkSession';
import JobDetailScreen from '../screen/freelancer/JobDetailScreen';
import ListJobScreen from '../screen/freelancer/ListJobScreen';
import LoginScreen from '../screen/freelancer/login/LoginScreen';
import RegisterScreen from '../screen/freelancer/login/RegisterScreen';
import OTPScreen from '../screen/freelancer/login/OTPScreen';
import TimeWorking from '../screen/freelancer/login/TimeWorking';
import JobDesied from '../screen/freelancer/login/JobDesied';
import LoadingScreen from '../screen/intro/LoadingScreen';

import LoginNTD from '../screen/NTD/LOGIN/LoginNTD';
import SignInNTD from '../screen/NTD/LOGIN/SignInNTD';
import DistrictNTD from '../screen/NTD/LOGIN/DistrictNTD';
import CityNTD from '../screen/NTD/LOGIN/CityNTD';
import GiaiPhap from '../screen/NTD/TD/GiaiPhap';
import DangTin from '../screen/NTD/TD/DangTin';
import SuaTin from '../screen/NTD/TD/SuaTin';
import Job from '../screen/NTD/TD/Job';
import Sagaly from '../screen/NTD/TD/Sagaly';
import UpdateInfoNTD from '../screen/NTD/ProfileNTD/UpdateInfoNTD';
import ChangePassNTD from '../screen/NTD/ProfileNTD/ChangePassNTD';
import DetailUV from '../screen/NTD/ProfileUV/DetailUV';
import { Provider } from 'react-redux';
import Store from '../redux/store/Store';
import OTP_Confirm from '../screen/NTD/LOGIN/OTP_Confirm';
import SelectNTD from '../screen/NTD/LOGIN/SelectNTD';
import InputEmail from '../screen/NTD/LOGIN/ChangePass/InputEmail';
import InputOTP from '../screen/NTD/LOGIN/ChangePass/InputOTP';
import Filter from '../.../../screen/NTD/UV/Filter';
import ListFilter from '../.../../screen/NTD/UV/ListFilter';
import Filter2 from '../.../../screen/NTD/UV/Filter2';
import ListFilter2 from '../.../../screen/NTD/UV/ListFilter2';
import NewPass from '../screen/NTD/LOGIN/ChangePass/NewPass';
import SplashScreen from '@screens/intro/SplashScreen'

const Stack = createStackNavigator();
const StackNavigation = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#307DF1');
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Intro" component={OnbroadScreen} />

          {/* nhà tuyển dụng */}
          <Stack.Screen name="SelectNTD" component={SelectNTD} />
          <Stack.Screen name="LoginNTD" component={LoginNTD} />
          <Stack.Screen name="InputEmail" component={InputEmail} />
          <Stack.Screen name="InputOTP" component={InputOTP} />
          <Stack.Screen name="NewPass" component={NewPass} />
          <Stack.Screen name="OTP_Confirm" component={OTP_Confirm} />
          <Stack.Screen name="SignInNTD" component={SignInNTD} />
          <Stack.Screen name="DistrictNTD" component={DistrictNTD} />
          <Stack.Screen name="CityNTD" component={CityNTD} />
          <Stack.Screen name="tabNTD" component={BottomTapsNTD} />
          <Stack.Screen name="GiaiPhap" component={GiaiPhap} />
          <Stack.Screen name="DangTin" component={DangTin} />
          <Stack.Screen name="SuaTin" component={SuaTin} />
          <Stack.Screen name="Job" component={Job} />
          <Stack.Screen name="Sagaly" component={Sagaly} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="ListFilter" component={ListFilter} />
          <Stack.Screen name="Filter2" component={Filter2} />
          <Stack.Screen name="ListFilter2" component={ListFilter2} />
          <Stack.Screen name="UpdateInfoNTD" component={UpdateInfoNTD} />
          <Stack.Screen name="ChangePassNTD" component={ChangePassNTD} />
          <Stack.Screen name="DetailUV" component={DetailUV} />

          {/* ứng viên */}
          <Stack.Screen name="TabTopFlc" component={TabTopFlc} />
          <Stack.Screen name="BottomTabFlc" component={BottomTabFlc} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="JobHot" component={JobHotScreen} />
          <Stack.Screen name="Filters" component={FilterScreen} />
          <Stack.Screen name="JobSaved" component={JobSaved} />
          <Stack.Screen name="JobPass" component={JobPass} />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          <Stack.Screen name="UpdateDesiredJob" component={UpdateDesiredJob} />
          <Stack.Screen name="UpdateExperience" component={UpdateExperience} />
          <Stack.Screen name="UpdateInfomation" component={UpdateInfomation} />
          <Stack.Screen name="UpdateSkill" component={UpdateSkillPersonal} />
          <Stack.Screen name="UpdateWork" component={UpdateWorkSession} />
          <Stack.Screen name="JobDetail" component={JobDetailScreen} />
          <Stack.Screen name="ListJob" component={ListJobScreen} />
          <Stack.Screen name="LoginFlc" component={LoginScreen} />
          <Stack.Screen name="RegisterFlc" component={RegisterScreen} />
          <Stack.Screen name="OTPFlc" component={OTPScreen} />
          <Stack.Screen name="TimeWorkingFlc" component={TimeWorking} />
          <Stack.Screen name="JobDesiedFlc" component={JobDesied} />
          <Stack.Screen name="LoadingFlc" component={LoadingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
