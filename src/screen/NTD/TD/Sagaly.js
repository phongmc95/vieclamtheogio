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

const Sagaly = ({navigation}) => {
  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Mức lương</Text>
      </View>
      <View>
        <CircleCheckBox
          checked={true}
          onToggle={checked => console.log('My state is: ', checked)}
          labelPosition={LABEL_POSITION.RIGHT}
          label="Cố định"
          outerColor="#307DF1"
          innerColor="#307DF1"
        />
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.boxInput, {width: scale(230)}]}>
            <TextInput placeholder="VD:25000" style={styles.textInput} />
          </View>
          <View style={[styles.boxInput, {width: scale(90)}]}>
            <TextInput placeholder="Giờ" style={styles.textInput} />
          </View>
        </View>
        <CircleCheckBox
          checked={false}
          onToggle={checked => console.log('My state is: ', checked)}
          labelPosition={LABEL_POSITION.RIGHT}
          label="Ước lượng"
          outerColor="#307DF1"
          innerColor="#307DF1"
        />
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.boxInput, {width: scale(103)}]}>
            <TextInput placeholder="VD:25000" style={styles.textInput} />
          </View>
          <Text style={{marginTop: scale(15)}}>___</Text>
          <View style={[styles.boxInput, {width: scale(103)}]}>
            <TextInput placeholder="VD:25000" style={styles.textInput} />
          </View>
          <View style={[styles.boxInput, {width: scale(90)}]}>
            <TextInput placeholder="Giờ" style={styles.textInput} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sagaly;

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
  boxInput: {
    width: scale(325),
    height: scale(40),
    borderWidth: scale(1),
    borderColor: '#307DF1',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: scale(5),
    overflow: 'hidden', borderRadius: scale(5),
  },
  textInput: {
    fontWeight: '300',
    fontSize: scale(16),
    marginLeft: scale(5),
  },
});
