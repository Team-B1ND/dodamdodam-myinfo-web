import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { useMutation, useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { BusApplyStatus } from "repositories/BusApply/busApply.params";
import busApplyRepository from "repositories/BusApply/busApply.repository";
import { BusSeatInfo, MyAppliedBusResponse } from "types/BusApply/busApply.type";

export const useGetMyAppliedBus = (
  options?: UseQueryOptions<
    MyAppliedBusResponse,
    AxiosError,
    MyAppliedBusResponse,
    string
  >
): UseQueryResult<MyAppliedBusResponse, AxiosError>  => 
  useQuery(
  QUERY_KEYS.bus.getMyAppliedBus,
  () => busApplyRepository.getMyAppliedBus(),
  {
    cacheTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 60,
    suspense: true,
    ...options,
  },
);

export const useGetBusSeatInfo = (
  id: number,
  options?: UseQueryOptions<
    BusSeatInfo,
    AxiosError,
    BusSeatInfo,
    string
  >
): UseQueryResult<BusSeatInfo, AxiosError>  => 
 useQuery(
   QUERY_KEYS.bus.getSeatInfo,
   () => busApplyRepository.getBusSeatInfo(id),
   {
     cacheTime: 1000 * 60 * 10,
     staleTime: 1000 * 60 * 60,
     suspense: true,
     ...options,
   },
);

export const useToggleBusApplyStatusMutation = () => {
  const mutation = useMutation((status: BusApplyStatus) => 
    busApplyRepository.toggleBusApplyStatus(status)
  );
  return mutation
}

export const useApplyBusSeatMutation = () => {
  const mutation = useMutation((seat: number) => 
    busApplyRepository.applyBusSeat(seat)
  );
  return mutation
}

export const useChangeBusSeatMutation = () => {
  const mutation = useMutation((seat: number) => 
    busApplyRepository.changeBusSeat(seat)
  );
  return mutation
}