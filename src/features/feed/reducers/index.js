// let initialState = {};

// //dummy content
// const FeedData = (state = {}, action) => {
//   initialState = state;

//   return state;
// };

// export default FeedData;

export default function feedData(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Math.random(),
          text: action.text,
        },
      ];
    default:
      return state;
  }
}
