import { useQuery } from "react-query";
import pointRepository from "../../repository/point/point.repository";

export const useGetMyPointReasonQuery = (type: "DORMITORY" | "SCHOOL") =>
  useQuery(["point/getMyPointReasonQuery", type], () =>
    pointRepository.getPointReason(type)
  );
