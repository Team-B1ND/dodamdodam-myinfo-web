import { useQuery } from "react-query";
import passRepository from "repositories/Pass/pass.repository";

export const useGetMyOutGoingQuery = () =>
  useQuery("pass/getMyPasses", () => passRepository.getMyOutGoing());
