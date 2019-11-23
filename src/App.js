import React, { useReducer } from "react";

import { Store } from "./store/config/config";
import Main from "./pages/Main";
import { initialStateModalStore } from "./store/modules/modal/reducer";
import modules from "./store/modules";

export default () => {
  const store = useReducer(modules, {
    modal: initialStateModalStore
  });

  return (
    <Store.Provider value={store}>
      <Main />
    </Store.Provider>
  );
};
