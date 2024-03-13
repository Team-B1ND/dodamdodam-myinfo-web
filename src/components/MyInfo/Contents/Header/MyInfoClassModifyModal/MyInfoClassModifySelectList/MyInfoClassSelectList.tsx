import { ChangeEvent } from "react";
import { useRecoilValue } from "recoil";
import { profileInfo } from "../../../../../../store/profile";
import MyInfoClassSelect from "../MyInfoClassSelect/MyInfoClassSelect";
import * as S from "./style";

interface Props {
  onChnageSelect: (
    e: ChangeEvent<HTMLSelectElement>,
    scope: "grade" | "room" | "number"
  ) => void;
}

const MyInfoClassSelectList = ({ onChnageSelect }: Props) => {
  const profileInfoData = useRecoilValue(profileInfo);

  return (
    <S.SelectWrap>
      {profileInfoData.student && (
        <>
          <MyInfoClassSelect
            label="학년"
            items={[1, 2, 3]}
            value={profileInfoData.student.grade}
            onChnageSelect={onChnageSelect}
            scope="grade"
          />
          <MyInfoClassSelect
            label="반"
            items={[1, 2, 3, 4]}
            value={profileInfoData.student.room}
            onChnageSelect={onChnageSelect}
            scope="room"
          />
          <MyInfoClassSelect
            label="번"
            items={[...Array.from({ length: 20 }).map((_, idx) => idx + 1)]}
            value={profileInfoData.student.number}
            onChnageSelect={onChnageSelect}
            scope="number"
          />
        </>
      )}
    </S.SelectWrap>
  );
};

export default MyInfoClassSelectList;
