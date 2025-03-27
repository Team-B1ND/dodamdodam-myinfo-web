import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { getMyPointParam } from "repositories/Point/point.param";
import pointRepository from "repositories/Point/point.repository";
import { MyPointResponse } from "types/MyPoint/myPoint.type";

export const useGetMyPointReasonQuery = (type:getMyPointParam) =>
  useQuery(["point/getMyPointReasonQuery", type], () =>
    pointRepository.getPointReason(type)
  );

  export const useGetMyPointQuery = (
    { type }: getMyPointParam,
    options?: UseQueryOptions<
      MyPointResponse,
      AxiosError,
      MyPointResponse,
      string[]
    >
  ): UseQueryResult<MyPointResponse, AxiosError> =>
    useQuery(
      QUERY_KEYS.point.getMy(type),
      () => pointRepository.getMyPoint({ type }),
      {
      
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 60,
        ...options,
         onError: (error:AxiosError) => {
                if(error.status === 500){
                  B1ndToast.showError("서버 에러발생");
                  return;
                }
                window.location.reload();
              },
      }
    );