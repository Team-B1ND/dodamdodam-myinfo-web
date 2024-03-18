import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import profileRepository from "../../repository/profile/profile.repository";
import patternCheck from "../../util/patternCheck";

const usePasswordChange = () => {
  const [pwData, setPwData] = useState({
    pw: "",
    newPw: "",
  });

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPwData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPassword = async (
    setIsOpenPasswordModifyModal: Dispatch<SetStateAction<boolean>>
  ) => {
    const { pw, newPw } = pwData;

    if (pw.trim() === "") {
      return B1ndToast.showInfo("현재 비밀번호를 입력해주세요");
    }

    if (newPw.trim() === "") {
      return B1ndToast.showInfo("새로운 비밀번호를 입력해주세요");
    }

    if (pw === newPw) {
      return window.alert("현재 비밀번호와 새로운 비밀번호가 같습니다");
    }

    if (!patternCheck.pwCheck(pw) || !patternCheck.pwCheck(newPw)) {
      return window.alert(
        "7 ~ 20 글자 내로 알파벳 대소문자와 숫자를 사용하여 비밀번호를 입력해주세요"
      );
    }

    try {
      await profileRepository.patchMyPassword({
        password: newPw,
      });
      B1ndToast.showSuccess("비밀번호 수정 성공");
      setPwData({ pw: "", newPw: "" });
      setIsOpenPasswordModifyModal(false);
    } catch (error) {
      B1ndToast.showError("비밀번호 수정 실패");
    }
  };

  return { onChangePassword, pwData, onSubmitPassword };
};

export default usePasswordChange;
