import Profile from "./Profile/Profile";
import { MyInfoNavWrap } from "./style";
import Tab from "./Tab/Tab";
import Title from "./Title/Title";

const Nav = () => {
  return (
    <MyInfoNavWrap>
      <Title />
      <Profile />
      <Tab />
    </MyInfoNavWrap>
  );
};
export default Nav;
