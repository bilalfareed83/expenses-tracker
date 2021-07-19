const transationReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [action.payload, ...state];
    }
    case "UPDATE_ITEM": {
      let editItemTrans = state.map((item) => {
        if (item.id === action.payload.id) {
          // console.log(action.payload, "payload");
          return action.payload;
        }
        return item;
      });
      console.log(editItemTrans, "edit");
      state = [...editItemTrans];
      return state;
    }
    case "DEL_ITEM": {
      let delItem = state.filter((item) => item.id !== action.payload.id);
      state = [...delItem];
      return state;
    }

    default: {
      return state;
    }
  }
};

export default transationReducer;
