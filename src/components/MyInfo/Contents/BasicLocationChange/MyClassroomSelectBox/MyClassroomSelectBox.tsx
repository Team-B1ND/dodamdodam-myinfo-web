import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useTimeTables from "../../../../../hooks/basicLocation/useTimeTables";
import useClassroom from "../../../../../hooks/classroom/useClassroom";
import {
  basicLocatioinRoomAtom,
  basicLocationFor,
} from "../../../../../store/basicLocation";
import { defaultStudyRooms } from "../../../../../types/basicLocation/basicLocation.type";
import * as S from "./style";

interface classTime {
  classTime: string;
}

const MyClassroomSelect = ({ classTime }: classTime) => {
  const { classroomList } = useClassroom();
  const [basicLocaionRoom, setBasicLocationRoom] = useRecoilState(
    basicLocatioinRoomAtom
  );

  const { timeTablesByWeekday, timeTablesByWeekend } = useTimeTables();

  const [period, setPeriod] = useRecoilState(basicLocationFor);

  useEffect(() => {
    setBasicLocationRoom([
      { ...basicLocaionRoom[0], placeId: 0 },
      { ...basicLocaionRoom[1], placeId: 0 },
      { ...basicLocaionRoom[2], placeId: 0 },
      { ...basicLocaionRoom[3], placeId: 0 },
    ]);
    if (period !== "weekend") {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0], timeTableId: 1 },
        { ...basicLocaionRoom[1], timeTableId: 2 },
        { ...basicLocaionRoom[2], timeTableId: 3 },
        { ...basicLocaionRoom[3], timeTableId: 4 },
      ]);
    } else {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0], timeTableId: 5 },
        { ...basicLocaionRoom[1], timeTableId: 6 },
        { ...basicLocaionRoom[2], timeTableId: 7 },
        { ...basicLocaionRoom[3], timeTableId: 8 },
      ]);
    }
  }, [period]);

  const basicLocaionRoomHandler = (e: any) => {
    const myClassroom = e.target.value;
    const myClassroomInfo = classroomList.filter(
      (classroom) => classroom.name === myClassroom
    );
    console.log(myClassroomInfo);
    const classroomId = myClassroomInfo[0].id;
    // const applyClassroomIdx = Number(classTime.split("교시")[0]) - 8;
    if (
      classTime === timeTablesByWeekday[0].name ||
      classTime === timeTablesByWeekend[0].name
    ) {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0], placeId: classroomId },
        { ...basicLocaionRoom[1] },
        { ...basicLocaionRoom[2] },
        { ...basicLocaionRoom[3] },
      ]);
    } else if (
      classTime === timeTablesByWeekday[1].name ||
      classTime === timeTablesByWeekend[1].name
    ) {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0] },
        { ...basicLocaionRoom[1], placeId: classroomId },
        { ...basicLocaionRoom[2] },
        { ...basicLocaionRoom[3] },
      ]);
    } else if (
      classTime === timeTablesByWeekday[2].name ||
      classTime === timeTablesByWeekend[2].name
    ) {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0] },
        { ...basicLocaionRoom[1] },
        { ...basicLocaionRoom[2], placeId: classroomId },
        { ...basicLocaionRoom[3] },
      ]);
    } else if (
      classTime === timeTablesByWeekday[3].name ||
      classTime === timeTablesByWeekend[3].name
    ) {
      setBasicLocationRoom([
        { ...basicLocaionRoom[0] },
        { ...basicLocaionRoom[1] },
        { ...basicLocaionRoom[2] },
        { ...basicLocaionRoom[3], placeId: classroomId },
      ]);
    }
  };

  useEffect(() => {
    console.log(basicLocaionRoom);
  }, [basicLocaionRoom]);

  return (
    <S.EachClassroomBoxWrap>
      <S.BasicClassroomSelectTextWrap>
        <S.ClassTimeText>{classTime}</S.ClassTimeText>
      </S.BasicClassroomSelectTextWrap>
      <S.BasicClassroomSelect
        name={classTime}
        defaultValue="none"
        onChange={basicLocaionRoomHandler}
      >
        <option value="none">선택해주세요</option>
        {classroomList &&
          basicLocaionRoom &&
          classroomList.map((classroom, idx) => {
            return (
              <option key={classroom.id} value={classroom.name}>
                {classroomList
                  ? classroomList.filter(
                      (classroom) =>
                        basicLocaionRoom[idx].placeId === classroom.id
                    )[0].name
                  : "선택해주세요"}
              </option>
            );
          })}
      </S.BasicClassroomSelect>
    </S.EachClassroomBoxWrap>
  );
};

export default MyClassroomSelect;
