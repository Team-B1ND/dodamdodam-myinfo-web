import React, { useState } from "react";
import Nav from "../Contents/Nav/Nav";
import { MyInfoWrap } from "../Contents/style";
import ComponentTitle from "../../common/ComponentTitle/ComponentTitle";
import {
  MainProfileText,
  MyInfoContentsWrap,
  MyInfoModifyBtnContainer,
  PointDetailContainer,
} from "../PointDetail/PointDetail.style";
import { FcAlarmClock } from "react-icons/fc";
import Outing from "./Outing";
import Sleepover from "./Sleepover";
import { SwitchCase } from "@b1nd/b1nd-react-util";
import { OutSleepingBtn, OutgoingBtn } from "./style";

export type ColorType = "outgoing" | "outsleeping";

const PassDetail = () => {
  const [isPassAndSleep, setIsPassAndSleep] = useState<ColorType>("outgoing");

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
              <OutgoingBtn
                isColor={isPassAndSleep}
                onClick={() => setIsPassAndSleep("outgoing")}
              >
                외출
              </OutgoingBtn>
              <OutSleepingBtn
                isColor={isPassAndSleep}
                onClick={() => setIsPassAndSleep("outsleeping")}
              >
                외박
              </OutSleepingBtn>
            </MyInfoModifyBtnContainer>
          </div>
        </ComponentTitle>
        <PointDetailContainer>
          <SwitchCase
            value={isPassAndSleep}
            caseBy={{
              outgoing: <Outing />,
              outsleeping: <Sleepover />,
            }}
          />
        </PointDetailContainer>
      </MyInfoContentsWrap>
    </MyInfoWrap>
  );
};

export default PassDetail;
