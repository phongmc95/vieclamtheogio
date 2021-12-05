import * as React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import email from 'react-native-email';
const FooterButton = ({phone,email_uv,vitri}) => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});
  const handleEmail = () => {
    const to = [`${email_uv}`]; // string or array of email addresses
    email(to, {

     // string or array of email addresses
      subject: `THƯ MỜI PHỎNG VẤN VỊ TRÍ ${vitri}`,
      body: `Chào bạn [Tên ứng viên],\n` +
        '\n' +
        'Lời đầu tiên, chúng tôi xin cảm ơn bạn vì đã quan tâm đến vị trí ứng tuyển của công ty [Tên công ty]. Thông qua hồ sơ mà bạn đã gửi về, chúng tôi nhận thấy bạn có kiến thức chuyên môn phù hợp với vị trí mà chúng tôi đang tuyển.\n' +
        '\n' +
        'Chúng tôi trân trọng kính mời bạn đến tham gia buổi phỏng vấn của công ty chúng tôi tại:\n' +
        '\n' +
        'Địa chỉ:…\n' +
        '\n' +
        'Thời gian:…\n' +
        '\n' +
        'Để buổi phỏng vấn được diễn ra thuận lợi, bạn vui lòng phản hồi lại email này ngay khi nhận được. Mọi thắc mắc khác, bạn vui lòng liên hệ với chúng tôi qua:\n' +
        '\n' +
        'Địa chỉ liên hệ:…\n' +
        '\n' +
        'Trân trọng,\n' +
        '\n',
    }).catch(console.error);
  };
  const {open} = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          fabStyle={{backgroundColor: '#307df1'}}
          color={'white'}
          open={open}
          icon={open ? 'card-account-phone-outline' : 'card-account-phone'}
          actions={[
            {
              icon: 'email',
              label: 'Email',
              onPress: () => handleEmail(),
            },
            {
              icon: 'phone',
              label: 'Gọi điện',
              onPress: phone,
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default FooterButton;
