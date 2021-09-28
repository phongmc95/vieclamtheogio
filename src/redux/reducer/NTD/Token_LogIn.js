const initialState = {
  tokenlogin: '',
};
const Token_LogIn = (state = initialState, action) => {
  switch (action.type) {
    case 'TOKEN_LOGIN':
      state.tokenlogin = action.payload;
      return state;

    default:
      return state;
  }
};

export default Token_LogIn;
