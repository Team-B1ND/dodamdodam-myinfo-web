import {  Route, Routes } from "react-router-dom";
import MyinfoPage from "pages/myinfoPage";
import PageTemplate from "components/Common/PageTemplate";


const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<PageTemplate/>}>
          <Route path="/" element={<MyinfoPage/>} />
        </Route>
        {/* <Route path="mypointdetail" element={<PointDetail />} />
        <Route path="mypassdetail" element={<PassDetail />} /> */}
      </Routes>
  );
};

export default Router;
