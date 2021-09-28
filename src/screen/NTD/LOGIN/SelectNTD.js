import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
const SelectNTD = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/logoBG.png')}
        style={styles.logo}
      />
      <Image
        source={require('../../../../assets/images/selectNTD.png')}
        style={styles.body}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('LoginNTD')}>
        <Text style={styles.text}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate('SignInNTD', {
            item: {cit_name: '', cit_id: ''},
          })
        }>
        <Text style={styles.text}>Đăng ký</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height: scale(40), width: scale(335)}}>
        {/* <Text style={[styles.text, {color: '#404040'}]}>
          Đăng nhập với tư cách khách
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default SelectNTD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: scale(144),
    width: '100%',
  },
  body: {
    height: scale(222),
    width: scale(300),
  },
  btn: {
    height: scale(40),
    width: scale(335),
    borderColor: '#307df1',
    borderWidth: scale(1),
    borderRadius: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: scale(2),
    },
    shadowOpacity: scale(0.32),
    shadowRadius: scale(5.46),

    elevation: scale(3),
  },
  text: {
    fontSize: scale(20),
    fontWeight: '700',
    color: '#307df1',
  },
});
