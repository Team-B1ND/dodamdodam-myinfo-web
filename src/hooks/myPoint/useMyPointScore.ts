import { useEffect, useState } from "react";
import pointRepository from "../../repository/point/point.repository";
import { myPointScore } from "../../types/myPointScore/myPointScore.type";

const useMyPointScore = () => {
  const [myPoint, setMyPoint] = useState<myPointScore>();

  const getMyPoint = async () => {
    try {
      const { data } = await pointRepository.getMyPoint();
      setMyPoint(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyPoint();
  }, []);

  return { myPoint };
};

export default useMyPointScore;
