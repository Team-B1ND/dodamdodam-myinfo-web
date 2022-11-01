import React from "react";
import pointRepository from "../../repository/point/point.repository";

const usePointReason = () => {
  const getPointDetail = () => {
    try {
      const data = pointRepository.getPointReason();
    } catch (error) {}
  };

  return { getPointDetail };
};

export default usePointReason;
