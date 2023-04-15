import Nav from "../components/MyInfo/Contents/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contents from "../components/MyInfo/Contents/Contents";
import PointDetail from "../components/MyInfo/PointDetail";
import PassDetail from "../components/MyInfo/PassDeatil";

const Router = () => {
  return (
    <BrowserRouter basename="/myinfo">
      <Routes>
        <Route path="/" element={<Contents />}></Route>
        <Route path="mypointdetail" element={<PointDetail />}></Route>
        <Route path="mypassdetail" element={<PassDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
