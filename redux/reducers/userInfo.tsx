export const userReducer = (state = { userinfo: [] }, action) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return {
        ...state,
        userinfo: [...state.userinfo, action.payload]
      }

    default:
      return state
  }
}
