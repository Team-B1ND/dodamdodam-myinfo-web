import { useQuery } from "react-query";
import pointRepository from "repositories/Point/point.repository";

export const useGetMyPointReasonQuery = (type: "DORMITORY" | "SCHOOL") =>
  useQuery(["point/getMyPointReasonQuery", type], () =>
    pointRepository.getPointReason(type)
  );
