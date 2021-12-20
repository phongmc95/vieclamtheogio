import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {BackIcon} from '../../../../assets/icon';
import colors from '../../../constant/colors';
import fonts from '../../../constant/fonts';
import TextInputStyle from '../../../components/TextInputStyle';
import {provinces} from '../../../data/Jobs';
import SelectModal from '../../../components/SelectModal';
import ButtonStyle from '../../../components/ButtonStyle';
import * as ImagePicker from 'react-native-image-picker';
import ModalStyle from '../../../components/ModalStyle';
import {isIos} from '../../../Utils/CheckDevice';
import axios from 'axios';
import NotifiSuccess from '../../../components/NotifiSuccess';

const UpdateInfoNTD = ({navigation, route}) => {
  const {item} = route.params;
  const [name, setName] = useState(item.name);
  const [quyMo, setquyMo] = useState(item.company_size);
  const [diaChi, setdiachi] = useState(item.address);
  // const [province, setProvince] = useState('');
  const [isProvince, setIsProvince] = useState(false);
  // const [phone, setPhone] = useState('');
  const [web, setWeb] = useState(item.website);
  const [intro, setIntro] = useState(item.description_company);
  const [logo, setLogo] = useState(item.avatar);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const onAddJob = () => {
    if (!name || !quyMo || !diaChi || !web || !intro) {
      setModal(true);
      setError('Các ô nhập là bắt buộc không được để trống! ');
    } else {
      submit();
    }
  };

  const submit = () => {
    var data = {
      name: name,
      company_size: quyMo,
      address: diaChi,
      // city: province.title,
      website: web,
      description_company: intro,
    };
    var config = {
      method: 'patch',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/users/updateUser',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        uploadImage();
        setSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const uploadImage = () => {
    var data = new FormData();
    data.append('photo', logo);
    data.append('email', item.email);
    console.log('data: ', JSON.stringify(data));

    var config = {
      method: 'post',
      url: 'https://fpt-jobs-api.herokuapp.com/api/v1/users/picture-upload',
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const options = {
    mediaType: 'photo',
    includeBase64: true,
    maxWidth: 512,
    maxHeight: 512,
  };

  const openLibry = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel || response.errorCode) {
        return;
      }

      setLogo({
        uri: response.assets[0].uri,
        name: response.assets[0].fileName,
        type: response.assets[0].type,
      });
    });
  };
  // const selectProvince = item => {
  //   setProvince(item);
  //   handleSelectProvince();
  // };

  const handleSelectProvince = () => {
    setIsProvince(!isProvince);
  };

  return (
    <View style={styles.contener}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          style={styles.goback}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Cập nhập thông tin</Text>
      </View>
      <ScrollView>
        <View style={styles.viewAvtar}>
          <TouchableOpacity onPress={openLibry}>
            <Image
              source={
                logo
                  ? {uri: logo}
                  : logo === null
                  ? require('../../../../assets/img/logoVin.png')
                  : {uri: logo.uri}
              }
              style={[styles.avatar]}
            />
          </TouchableOpacity>
          <Text style={styles.titleAvatar}>Cập nhật ảnh đại diện</Text>
        </View>

        <View style={styles.main}>
          {/* <Text
            style={{
              fontSize: scale(16),
              fontFamily: fonts.BOLD,
              marginBottom: scale(15),
            }}>
            THÔNG TIN CÔNG TY
          </Text> */}
          <TextInputStyle
            Label="Tên công ty"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInputStyle
            Label="Quy mô công ty"
            value={quyMo}
            keyboardType={'number-pad'}
            onChangeText={text => setquyMo(text)}
          />
          {/* <TextInputStyle
            Label="Mã số thuế"
            value={mst}
            keyboardType={'number-pad'}
            onChangeText={text => setMst(text)}
          /> */}
          <TextInputStyle
            Label="Địa chỉ công ty"
            value={diaChi}
            onChangeText={text => setdiachi(text)}
          />
          {/* <TextInputSelected
            Label="Tỉnh/ Thành phố"
            value={province.title}
            onChangeText={text => setProvince(text)}
            onPress={handleSelectProvince}
          /> */}

          {/* <TextInputStyle
            Label="Điện thoại"
            value={phone}
            keyboardType={'number-pad'}
            onChangeText={text => setPhone(text)}
          /> */}
          <TextInputStyle
            Label="Website"
            value={web}
            onChangeText={text => setWeb(text)}
          />

          <TextInputStyle
            Label="Giới thiệu công ty"
            value={intro}
            onChangeText={text => setIntro(text)}
            multiline={true}
          />
        </View>
        <View style={styles.foodter}>
          <ButtonStyle
            styleBtn={{width: 150}}
            Title={'Cập nhập'}
            onPress={
              // updateLogo
              onAddJob
            }
          />
        </View>
      </ScrollView>
      {/* <SelectModal
        isVisible={isProvince}
        onBackdropPress={handleSelectProvince}
        label={'Tỉnh/ Thành phố'}
        onPress={item => selectProvince(item)}
        data={provinces}
      /> */}
      <ModalStyle
        isVisible={modal}
        onBackdropPress={() => setModal(false)}
        content={error}
      />
      <NotifiSuccess
        on={success}
        off={() => {
          if (navigation.canGoBack) {
            navigation.goBack();
            setSuccess(false);
          }
        }}
        title="THÔNG BÁO"
        content="Cập nhật thành công!!!"
      />
    </View>
  );
};

export default UpdateInfoNTD;

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
  },
  StatusBar: {
    backgroundColor: '#307DF1',
    height: scale(isIos ? 100 : 50),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),

    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: scale(18),
    fontFamily: fonts.BOLD,
    marginLeft: scale(20),
    textTransform: 'uppercase',
    marginBottom: scale(12),
  },
  goback: {
    marginLeft: scale(10),
    marginBottom: scale(15),
  },
  avatar: {
    width: scale(100),
    height: scale(100),
    marginBottom: scale(10),
    borderRadius: scale(50),
  },
  viewAvtar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
  },
  btnCamera: {
    position: 'absolute',
    alignItems: 'center',
  },
  titleAvatar: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
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
  TextTitle: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    marginLeft: scale(5),
    marginTop: scale(10),
  },
  Selecter: {
    width: scale(25),

    alignItems: 'center',
    justifyContent: 'center',
  },
  foodter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(20),
  },
  btnupdate: {
    fontFamily: fonts.NORMAL,
    fontSize: scale(16),
    paddingHorizontal: scale(33),
    paddingVertical: scale(11),
    backgroundColor: '#307DF1',
    borderRadius: scale(30),
    color: 'white',
  },
});
