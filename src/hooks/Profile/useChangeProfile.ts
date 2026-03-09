import { ChangeEvent, useState } from "react";
import { Profile } from "types/Profile/profile.type";
import useProfileForm from "hooks/Profile/useProfileForm";
import useProfileImage from "hooks/Profile/useProfileImage";
import useProfileSubmit from "hooks/Profile/useProfileSubmit";

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
}

interface UseChangeProfileReturn {
  formData: FormDataState;
  previewImage: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => Promise<SubmitResult>;
  isBusy: boolean;
  onResetToDefault: () => void;
}

const useChangeProfile = (user?: Profile | null): UseChangeProfileReturn => {
  const { formData, onChange, getParsedNumbers } = useProfileForm(user);
  const {
    preview,
    isUploading,
    onChangeImage,
    onResetToDefault,
    uploadIfNeeded,
  } = useProfileImage(user?.profileImage ?? null);
  const { submit } = useProfileSubmit();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (isSubmitting || isUploading) return { success: false, reason: "busy" };
    try {
      setIsSubmitting(true);

      const uploadResult = await uploadIfNeeded();
      if (uploadResult.error) {
        return {
          success: false,
          studentError: false,
          profileError: true,
          reason: "upload",
        };
      }

      const profileImageUrl = uploadResult.url;
      const parsed = getParsedNumbers();

      const result = await submit(
        formData as any,
        parsed,
        profileImageUrl,
        user,
      );
      return result;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    previewImage: preview,
    onChange,
    onChangeImage,
    onSubmit,
    isBusy: isSubmitting || isUploading,
    onResetToDefault,
  };
};

export default useChangeProfile;
