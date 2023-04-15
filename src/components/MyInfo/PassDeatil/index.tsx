import React, { useState } from "react";
import Nav from "../Contents/Nav/Nav";
import { MyInfoWrap } from "../Contents/style";
import ComponentTitle from "../../common/ComponentTitle/ComponentTitle";
import {
  DormitoryBtn,
  MainProfileText,
  MyInfoContentsWrap,
  MyInfoModifyBtnContainer,
  PointDetailContainer,
  SchoolBtn,
} from "../PointDetail/PointDetail.style";
import { FcAlarmClock } from "react-icons/fc";
import Outing from "./Outing";
import Sleepover from "./Sleepover";

const PassDetail = () => {
  const [isPassAndSleep, setIsPassAndSleep] = useState<boolean>(false);

  return (
    <MyInfoWrap>
      <Nav />

      <MyInfoContentsWrap>
        <ComponentTitle>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MainProfileText>
              <FcAlarmClock style={{ marginRight: "5px", fontSize: "25px" }} />
              외출 외박 조회
            </MainProfileText>
            <MyInfoModifyBtnContainer>
              <DormitoryBtn
                onClick={() => setIsPassAndSleep(false)}
                isColor={isPassAndSleep}
              >
                외출
              </DormitoryBtn>
              <SchoolBtn
                onClick={() => setIsPassAndSleep(true)}
                isColor={isPassAndSleep}
              >
                외박
              </SchoolBtn>
            </MyInfoModifyBtnContainer>
          </div>
        </ComponentTitle>
        <PointDetailContainer>
          {isPassAndSleep ? <Sleepover /> : <Outing />}
        </PointDetailContainer>
      </MyInfoContentsWrap>
    </MyInfoWrap>
  );
};

export default PassDetail;
