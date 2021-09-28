import axiosClient from '../axiosClient';

const TD_API = {
  DangTin: data => {
    const url = 'com_add-update_new.php';
    return axiosClient.post(url, data);
  },
  Job: params => {
    const url = 'p_cate-tag.php';
    return axiosClient.get(url, {params});
  },
};

export default TD_API;
