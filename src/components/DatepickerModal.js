import React, {useState} from 'react';
import { View, Button, Platform, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import { scale } from "react-native-size-matters";
import fonts from "../constant/fonts";
const DatepickerModal=({isVisible,onChange,value})=>{
  const [date, setDate] = useState(new Date());
  return(
    <>
    {isVisible&&
      <DateTimePicker

        value={date}

        mode={'date'}
        onChange={onChange}


      />
    }
    </>




  )
}
export  default  DatepickerModal
const styles = StyleSheet.create({
  viewModal: {
    maxHeight: '60%',
    backgroundColor: '#F5F5FF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: scale(20),
  },
  title: {
    fontSize: scale(24),
    color: '#307df1',
    fontFamily: fonts.BOLD,
    marginBottom: scale(20),
    textAlign: 'center',
  },
  viewContent: {
    borderBottomWidth: 1,
    paddingVertical: scale(15),
    paddingHorizontal: scale(10),
  },
  txtContent: {
    fontSize: scale(18),
    color: '#404040',
    fontFamily: fonts.NORMAL,
  },

});
