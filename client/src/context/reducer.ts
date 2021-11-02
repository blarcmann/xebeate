const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: !state.isDark
      }
    case "TOGGLE_MODE":
      return {
        ...state,
        isDark: !state.isDark
      }
    default:
      return state;
  }
}

export default reducer;