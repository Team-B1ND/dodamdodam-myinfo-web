import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { useMutation, useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { BusApplyStatus } from "repositories/BusApply/busApply.params";
import busApplyRepository from "repositories/BusApply/busApply.repository";
import { MyAppliedBusResponse } from "types/BusApply/busApply.type";

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

export const useToggleBusApplyStatus = () => {
  const mutation = useMutation((status: BusApplyStatus) => 
    busApplyRepository.toggleBusApplyStatus(status)
  );
  return mutation
}

export const useApplyBusSeat = () => {
  const mutation = useMutation((seat: number) => 
    busApplyRepository.applyBusSeat(seat)
  );
  return mutation
}

export const useChangeBusSeat = () => {
  const mutation = useMutation((seat: number) => 
    busApplyRepository.changeBusSeat(seat)
  );
  return mutation
}