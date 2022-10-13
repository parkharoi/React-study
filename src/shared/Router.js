import React from "react";
import Detail from "../page/Detail";
import TodoList from "../page/TodoList";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes는 라우트들의 묶음이다.
        "/"는 local host 3000 기본이다. */}
        <Route path="/" element={<TodoList />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* 우리가 앞으로 만들 링크를 감싸고 있는 친구  ":" 은 동적 라우터 하겠따는거임*/}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
