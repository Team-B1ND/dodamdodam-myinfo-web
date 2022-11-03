import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import basicLocationRepository from "../../repository/basicLocation/basicLocation.repository";
import { basicLocationRoomDayAtom } from "../../store/basicLocation";
import {
  applyDefaultRoom,
  basicLocationDay,
  defaultStudyRoom,
  studyRoomTimeTable,
} from "../../types/basicLocation/basicLocation.type";

const useDefaultStudyRoom = () => {
  const [savedTempDefaultData, setSavedTempDefaultData] = useState<
    defaultStudyRoom[]
  >([]);

  const [currentType, setCurrentType] = useRecoilState(
    basicLocationRoomDayAtom
  );

  const [timeTable, setTimeTable] = useState<studyRoomTimeTable[]>([]);

  const [tempApplyPlaces, setTempApplyPlaces] = useState<applyDefaultRoom[]>([
    {
      placeId: 0,
      timeTableId: 0,
    },
    {
      placeId: 0,
      timeTableId: 0,
    },
    {
      placeId: 0,
      timeTableId: 0,
    },
    {
      placeId: 0,
      timeTableId: 0,
    },
  ]);

  const [applyPlaces, setApplyPlaces] = useState<applyDefaultRoom[]>([
    {
      placeId: 0,
      timeTableId: 0,
    },
    {
      placeId: 0,
      timeTableId: 0,
    },
    {
      placeId: 0,
      timeTableId: 0,
    },
    {
      placeId: 0,
      timeTableId: 0,
    },
  ]);

  const [isChange, setIsChange] = useState<boolean>(false);

  const getSavedDefault = async () => {
    try {
      const { data } = await basicLocationRepository.getMyDefaultStudyRoomByDay(
        {
          day: currentType,
        }
      );
      setSavedTempDefaultData(data);
    } catch (error) {}
  };

  const checkSavedDefaultStudy = useCallback(() => {
    setIsChange(false);
    applyPlaces.forEach((item, idx) => {
      console.log(tempApplyPlaces.includes(item));

      if (!tempApplyPlaces.includes(item)) {
        setIsChange(true);
      }
    });
  }, [applyPlaces, tempApplyPlaces]);

  useEffect(() => {
    checkSavedDefaultStudy();
  }, [checkSavedDefaultStudy]);

  useEffect(() => {
    console.log(isChange);
  }, [isChange]);

  const getTimeTable = async () => {
    if (currentType === "SUNDAY" || currentType === "SATURDAY") {
      try {
        const { data } =
          await basicLocationRepository.getStudyRoomTimeTableByType({
            type: "WEEKEND",
          });

        setTimeTable(data);
      } catch (error) {}
    } else {
      try {
        const { data } =
          await basicLocationRepository.getStudyRoomTimeTableByType({
            type: "WEEKDAY",
          });
        setTimeTable(data);
      } catch (error) {}
    }
  };

  const onChangeDefaultType = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentType(e.target.value as basicLocationDay);
  };

  const onChangePlace = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value, id } = e.target;

    setApplyPlaces((prev) => {
      let newHandlePlaces = prev;

      const newHandlePlace: applyDefaultRoom = {
        placeId: Number(value),
        timeTableId: Number(name),
      };

      newHandlePlaces.splice(Number(id), 1, newHandlePlace);

      return [...newHandlePlaces];
    });
  };

  const loadInitialPlace = () => {
    const handlePlaces = tempApplyPlaces.map((item, idx) => {
      return {
        timeTableId: timeTable[idx].id,
        placeId: item.placeId,
      };
    });

    setTempApplyPlaces([...handlePlaces]);
    setApplyPlaces([...handlePlaces]);
  };

  const loadSavePlace = () => {
    const handlePlaces: applyDefaultRoom[] = tempApplyPlaces.map(
      (item, idx) => {
        const handlePlace: defaultStudyRoom | undefined =
          savedTempDefaultData.find(
            (defaultData) => defaultData.timeTable.id === item.timeTableId
          );

        if (handlePlace) {
          return {
            placeId: handlePlace.place.id,
            timeTableId: handlePlace.timeTable.id,
          };
        } else {
          return {
            placeId: item.placeId,
            timeTableId: item.timeTableId,
          };
        }
      }
    );

    setTempApplyPlaces([...handlePlaces]);
    setApplyPlaces([...handlePlaces]);
  };

  const onSubmitDefaultStudyRoom = async () => {
    try {
      await basicLocationRepository.postMyDefaultStudyRoomByDay({
        day: currentType,
        defaultStudyRooms: applyPlaces,
      });
      setTempApplyPlaces([...applyPlaces]);
      window.alert("기본위치 설정 성공");
    } catch (error) {}
  };

  const resetPlace = () => {
    setTempApplyPlaces((prev) => {
      return prev.map((item) => {
        return { placeId: 0, timeTableId: 0 };
      });
    });

    setApplyPlaces((prev) => {
      return prev.map((item) => {
        return { placeId: 0, timeTableId: 0 };
      });
    });
  };

  useEffect(() => {
    getTimeTable();
    getSavedDefault();
    resetPlace();
  }, [currentType]);

  useEffect(() => {
    if (timeTable.length > 0) {
      loadInitialPlace();
      if (savedTempDefaultData.length !== 0) {
        loadSavePlace();
      }
    }
  }, [savedTempDefaultData, timeTable]);

  return {
    timeTable,
    onChangeDefaultType,
    onChangePlace,
    applyPlaces,
    onSubmitDefaultStudyRoom,
    isChange,
  };
};

export default useDefaultStudyRoom;
