import { useQuery } from "react-query";
import leaveRepository from "repositories/Leave/leave.repository";

export const useGetMyOutSleep = () =>
  useQuery("/out-sleeping/my", () => leaveRepository.getMyOutSleeping());
