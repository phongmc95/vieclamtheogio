import * as React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import email from 'react-native-email';
const FooterButton = ({phone}) => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});
  const handleEmail = () => {
    const to = ['tiaan@email.com', 'foo@bar.com']; // string or array of email addresses
    email(to, {
      // Optional additional arguments
      cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
      bcc: 'mee@mee.com', // string or array of email addresses
      subject: 'Show how to use',
      body: 'Some body right here',
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
