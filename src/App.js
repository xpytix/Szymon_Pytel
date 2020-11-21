import React, {useState, Component} from "react";

import {Provider} from 'react-redux'
import store from "./store/store";
import NavBardRedux from "./Componets/NavBar";
import MainRedux from "./Componets/Main";






const App =()=>{
  return (
      <Provider store={store}>
        <div className="App">
          <NavBardRedux/>
          <MainRedux/>
        </div>
      </Provider>
  );
}

export default App;
