const inititalState = {
  fullName: "",
};

const userRegisterReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "value":
      return;
    default:
      return state;
  }
};

export default userRegisterReducer;
