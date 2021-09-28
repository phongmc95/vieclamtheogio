import axiosClient from '../axiosClient';

const LogIn_NTD = {
  LogIn_API: data => {
    const url = 'com_dangnhap.php';
    return axiosClient.post(url, data);
  },
  Email_API: data => {
    const url = 'com_forget-pass_sendmail.php';
    return axiosClient.post(url, data);
  },
  OTP_API: data => {
    const url = 'com_forget-pass_confirm.php';
    return axiosClient.post(url, data);
  },
  ChangePass: data => {
    const url = 'com_forget-pass_newpass.php';
    return axiosClient.post(url, data);
  },
};

export default LogIn_NTD;
