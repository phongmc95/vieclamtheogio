import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
import UpdateExperience from '../screen/freelancer/profile/UpdateExperience';
import UpdateInfomation from '../screen/freelancer/profile/UpdateInfomation';
import UpdateSkillPersonal from '../screen/freelancer/profile/UpdateSkillPersonal';
import UpdateWorkSession from '../screen/freelancer/profile/UpdateWorkSession';
import JobDetailScreen from '../screen/freelancer/JobDetailScreen';
import ListJobScreen from '../screen/freelancer/ListJobScreen';
import Login from '../screen/authen/Login';
import Resgister from '../screen/authen/Resgister';
import GiaiPhap from '../screen/NTD/TD/GiaiPhap';
import DangTin from '../screen/NTD/TD/DangTin';
import SuaTin from '../screen/NTD/TD/SuaTin';
import Job from '../screen/NTD/TD/Job';
import Sagaly from '../screen/NTD/TD/Sagaly';
import UpdateInfoNTD from '../screen/NTD/ProfileNTD/UpdateInfoNTD';
import ChangePassNTD from '../screen/NTD/ProfileNTD/ChangePassNTD';
import DetailUV from '../screen/NTD/ProfileUV/DetailUV';
import OTP_Confirm from '../screen/authen/OTP_Confirm';
import SelectLogIn from '../screen/authen/SelectLogIn';
import InputEmail from '../screen/authen/ChangePass/InputEmail';
import InputOTP from '../screen/authen/ChangePass/InputOTP';
import Filter from '../.../../screen/NTD/UV/Filter';
import ListFilter from '../.../../screen/NTD/UV/ListFilter';
import Filter2 from '../.../../screen/NTD/UV/Filter2';
import ListFilter2 from '../.../../screen/NTD/UV/ListFilter2';
import NewPass from '../screen/authen/ChangePass/NewPass';
import SplashScreen from '../screen/intro/SplashScreen';
import {Provider} from 'react-redux';
import UpdateDesiredJob from '../screen/freelancer/profile/UpdateDesiredJob';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../redux/store/Store';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Intro" component={OnbroadScreen} />
            <Stack.Screen name="SelectLogIN" component={SelectLogIn} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="InputEmail" component={InputEmail} />
            <Stack.Screen name="InputOTP" component={InputOTP} />
            <Stack.Screen name="NewPass" component={NewPass} />
            <Stack.Screen name="OTP_Confirm" component={OTP_Confirm} />
            <Stack.Screen name="Resgister" component={Resgister} />
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
            <Stack.Screen
              name="UpdateDesiredJob"
              component={UpdateDesiredJob}
            />
            <Stack.Screen
              name="UpdateExperience"
              component={UpdateExperience}
            />
            <Stack.Screen
              name="UpdateInfomation"
              component={UpdateInfomation}
            />
            <Stack.Screen name="UpdateSkill" component={UpdateSkillPersonal} />
            <Stack.Screen name="UpdateWork" component={UpdateWorkSession} />
            <Stack.Screen name="JobDetail" component={JobDetailScreen} />
            <Stack.Screen name="ListJob" component={ListJobScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default StackNavigation;
