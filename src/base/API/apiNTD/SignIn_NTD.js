import axiosClient from '../axiosClient';

const SignIn_NTD = {
  SignUp: data => {
    const url = 'com_dangky.php';
    return axiosClient.post(url, data);
  },
  confirm: data => {
    const url = 'com_dangky_confirm.php';
    return axiosClient.post(url, data);
  },
};

export default SignIn_NTD;
