import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contents from "../components/MyInfo/Contents/Contents";


const Router = () => {
  return (
    <BrowserRouter basename="/myinfo">
      <Routes>
        <Route >
          <Route path="/" element={<Contents />} />
        </Route>
        {/* <Route path="mypointdetail" element={<PointDetail />} />
        <Route path="mypassdetail" element={<PassDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
