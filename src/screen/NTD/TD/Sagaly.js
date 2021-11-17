import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon} from '../../../../assets/icon';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';

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
      <View style={{padding: scale(10)}}>
        <View style={{marginVertical: scale(10)}}>
          <CircleCheckBox
            checked={true}
            onToggle={checked => console.log('My state is: ', checked)}
            labelPosition={LABEL_POSITION.RIGHT}
            label="Cố định"
            outerColor="#307DF1"
            innerColor="#307DF1"
            styleLabel={{
              fontFamily: fonts.NORMAL,
              fontSize: scale(18),
              marginLeft: scale(10),
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.boxInput, {width: scale(220)}]}>
            <TextInput placeholder="VD:25000" style={styles.textInput} />
          </View>
          <View style={[styles.boxInput, {width: scale(90)}]}>
            <TextInput placeholder="Giờ" style={styles.textInput} />
          </View>
        </View>
        <View style={{marginVertical: scale(10)}}>
          <CircleCheckBox
            checked={false}
            onToggle={checked => console.log('My state is: ', checked)}
            labelPosition={LABEL_POSITION.RIGHT}
            label="Ước lượng"
            outerColor="#307DF1"
            innerColor="#307DF1"
            styleLabel={{
              fontFamily: fonts.NORMAL,
              fontSize: scale(18),
              marginLeft: scale(10),
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.boxInput, {width: scale(98)}]}>
            <TextInput placeholder="VD:25000" style={styles.textInput} />
          </View>
          <Text style={{marginTop: scale(15)}}>___</Text>
          <View style={[styles.boxInput, {width: scale(98)}]}>
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
    backgroundColor: colors.LIGHT_WHITE,
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
    fontSize: scale(20),
    fontFamily: fonts.BOLD,
    marginLeft: scale(20),
    textTransform: 'uppercase',
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
    borderRadius: scale(5),
    backgroundColor: colors.WHITE,
  },
  textInput: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    marginLeft: scale(5),
  },
});
