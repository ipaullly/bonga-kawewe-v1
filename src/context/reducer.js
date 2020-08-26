export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_STREAM_TEXT":
      return setStreamText(state, action.searchText);
    default:
      return state;
  }
};

export const initialState = {
  searchText: ''
};

const setStreamText = (state, text) => {
  return {
    ...state, text
  };
}