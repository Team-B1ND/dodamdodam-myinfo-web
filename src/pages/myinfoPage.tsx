import MyProfile from "components/Myprofile";
import * as S from "./style";

const MyinfoPage = () => {
    return(
       <S.MyinfoMain>
            <S.MyinfoProfileBox>
                <MyProfile/>
            </S.MyinfoProfileBox>
       </S.MyinfoMain>
    )
}

export default MyinfoPage;