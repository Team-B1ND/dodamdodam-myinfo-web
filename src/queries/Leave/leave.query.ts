import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { useMutation, useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import leaveRepository from "repositories/Leave/leave.repository";
import { MyLeavesResponse } from "types/Leave/leave.type";

export const useGetMySleepingQuery = (
  options?: UseQueryOptions<
      MyLeavesResponse,
       AxiosError,
       MyLeavesResponse,
       string[]
     >
): UseQueryResult<MyLeavesResponse, AxiosError>  => 
 useQuery(
   [QUERY_KEYS.leave.getLeave], 
   () => leaveRepository.getMyOutSleeping(),
   {
     cacheTime: 1000 * 60 * 10,
     staleTime: 1000 * 60 * 60,
     suspense: true,
     ...options,
   },
 );

 export const useDeleteMySleepingQuery = () => {
  const mutation = useMutation((id:number)=>
      leaveRepository.deleteOutSleeping(id)
    )
    return mutation;
};