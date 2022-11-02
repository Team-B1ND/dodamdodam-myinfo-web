import { useEffect, useState } from "react";
import basicLocationRepository from "../../repository/basicLocation/basicLocation.repository";
import {
  studyRoomTimeTable,
  studyRoomTimeTableListResponse,
} from "../../types/basicLocation/basicLocation.type";

const useTimeTables = () => {
  const [timeTablesByWeekday, setTimeTablesByWeekday] = useState<
    studyRoomTimeTable[]
  >([
    {
      endTime: "HH:mm",
      id: 0,
      name: "string",
      startTime: "HH:mm",
      type: "WEEKDAY",
    },
    {
      endTime: "HH:mm",
      id: 0,
      name: "string",
      startTime: "HH:mm",
      type: "WEEKDAY",
    },
    {
      endTime: "HH:mm",
      id: 0,
      name: "string",
      startTime: "HH:mm",
      type: "WEEKDAY",
    },
    {
      endTime: "HH:mm",
      id: 0,
      name: "string",
      startTime: "HH:mm",
      type: "WEEKDAY",
    },
  ]);
  const [timeTablesByWeekend, setTimeTablesByWeekend] = useState<
    studyRoomTimeTable[]
  >([
    {
      endTime: "HH:mm",
      id: 0,
      name: "string",
      startTime: "HH:mm",
      type: "WEEKDAY",
    },
    {
      endTime: "HH:mm",
      id: 0,
      name: "string",
      startTime: "HH:mm",
      type: "WEEKDAY",
    },
    {
      endTime: "HH:mm",
      id: 0,
      name: "string",
      startTime: "HH:mm",
      type: "WEEKDAY",
    },
    {
      endTime: "HH:mm",
      id: 0,
      name: "string",
      startTime: "HH:mm",
      type: "WEEKDAY",
    },
  ]);

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
    getTimeTablesByType("WEEKDAY");
    getTimeTablesByType("WEEKEND");
  }, []);

  return { timeTablesByWeekday, timeTablesByWeekend };
};

export default useTimeTables;
