const statusFromStorage: boolean =
  JSON.parse(sessionStorage.getItem("autorization") || "false") || false;

const initialState = {
  isAuthenticated: statusFromStorage,
};

export const autorization = (state = initialState, action: any) => {
  switch (action.type) {
    case "login": {
      return { ...state, isAuthenticated: true };
    }
    case "logOut": {
      return { ...state, isAuthenticated: false };
    }
    default: {
      return state;
    }
  }
};
