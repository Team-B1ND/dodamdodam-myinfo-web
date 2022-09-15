import Profile from "./Profile/Profile";
import { MyInfoNavWrap } from "./style";
import Title from "./Title/Title";

const Nav = () => {
  return (
    <MyInfoNavWrap>
      <Title />
      <Profile />
    </MyInfoNavWrap>
  );
};
export default Nav;
