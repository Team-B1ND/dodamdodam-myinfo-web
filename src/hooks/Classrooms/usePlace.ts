import { useEffect, useState } from "react";
import classroomRepository from "repositories/place/place.repository";
import { Place } from "types/place/place.type";

const usePlace = () => {
  const [placeList, setPlaceList] = useState<Place[]>([
    {
      id: 0,
      name: "string",
      type: {
        id: 0,
        name: "string",
      },
    },
  ]);

  const getPlaceList = async () => {
    try {
      const { data } = await classroomRepository.getPlace();
      setPlaceList(data);
    } catch (error) {}
  };

  useEffect(() => {
    getPlaceList();
  }, []);

  return { placeList };
};

export default usePlace;
