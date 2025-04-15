import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import token from "libs/Token/token";
import { QUERY_KEYS } from "queries/queryKey";
import { useMutation, useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { patchStudentInfoParam } from "repositories/Profile/profile.param";
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



export const usePatchStudentInfo = ()=>{
    const mutation = useMutation(({grade,
      room,
      number}:patchStudentInfoParam)=>
        profileRepository.patchStudentInfo({grade,room,number}),
      )
      return mutation;
}


export const usePatchMainProfile = () => {
  return useMutation(profileRepository.patchMainProfile, {
    onSuccess: () => {
      B1ndToast.showSuccess("프로필 정보가 수정되었습니다.");
    },
    onError: () => {
      B1ndToast.showError("프로필 정보 수정에 실패했습니다.");
    },
  });
};