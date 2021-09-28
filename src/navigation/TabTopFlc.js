import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ExperienceScreen from '../screen/freelancer/profile/ExperienceScreen';
import InfomationScreen from '../screen/freelancer/profile/InfomationScreen';
import SkillPersonalScreen from '../screen/freelancer/profile/SkillPersonalScreen';
import WorkSessionScreen from '../screen/freelancer/profile/WorkSessionScreen';

const Tab = createMaterialTopTabNavigator();

export default function TabTopFlc() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Experience" component={ExperienceScreen} />
      <Tab.Screen name="Infomation" component={InfomationScreen} />
      <Tab.Screen name="SkillPersonal" component={SkillPersonalScreen} />
      <Tab.Screen name="WorkSession" component={WorkSessionScreen} />
    </Tab.Navigator>
  );
}
