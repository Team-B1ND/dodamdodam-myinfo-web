import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import token from "libs/Token/token";
import { QUERY_KEYS } from "queries/queryKey";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import profileRepository from "repositories/Profile/profile.repository";
import { myProfileResponse } from "types/Profile/profile.type";


export const useGetProfileQuery = (
    options?: UseQueryOptions<
        myProfileResponse,
        AxiosError,
        myProfileResponse,
        string
    >
  ): UseQueryResult<myProfileResponse, AxiosError> =>
    useQuery(QUERY_KEYS.member.getMy, () => profileRepository.getMyProfileInfo(), {
      ...options,
      onError: () => {
        B1ndToast.showError("토큰이 위조 됐습니다");
        token.clearToken();
        window.location.href = "/sign";
      },
    });