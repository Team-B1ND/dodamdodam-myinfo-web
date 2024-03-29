import MyPoint from "../MyPoint/MyPoint";
import Logout from "./Logout/Logout";
import Notice from "./Notice/Notice";
import Profile from "./Profile/Profile";
import { MyInfoNavWrap } from "./style";
import Tab from "./Tab/Tab";
import TabHr from "./Tab/TabHr/TabHr";
import Title from "./Title/Title";

const Nav = () => {
  return (
    <MyInfoNavWrap>
      <Title />
      <Profile />
      <Notice />
      <Tab />
      <TabHr />
      <Logout />
    </MyInfoNavWrap>
  );
};
export default Nav;
