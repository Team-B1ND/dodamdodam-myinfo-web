import { LayoutContainer, Layout } from "./style";
import { DodamNavBar } from "@b1nd/dds-web";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {useThemes} from "hooks/Theme/usetheme";
import { themeModeAtom } from "store/Theme/themeStore";
import useLogout from "hooks/Logout/useLogout";

const PageTemplate = () => {
  const { handleTheme } =useThemes();
  const currentTheme = useRecoilValue(themeModeAtom);
  const {letsgoLogout}=useLogout()

  return (
    <LayoutContainer>
        <DodamNavBar 
        location="home" 
        handleTheme={handleTheme} 
        logout={letsgoLogout}
        currentTheme={currentTheme}/>
      <Layout>
        <Outlet />
      </Layout>
    </LayoutContainer>
  );
};

export default PageTemplate;
