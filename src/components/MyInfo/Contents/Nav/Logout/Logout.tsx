import useLogout from "../../../../../hooks/Logout/useLogout";
import * as S from "./style";

const Logout = () => {
  const { letsgoLogout } = useLogout();
  return <S.LogoutWrap onClick={letsgoLogout}>로그아웃</S.LogoutWrap>;
};

export default Logout;
