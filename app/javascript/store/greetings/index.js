import Axios from 'axios';

// conts
const FETCH_GREETING = 'greetings/FETCH_GREETING';

// actions
const fetchGreeting = (payload) => ({
  type: FETCH_GREETING,
  payload,
});

// state
const initialState = "";

export const fetchGreetingApi = () => async (dispatch) => {
  const result = await Axios.get('/api/message');
  dispatch(fetchGreeting(result.data.message));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;