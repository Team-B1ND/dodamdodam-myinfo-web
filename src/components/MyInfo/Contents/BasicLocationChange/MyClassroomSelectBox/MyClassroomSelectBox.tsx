import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useDefaultStudyRoom from "../../../../../hooks/basicLocation/useDefaultStudyRoom";
import useTimeTables from "../../../../../hooks/basicLocation/useTimeTables";
import useClassroom from "../../../../../hooks/classroom/useClassroom";
import {
  basicLocatioinRoomAtom,
  basicLocationFor,
} from "../../../../../store/basicLocation";
import { defaultStudyRoomArray } from "../../../../../types/basicLocation/basicLocation.type";
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

  const { defaultRoom } = useDefaultStudyRoom();

  useEffect(() => {
    console.log(1);
    console.log(defaultRoom);
    console.log(1);
  }, [defaultRoom]);

  const [selectedRoom, setSelectedRoom] = useState<string>("선택해주세요");

  const [period, setPeriod] = useRecoilState(basicLocationFor);

  useEffect(() => {
    setBasicLocationRoom([
      { ...basicLocaionRoom[0], placeId: 0 },
      { ...basicLocaionRoom[1], placeId: 0 },
      { ...basicLocaionRoom[2], placeId: 0 },
      { ...basicLocaionRoom[3], placeId: 0 },
    ]);

    if (period !== "weekend") {
      for (let i = 0; i < 4; i++) {
        setBasicLocationRoom([
          ...basicLocaionRoom,
          { ...basicLocaionRoom[i], timeTableId: Number(i) + 1 },
        ]);
      }
    } else {
      for (let i = 0; i < 4; i++) {
        setBasicLocationRoom([
          ...basicLocaionRoom,
          { ...basicLocaionRoom[i], timeTableId: Number(i) + 4 },
        ]);
      }
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
        {classroomList?.map((classroom, idx) => {
          // console.log(classroom.name);
          // if (classroom?.id === basicLocaionRoom[idx].placeId) {
          //   // setSelectedRoom(classroom.name);
          //   console.log(classroom.name);
          // }
          // console.log("안녕");
          return (
            <option key={classroom?.id} value={classroom?.name}>
              {classroom.name}
              {/* {selectedRoom} */}
            </option>
          );
        })}
      </S.BasicClassroomSelect>
    </S.EachClassroomBoxWrap>
  );
};

export default MyClassroomSelect;
