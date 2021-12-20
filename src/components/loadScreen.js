import React from 'react';
import Modal from 'react-native-modal';
import Loader1 from './Loading';
const LoadSreen = props => {
  const {load} = props;
  return (
    <Modal isVisible={load}>
      <Loader1 />
    </Modal>
  );
};

export default LoadSreen;
