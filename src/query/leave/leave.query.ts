import { useQuery } from "react-query";
import leaveRepository from "../../repository/leave/leave.repository";

export const useGetMyOutSleep = () =>
  useQuery("/out-sleeping/my", () => leaveRepository.getMyOutSleeping());
