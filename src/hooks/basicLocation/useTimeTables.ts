import { useEffect, useState } from "react";
import basicLocationRepository from "../../repository/basicLocation/basicLocation.repository";
import {
  studyRoomTimeTable,
  studyRoomTimeTableListResponse,
} from "../../types/basicLocation/basicLocation.type";

const useTimeTables = () => {
  const [timeTables, setTimeTables] = useState<studyRoomTimeTable[]>([]);
  const [timeTablesByWeekday, setTimeTablesByWeekday] = useState<
    studyRoomTimeTable[]
  >([]);
  const [timeTablesByWeekend, setTimeTablesByWeekend] = useState<
    studyRoomTimeTable[]
  >([]);

  const getTimetables = async () => {
    try {
      const { data } = await basicLocationRepository.getStudyRoomTimeTable();
      setTimeTables(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeTablesByType = async (type: string) => {
    try {
      const { data } =
        await basicLocationRepository.getStudyRoomTimeTableByType(type);
      if (type === "WEEKDAY") {
        setTimeTablesByWeekday(data);
      } else if (type === "WEEKEND") {
        setTimeTablesByWeekend(data);
      }
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    getTimetables();
    getTimeTablesByType("WEEKDAY");
    getTimeTablesByType("WEEKEND");
  }, []);

  return { timeTables, timeTablesByWeekday, timeTablesByWeekend };
};

export default useTimeTables;
