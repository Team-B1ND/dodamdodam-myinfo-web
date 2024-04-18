import Nav from "../Contents/Nav/Nav";
import * as S from "./PointDetail.style";
import { FcInspection } from "react-icons/fc";
import ComponentTitle from "../../common/ComponentTitle/ComponentTitle";
import { useState } from "react";
import Dormitory from "./Dormitory";

const PointDetail = () => {
  const [isDormitoryAndSchool, setIsDormitoryAndSchool] =
    useState<boolean>(false);

  return (
    <S.MyInfoWrap>
      <Nav />
      <S.MyInfoContentsWrap>
        <ComponentTitle>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <S.MainProfileText>
              <FcInspection style={{ marginRight: "5px", fontSize: "25px" }} />
              상벌점 조회
            </S.MainProfileText>

            <S.MyInfoModifyBtnContainer>
              <S.DormitoryBtn
                onClick={() => setIsDormitoryAndSchool(false)}
                isColor={isDormitoryAndSchool}
              >
                기숙사
              </S.DormitoryBtn>
              <S.SchoolBtn
                onClick={() => setIsDormitoryAndSchool(true)}
                isColor={isDormitoryAndSchool}
              >
                학교
              </S.SchoolBtn>
            </S.MyInfoModifyBtnContainer>
          </div>
        </ComponentTitle>

        <S.PointDetailContainer>
          <Dormitory isDormitoryAndSchool={isDormitoryAndSchool} />
        </S.PointDetailContainer>
      </S.MyInfoContentsWrap>
    </S.MyInfoWrap>
  );
};

export default PointDetail;
