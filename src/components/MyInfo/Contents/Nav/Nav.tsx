import MyPoint from "../MyPoint/MyPoint";
import Notice from "./Notice/Notice";
import Profile from "./Profile/Profile";
import { MyInfoNavWrap } from "./style";
import Tab from "./Tab/Tab";
import Title from "./Title/Title";

const Nav = () => {
  return (
    <MyInfoNavWrap>
      <Title />
      <Profile />
      <Notice />
      <Tab />
      {/* <MyPoint /> */}
    </MyInfoNavWrap>
  );
};
export default Nav;
