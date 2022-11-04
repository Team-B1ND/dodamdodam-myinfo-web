import { useState, useEffect } from "react";
import cookie from "../../lib/cookie/cookie";
import pointRepository from "../../repository/point/point.repository";
import { PointReason } from "../../types/myPoint/myPoint.type";

const usePointReason = () => {
  const [dormitoryBonusPointReasonData, setDormitoryBonusPointReasonData] =
    useState<PointReason[]>([]);
  const [dormitoryMinusPointReasonData, setDormitoryMinusPointReasonData] =
    useState<PointReason[]>([]);

  const [schoolBonusPointReasonData, setSchoolBonusPointReasonData] = useState<
    PointReason[]
  >([]);
  const [schoolMinusPointReasonData, setSchoolMinusPointReasonData] = useState<
    PointReason[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await pointRepository.getPointReason();
        setDormitoryBonusPointReasonData(
          data.filter((items) => {
            return items.type === "BONUS" && items.place === "DORMITORY";
          })
        );
        setDormitoryMinusPointReasonData(
          data.filter((items) => {
            return items.type === "MINUS" && items.place === "DORMITORY";
          })
        );
        setSchoolBonusPointReasonData(
          data.filter((items) => {
            return items.type === "BONUS" && items.place === "SCHOOL";
          })
        );
        setSchoolMinusPointReasonData(
          data.filter((items) => {
            return items.type === "MINUS" && items.place === "SCHOOL";
          })
        );
      } catch (error) {}
    })();
  }, []);

  return {
    dormitoryMinusPointReasonData,
    dormitoryBonusPointReasonData,
    schoolBonusPointReasonData,
    schoolMinusPointReasonData,
  };
};

export default usePointReason;
