const initialState = {
    data: '',
  };
  
  const Token = (state = initialState, action) => {
    switch (action.type) {
      case 'TOKEN':
        state.data = action.payload;
        return state;
  
      default:
        return state;
    }
  };
  export default Token;