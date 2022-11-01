import { sha512 } from "js-sha512";
import { ChangeEvent, useEffect, useState } from "react";
import profileRepository from "../../repository/profile/profile.repository";

const usePasswordChange = () => {
  const [pwData, setPwData] = useState({
    pw: "",
    newPw: "",
  });

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPwData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPassword = async () => {
    if (pwData.pw === "" || pwData.newPw === "") {
      window.alert("비밀번호를 입력해주세요");
    }

    try {
      const { pw, newPw } = pwData;
      await profileRepository.patchMyPassword({
        pw: sha512(pw),
        newPw: sha512(newPw),
      });
      window.alert("비밀번호 수정 성공");
      setPwData({ pw: "", newPw: "" });
    } catch (error) {
      window.alert("비밀번호 수정 실패");
    }
  };

  return { onChangePassword, pwData, onSubmitPassword };
};

export default usePasswordChange;
