import { useQuery } from "react-query";
import leaveRepository from "repositories/leave/leave.repository";

export const useGetMyOutSleep = () =>
  useQuery("/out-sleeping/my", () => leaveRepository.getMyOutSleeping());
