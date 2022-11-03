import Nav from "../components/MyInfo/Contents/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contents from "../components/MyInfo/Contents/Contents";
import PointDetail from "../components/MyInfo/PointDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contents />}></Route>
        <Route path="/mypointdetail" element={<PointDetail />}></Route>
        <Route path="/" element={<Contents />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
