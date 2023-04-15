import { useQuery } from "react-query";
import passRepository from "../../repository/pass/pass.repository";

export const useGetMyOutGoingQuery = () =>
  useQuery("pass/getMyPasses", () => passRepository.getMyOutGoing());
