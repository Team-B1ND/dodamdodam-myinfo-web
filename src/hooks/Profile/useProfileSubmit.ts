import {
  usePatchStudentInfo,
  usePatchMainProfile,
} from "queries/Profile/profile.query";
import { Profile } from "types/Profile/profile.type";
import patternCheck from "utils/patternCheck";

interface FormDataState {
  name: string;
  phone: string;
  email: string;
  grade: string;
  room: string;
  number: string;
}

interface SubmitResult {
  success: boolean;
  studentError?: boolean;
  profileError?: boolean;
  reason?: "busy" | "noChanges" | "upload" | string;
};

const useProfileSubmit = () => {
  const studentMutation = usePatchStudentInfo();
  const profileMutation = usePatchMainProfile();

  const submit = async (
    formData: FormDataState,
    parsed: {
      gradeNum: number | null;
      roomNum: number | null;
      numberNum: number | null;
    },
    profileImageUrl: string | null,
    user?: Profile | null,
  ): Promise<SubmitResult> => {
    const { gradeNum, roomNum, numberNum } = parsed;

    const isStudentChanged =
      (gradeNum !== null && gradeNum !== user?.student?.grade) ||
      (roomNum !== null && roomNum !== user?.student?.room) ||
      (numberNum !== null && numberNum !== user?.student?.number);

    const isProfileChanged =
      formData.name !== (user?.name ?? "") ||
      formData.email !== (user?.email ?? "") ||
      formData.phone !== (user?.phone ?? "") ||
      profileImageUrl !== (user?.profileImage ?? null);

    if (!isStudentChanged && !isProfileChanged)
      return { success: false, reason: "noChanges" };

    let studentError = false;
    let profileError = false;

    if (isProfileChanged) {
      if (formData.email && !patternCheck.emailCheck(formData.email)) {
        return { success: false, profileError: true, reason: "invalidEmail" };
      }
      if (formData.phone && !patternCheck.phoneCheck(formData.phone)) {
        return { success: false, profileError: true, reason: "invalidPhone" };
      }
    }

    if (isStudentChanged) {
      try {
        await studentMutation.mutateAsync({
          grade: gradeNum ?? user?.student?.grade ?? 0,
          room: roomNum ?? user?.student?.room ?? 0,
          number: numberNum ?? user?.student?.number ?? 0,
        });
      } catch (err) {
        studentError = true;
      }
    }

    if (isProfileChanged) {
      try {
        await profileMutation.mutateAsync({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          profileImage: profileImageUrl,
        });
      } catch (err) {
        profileError = true;
      }
    }

    const success = !studentError && !profileError;
    return { success, studentError, profileError };
  };

  return { submit };
};

export default useProfileSubmit;
