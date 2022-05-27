import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBox from "./components/MenuBox";
import {
  State,
  Reducer,
  Effect,
  LayoutEffect,
  ImperativeHandle,
  Context,
  Memo,
  Callback,
  Ref,
} from "./pages";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <MenuBox />
        <div className="content--wrapper">
          <Routes>
            <Route index element={<Home />} />
            <Route path="State" element={<State />} />
            <Route path="Reducer" element={<Reducer />} />
            <Route path="Effect" element={<Effect />} />
            <Route path="Ref" element={<Ref />} />
            <Route path="LayoutEffect" element={<LayoutEffect />} />
            <Route path="ImperativeHandle" element={<ImperativeHandle />} />
            <Route path="Context" element={<Context />} />
            <Route path="Memo" element={<Memo />} />
            <Route path="Callback" element={<Callback />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
