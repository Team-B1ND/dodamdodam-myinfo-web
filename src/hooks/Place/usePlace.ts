import { useEffect, useState } from "react";
import placeRepository from "repositories/Place/place.repository";
import { Place } from "types/Place/place.type";

const usePlace = () => {
  const [placeList, setPlaceList] = useState<Place[]>([
    {
      id: 0,
      name: "",
      type: {
        id: 0,
        name: "",
      },
    },
  ]);

  const getPlaceList = async () => {
    try {
      const { data } = await placeRepository.getPlace();
      setPlaceList(data);
    } catch (error) {}
  };

  useEffect(() => {
    getPlaceList();
  }, []);

  return { placeList };
};

export default usePlace;
