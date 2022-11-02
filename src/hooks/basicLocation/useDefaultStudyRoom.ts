import { useEffect, useState } from "react";
import basicLocationRepository from "../../repository/basicLocation/basicLocation.repository";
import { defaultStudyRoom } from "../../types/basicLocation/basicLocation.type";

const useDefaultStudyRoom = () => {
  const [defaultRoom, setDefaultRoom] = useState<defaultStudyRoom[]>([
    {
      id: 0,
      place: {
        id: 0,
        name: "string",
        type: {
          id: 0,
          name: "string",
        },
      },
      student: {
        accessLevel: 0,
        allowed: 0,
        classroomIdx: 0,
        email: "string",
        grade: 0,
        id: "string",
        idx: 0,
        joinDate: "2022-11-02T06:37:20.756Z",
        name: "string",
        number: 0,
        phone: "string",
        placeIdx: 0,
        profileImage: "string",
        room: 0,
      },
      timeTable: {
        endTime: "HH:mm",
        id: 0,
        name: "string",
        startTime: "HH:mm",
        type: "WEEKDAY",
      },
    },
  ]);

  const getDefaultStudyRoom = async () => {
    const { data } = await basicLocationRepository.getMyDefaultStudyRoom();
    console.log(data);
    setDefaultRoom(data);
  };

  useEffect(() => {
    getDefaultStudyRoom();
  }, []);

  return { defaultRoom };
};

export default useDefaultStudyRoom;
