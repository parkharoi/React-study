import React from "react";
import Detail from "../page/Detail";
import TodoList from "../page/TodoList";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList/>}/> 
        <Route path="/detail/:id" element={<Detail/>}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default Router;