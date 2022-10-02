import { useEffect, useState } from "react";
import pointRepository from "../../repository/point/point.repository";
import { myPointScore } from "../../types/myPoint/myPoint.type";

const useMyPointScore = () => {
  const [myPoint, setMyPoint] = useState<myPointScore>({
    domBonus: 0,
    domMinus: 0,
    schBonus: 0,
    schMinus: 0,
    student: {
      id: 0,
    },
  });

  const getMyPoint = async () => {
    try {
      const { data } = await pointRepository.getMyPoint();
      setMyPoint(data);
      console.log(myPoint);
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
