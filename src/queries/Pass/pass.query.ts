import { useMutation, useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import passRepository from "repositories/Pass/pass.repository";
import { QUERY_KEYS } from "queries/queryKey";
import { MyPassesResponse } from "types/Pass/pass.type";
import { AxiosError } from "axios";


export const useGetMyOutGoingQuery = (
  options?: UseQueryOptions<
       MyPassesResponse,
       AxiosError,
       MyPassesResponse,
       string[]
     >
): UseQueryResult<MyPassesResponse, AxiosError>  => 
 useQuery(
   [QUERY_KEYS.pass.getPass], 
   () => passRepository.getMyOutGoing(),
   {
     cacheTime: 1000 * 60 * 10,
     staleTime: 1000 * 60 * 60,
     suspense: true,
     ...options,
   },
 );
 

 export const useDeleteMyOutGoingQuery = () => {
  const mutation = useMutation((id:number)=>
      passRepository.deleteOutGoing(id)
    )
    return mutation;
};