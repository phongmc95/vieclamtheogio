import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {isIos} from '../Utils/CheckDevice';
import {scale} from 'react-native-size-matters';
const ModalStyle = props => {
  const {isVisible, onBackdropPress, content} = props;
  return (
    <Modal
      animationIn="slideInDown"
      animationOut="zoomOut"
      animationInTiming={600}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={{margin: 0, justifyContent: 'flex-start'}}>
      <View style={styles.viewmodal}>
        <Text style={styles.title}>THÔNG BÁO</Text>
        <View style={styles.viewcontent}>
          <Text style={styles.txtcontent}>{content}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalStyle;

const styles = StyleSheet.create({
  viewmodal: {
    maxHeight: '30%',
    backgroundColor: '#F5F5FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    paddingTop: scale(20),
  },
  title: {
    fontSize: 24,
    color: '#307df1',
    fontWeight: '700',
    marginTop: isIos ? 50 : null,
  },
  viewcontent: {
    padding: 20,
  },
  txtcontent: {
    paddingHorizontal: scale(15),
    textAlign: 'center',
    fontSize: 16,
    color: '#404040',
    fontWeight: '700',
  },
});
